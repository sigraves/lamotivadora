import { useEffect, useState, useCallback, useRef } from 'react';
import { X, RotateCcw, ChevronLeft, ChevronRight, BookOpen, Heart } from 'lucide-react';
import type { BibleCardExperience } from '@/data/bibleCards';

type Props = {
  experience: BibleCardExperience;
  onClose: () => void;
};

export default function BibleCardsModal({ experience, onClose }: Props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const totalCards = experience.scenarios.length;
  const scenario = experience.scenarios[currentCard];

  const handleClose = useCallback(() => {
    setIsFlipped(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  const handleNext = useCallback(() => {
    if (currentCard < totalCards - 1) {
      setIsFlipped(false);
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentCard((c) => c + 1);
      }, 350);
    }
  }, [currentCard, totalCards]);

  const handlePrev = useCallback(() => {
    if (currentCard > 0) {
      setIsFlipped(false);
      setTimeout(() => {
        setSelectedAnswer(null);
        setCurrentCard((c) => c - 1);
      }, 350);
    }
  }, [currentCard]);

  const handleRestart = useCallback(() => {
    setIsFlipped(false);
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentCard(0);
    }, 350);
  }, []);

  const handleSelectAnswer = (answerId: string) => {
    if (isFlipped && selectedAnswer !== answerId) {
      setIsFlipped(false);
      setTimeout(() => {
        setSelectedAnswer(answerId);
        setIsFlipped(true);
      }, 350);
    } else if (!isFlipped) {
      setSelectedAnswer(answerId);
      setIsFlipped(true);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'ArrowRight' && isFlipped) {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' && currentCard > 0) {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleClose, handleNext, handlePrev, isFlipped, currentCard]);

  // Focus management
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  // Lock body scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const activeAnswer = scenario.answers.find((a) => a.id === selectedAnswer);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brand-900/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${experience.title} — ${experience.subtitle}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl card-shadow-lg animate-scale-in"
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 bg-gradient-to-r ${experience.accentFrom} ${experience.accentTo} px-5 sm:px-8 py-5 flex items-center justify-between`}>
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white truncate">
                {experience.title}
              </h2>
              <p className="text-xs text-white/80 font-medium">{experience.subtitle}</p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={handleClose}
            aria-label="Cerrar experiencia"
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 sm:px-8 py-6 sm:py-8">
          {/* Intro */}
          {currentCard === 0 && !isFlipped && (
            <p className="text-sm sm:text-base text-brand-700 leading-relaxed mb-6 text-center">
              {experience.intro}
            </p>
          )}

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {experience.scenarios.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === currentCard
                    ? `w-8 bg-gradient-to-r ${experience.accentFrom} ${experience.accentTo}`
                    : i < currentCard
                    ? 'w-2 bg-brand-300'
                    : 'w-2 bg-brand-100'
                }`}
              />
            ))}
          </div>

          {/* Card container with 3D flip */}
          <div
            className="relative w-full"
            style={{ perspective: '1200px' }}
          >
            <div
              className={`relative w-full transition-transform duration-500`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* FRONT — Situation + Answers */}
              <div
                className="w-full"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className={`rounded-2xl border-2 ${isFlipped ? '' : `border-brand-100`} bg-brand-50 p-6 sm:p-8`}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-3">
                    Situación {currentCard + 1} de {totalCards}
                  </p>
                  <p className="font-serif text-lg sm:text-xl text-brand-900 leading-relaxed mb-3">
                    {scenario.situation}
                  </p>
                  <p className="text-sm text-brand-500 italic mb-6">
                    {scenario.context}
                  </p>

                  <p className="text-sm font-semibold text-brand-700 mb-3">
                    ¿Qué harías tú?
                  </p>

                  <div className="space-y-3">
                    {scenario.answers.map((answer) => (
                      <button
                        key={answer.id}
                        onClick={() => handleSelectAnswer(answer.id)}
                        className={`w-full text-left px-4 sm:px-5 py-4 rounded-xl border-2 transition-all text-sm sm:text-base leading-relaxed ${
                          selectedAnswer === answer.id
                            ? `bg-gradient-to-r ${experience.accentFrom} ${experience.accentTo} text-white border-transparent shadow-lg ${experience.accentGlow}`
                            : 'bg-white text-brand-700 border-brand-200 hover:border-brand-400 hover:bg-brand-50'
                        }`}
                      >
                        {answer.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* BACK — Reflection */}
              <div
                className="absolute inset-0 w-full"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {activeAnswer && (
                  <div className={`rounded-2xl border-2 border-transparent bg-gradient-to-br ${experience.accentFrom} ${experience.accentTo} p-6 sm:p-8 h-full flex flex-col`}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">
                      Reflexión bíblica
                    </p>
                    <p className="font-serif text-base sm:text-lg text-white leading-relaxed mb-4">
                      {activeAnswer.reflection}
                    </p>

                    {/* Bible verse */}
                    <div className="bg-white/15 rounded-xl p-4 mt-auto">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="w-4 h-4 text-white/80" />
                        <p className="text-sm font-semibold text-white">
                          {activeAnswer.bibleReference}
                        </p>
                      </div>
                      <p className="text-sm text-white/90 italic leading-relaxed">
                        «{activeAnswer.bibleText}»
                      </p>
                    </div>

                    {/* Your answer recap */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-xs text-white/60 mb-1">Tu respuesta:</p>
                      <p className="text-xs text-white/80 leading-relaxed">
                        {activeAnswer.label}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentCard === 0}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-brand-700 bg-brand-50 border border-brand-200 hover:bg-brand-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium text-brand-700 bg-brand-50 border border-brand-200 hover:bg-brand-100 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar
              </button>
            </div>

            <button
              onClick={handleNext}
              disabled={currentCard === totalCards - 1}
              className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${experience.accentButton} disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-[1.03]`}
            >
              {currentCard === totalCards - 1 ? 'Última tarjeta' : 'Siguiente'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Try other answers hint */}
          {isFlipped && (
            <p className="text-xs text-brand-400 text-center mt-4 animate-fade-in">
              Puedes seleccionar otra respuesta para ver una reflexión diferente
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
