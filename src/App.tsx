import { useState, useEffect, useCallback } from 'react';
import { supabase, type Quote } from '@/lib/supabase';
import {
  Sparkles,
  RefreshCw,
  Quote as QuoteIcon,
  Heart,
  Share2,
  ChevronDown,
  Flame,
  Sun,
  Moon,
  TrendingUp,
  Target,
  Zap,
  Brain,
  Star,
  ArrowUp,
  Mail,
} from 'lucide-react';

const CATEGORIES = [
  { key: 'all', label: 'Todas', icon: Sparkles },
  { key: 'success', label: 'Éxito', icon: Star },
  { key: 'perseverance', label: 'Perseverancia', icon: Flame },
  { key: 'action', label: 'Acción', icon: Zap },
  { key: 'mindset', label: 'Mentalidad', icon: Brain },
  { key: 'courage', label: 'Coraje', icon: Target },
  { key: 'dreams', label: 'Sueños', icon: Moon },
  { key: 'self-belief', label: 'Confianza', icon: TrendingUp },
  { key: 'discipline', label: 'Disciplina', icon: Sun },
];

const CATEGORY_LABELS: Record<string, string> = {
  success: 'Éxito',
  perseverance: 'Perseverancia',
  action: 'Acción',
  mindset: 'Mentalidad',
  courage: 'Coraje',
  dreams: 'Sueños',
  'self-belief': 'Confianza',
  discipline: 'Disciplina',
  passion: 'Pasión',
  habit: 'Hábito',
  opportunity: 'Oportunidad',
  failure: 'Fracaso',
  focus: 'Enfoque',
  excellence: 'Excelencia',
  attitude: 'Actitud',
  happiness: 'Felicidad',
  wisdom: 'Sabiduría',
  willpower: 'Voluntad',
  change: 'Cambio',
  creativity: 'Creatividad',
  growth: 'Crecimiento',
  authenticity: 'Autenticidad',
  gratitude: 'Gratitud',
  optimism: 'Optimismo',
  education: 'Educación',
  determination: 'Determinación',
  curiosity: 'Curiosidad',
  general: 'General',
};

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [dbError, setDbError] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    loadQuotes();
    const saved = localStorage.getItem('lamotivadora_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const loadQuotes = useCallback(async () => {
    setLoading(true);
    setDbError(false);
    try {
      const { data, error } = await supabase.from('quotes').select('*');
      if (error) {
        console.error('Error loading quotes:', error);
        setDbError(true);
        setLoading(false);
        return;
      }
      setQuotes(data || []);
      if (data && data.length > 0) {
        const dayOfYear = Math.floor(
          (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
        );
        setCurrentQuote(data[dayOfYear % data.length]);
      }
      setLoading(false);
    } catch (err) {
      console.error('Failed to load quotes:', err);
      setDbError(true);
      setLoading(false);
    }
  }, []);

  const refreshQuote = useCallback(() => {
    if (quotes.length === 0) return;
    setRefreshing(true);
    setTimeout(() => {
      const filtered =
        activeCategory === 'all'
          ? quotes
          : quotes.filter((q) => q.category === activeCategory);
      if (filtered.length === 0) {
        setRefreshing(false);
        return;
      }
      let next = filtered[Math.floor(Math.random() * filtered.length)];
      if (currentQuote && filtered.length > 1) {
        while (next.id === currentQuote.id) {
          next = filtered[Math.floor(Math.random() * filtered.length)];
        }
      }
      setCurrentQuote(next);
      setRefreshing(false);
    }, 400);
  }, [quotes, activeCategory, currentQuote]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id];
      localStorage.setItem('lamotivadora_favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const shareQuote = async () => {
    if (!currentQuote) return;
    const text = `"${currentQuote.text}" — ${currentQuote.author}`;
    try {
      if (navigator.share) {
        await navigator.share({ text, title: 'La Motivadora' });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // user cancelled or no permission
    }
  };

  const scrollToQuotes = () => {
    document.getElementById('quotes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const favoriteQuotes = quotes.filter((q) => favorites.includes(q.id));

  return (
    <div className="min-h-screen hero-gradient text-white">
      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              La Motivadora
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                showFavorites
                  ? 'bg-amber-500 text-white'
                  : 'glass hover:bg-white/20 text-gray-200'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Favoritos</span>
              {favorites.length > 0 && (
                <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Tu dosis diaria de inspiración</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight">
            Enciende tu <span className="text-gradient-gold">fuego interior</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Cada gran logro comenzó con una sola idea, una sola palabra, un solo paso.
            Encuentra la chispa que te impulse hoy.
          </p>

          {/* Quote of the Day Card */}
          {dbError ? (
            <div className="glass rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto animate-scale-in">
              <p className="text-gray-300 text-lg mb-2">No se pudieron cargar las frases.</p>
              <p className="text-gray-500 text-sm">Verifica tu conexión e inténtalo de nuevo.</p>
              <button
                onClick={() => loadQuotes()}
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105"
              >
                <RefreshCw className="w-4 h-4" />
                Reintentar
              </button>
            </div>
          ) : loading ? (
            <div className="glass rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto animate-pulse">
              <div className="h-6 w-24 bg-white/10 rounded-full mx-auto mb-6" />
              <div className="space-y-3">
                <div className="h-4 bg-white/10 rounded w-full" />
                <div className="h-4 bg-white/10 rounded w-3/4 mx-auto" />
              </div>
              <div className="h-4 w-32 bg-white/10 rounded-full mx-auto mt-6" />
            </div>
          ) : currentQuote ? (
            <div
              key={currentQuote.id}
              className="glass rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto quote-card-shadow animate-scale-in"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <QuoteIcon className="w-5 h-5 text-amber-400" />
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Frase del Día
                </span>
              </div>
              <blockquote className="font-serif text-2xl sm:text-3xl leading-relaxed mb-6 text-white">
                "{currentQuote.text}"
              </blockquote>
              <p className="text-gray-400 text-sm mb-8">— {currentQuote.author}</p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => toggleFavorite(currentQuote.id)}
                  className={`p-3 rounded-full transition-all hover:scale-110 ${
                    favorites.includes(currentQuote.id)
                      ? 'bg-amber-500 text-white'
                      : 'glass hover:bg-white/20 text-gray-300'
                  }`}
                  aria-label="Marcar como favorito"
                >
                  <Heart
                    className={`w-5 h-5 ${favorites.includes(currentQuote.id) ? 'fill-white' : ''}`}
                  />
                </button>
                <button
                  onClick={shareQuote}
                  className="p-3 rounded-full glass hover:bg-white/20 text-gray-300 transition-all hover:scale-110"
                  aria-label="Compartir"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={refreshQuote}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105"
                >
                  <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                  <span>Otra frase</span>
                </button>
              </div>
              {copied && (
                <p className="text-amber-400 text-sm mt-4 animate-fade-in">
                  ¡Copiado al portapapeles!
                </p>
              )}
            </div>
          ) : null}

          <button
            onClick={scrollToQuotes}
            className="mt-12 flex flex-col items-center gap-2 text-gray-500 hover:text-amber-400 transition-colors animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="text-xs uppercase tracking-widest">Explorar más</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes-section" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              {showFavorites ? 'Tus Favoritos' : 'Colección de Frases'}
            </h2>
            <p className="text-gray-400">
              {showFavorites
                ? `${favoriteQuotes.length} frase${favoriteQuotes.length !== 1 ? 's' : ''} guardada${favoriteQuotes.length !== 1 ? 's' : ''}`
                : 'Filtra por categoría y encuentra la motivación que buscas'}
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const count =
                cat.key === 'all'
                  ? quotes.length
                  : quotes.filter((q) => q.category === cat.key).length;
              if (cat.key !== 'all' && count === 0) return null;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    if (showFavorites) setShowFavorites(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.key && !showFavorites
                      ? 'bg-amber-500 text-white'
                      : 'glass hover:bg-white/20 text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  {count > 0 && (
                    <span className="text-xs opacity-60">{count}</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quotes Grid */}
          {showFavorites ? (
            favoriteQuotes.length === 0 ? (
              <div className="text-center py-20">
                <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Aún no tienes frases favoritas.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Toca el corazón en cualquier frase para guardarla aquí.
                </p>
              </div>
            ) : (
              <QuotesGrid
                quotes={favoriteQuotes}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            )
          ) : (
            <QuotesGrid
              quotes={
                activeCategory === 'all'
                  ? quotes
                  : quotes.filter((q) => q.category === activeCategory)
              }
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Contacto</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            ¿Tienes una frase que <span className="text-gradient-gold">inspirar</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Comparte tus frases favoritas, sugerencias, o simplemente saluda.
            Me encantaría saber de ti.
          </p>
          <a
            href="mailto:sandragravesmotivadora@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium hover:shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            sandragravesmotivadora@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <span className="font-serif text-lg font-bold">La Motivadora</span>
          </div>
          <p className="text-gray-500 text-sm">
            Comparto contigo lo que voy descubriendo en mi caminar con Dios, para que juntos podamos conocer mejor Su corazón.
          </p>
          <p className="text-gray-600 text-xs mt-4">
            Cada día más cerca de Dios.
          </p>
          <a
            href="mailto:sandragravesmotivadora@gmail.com"
            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-amber-400 text-sm mt-4 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            sandragravesmotivadora@gmail.com
          </a>
        </div>
      </footer>

      {/* Back to top */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 text-white shadow-lg hover:scale-110 transition-all z-40"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

function QuotesGrid({
  quotes,
  favorites,
  onToggleFavorite,
}: {
  quotes: Quote[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}) {
  if (quotes.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-lg">No hay frases en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quotes.map((quote, i) => (
        <div
          key={quote.id}
          className="glass rounded-2xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all hover:scale-[1.02] hover:shadow-xl group animate-fade-in-up"
          style={{ animationDelay: `${Math.min(i * 0.05, 0.5)}s` }}
        >
          <div>
            <div className="flex items-start justify-between mb-4">
              <QuoteIcon className="w-8 h-8 text-amber-400/30 group-hover:text-amber-400/60 transition-colors" />
              <button
                onClick={() => onToggleFavorite(quote.id)}
                className={`p-1.5 rounded-full transition-all hover:scale-110 ${
                  favorites.includes(quote.id)
                    ? 'text-amber-400'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
                aria-label="Favorito"
              >
                <Heart
                  className={`w-5 h-5 ${favorites.includes(quote.id) ? 'fill-amber-400' : ''}`}
                />
              </button>
            </div>
            <blockquote className="font-serif text-lg leading-relaxed text-gray-100 mb-4">
              "{quote.text}"
            </blockquote>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">— {quote.author}</p>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/5">
              {CATEGORY_LABELS[quote.category] || quote.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
