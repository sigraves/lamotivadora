import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  Menu,
  X,
  Play,
  Youtube,
  Mail,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Heart,
  Sparkles,
} from 'lucide-react';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@SandraGraves';
const EMAIL = 'sandragravesmotivadora@gmail.com';

const PLAYLISTS = [
  { url: 'https://www.youtube.com/playlist?list=PLeIBgnKkDN7I', title: 'Mensajes de fe' },
  { url: 'https://www.youtube.com/playlist?list=PLTb7hjsvVWPI', title: 'Reflexiones' },
  { url: 'https://www.youtube.com/playlist?list=PLauChhbcXn2dfqIWF3EEYkEBos7hHwrWN', title: 'Estudios bíblicos' },
  { url: 'https://www.youtube.com/playlist?list=PLauChhbcXn2c7OynbNCk6KjTevHU4-Hon', title: 'Conversaciones' },
  { url: 'https://www.youtube.com/playlist?list=PLauChhbcXn2e5eL2s3mSy8JkgwF3GNCiy', title: 'Ora Primero' },
  { url: 'https://www.youtube.com/playlist?list=PLauChhbcXn2efoaLQyGTJsF_9Iz3S1wF-', title: 'Testimonios' },
];

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#mensajes', label: 'Mensajes' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#contacto', label: 'Contacto' },
];

/* ---------- Scroll reveal hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Button ---------- */
function GoldButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-brand-900 font-semibold text-sm sm:text-base shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-[1.03] transition-all ${className}`}
    >
      {children}
    </a>
  );
}

function OutlineButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-brand-700/30 text-brand-800 font-semibold text-sm sm:text-base hover:bg-brand-700 hover:text-white hover:border-brand-700 transition-all ${className}`}
    >
      {children}
    </a>
  );
}

/* ---------- Section heading ---------- */
function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-10">
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-brand-900'
        }`}
      >
        {children}
      </h2>
      <div className="gold-divider mt-5" />
    </div>
  );
}

/* ================================================================
   APP
================================================================ */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-brand-50">
      {/* ===================== NAV ===================== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-gold-400" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-serif text-lg font-bold ${scrolled ? 'text-brand-900' : 'text-brand-900'}`}>
                Sandra Graves
              </span>
              <span className="text-xs text-gold-600 font-medium tracking-wide">
                La Motivadora
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-brand-800 hover:bg-brand-100 hover:text-brand-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-800 hover:bg-brand-100 transition-colors"
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-brand-100 shadow-lg animate-fade-in">
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-brand-800 hover:bg-brand-100 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===================== HERO ===================== */}
      <section id="inicio" className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 px-6 overflow-hidden">
        {/* Soft background */}
        <div className="absolute inset-0 bg-brand-soft -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-200/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-brand-200 mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-sm text-brand-700 font-medium">Nuevos mensajes cada jueves</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-brand-900 leading-[1.1] mb-4">
                Sandra Graves
                <span className="block text-gradient-gold text-3xl sm:text-4xl md:text-5xl mt-1">
                  La Motivadora
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg sm:text-xl text-brand-700 font-medium mb-6 italic">
                Amiga. Hermana. Y sobre todo, hija de Dios.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-base sm:text-lg text-brand-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Mensajes que no solamente te animan.{' '}
                <span className="text-brand-900 font-semibold">Te ayudan a acercarte más a Dios.</span>
              </p>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-sm sm:text-base text-brand-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Sandra Graves es conferencista y autora, pero como La Motivadora, su propósito es
                sencillo: compartir la Palabra de Dios de una manera cercana, honesta y práctica.
                No viene a ocupar el lugar de Dios en tu vida. Viene a recordarte que vuelvas a Él.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <GoldButton href="#youtube">
                  <Play className="w-4 h-4 fill-current" />
                  Ver el mensaje de esta semana
                </GoldButton>
                <OutlineButton href="#sobre-mi">
                  Conoce La Motivadora
                  <ArrowRight className="w-4 h-4" />
                </OutlineButton>
              </div>
            </Reveal>
          </div>

          {/* Hero image */}
          <Reveal delay={300}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden card-shadow-lg">
                <img
                  src="/LosJueves.png"
                  alt="Sandra Graves, La Motivadora"
                  className="w-full h-[420px] sm:h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 sm:left-6 bg-white rounded-2xl card-shadow-lg px-6 py-4 max-w-[240px]">
                <p className="font-serif text-sm text-brand-900 font-semibold leading-snug">
                  "Si tienes que llorar, llora. Pero ora primero."
                </p>
                <p className="text-xs text-gold-600 mt-1 font-medium">— Sandra Graves</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== ¿QUIÉN ES LA MOTIVADORA? ===================== */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionHeading>
              No permitas que el nombre "La Motivadora" te confunda.
            </SectionHeading>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-base sm:text-lg text-brand-700 leading-relaxed">
              <p>
                Sandra no es pastora, evangelista ni terapeuta. Ella es{' '}
                <strong className="text-brand-900">La Motivadora</strong>.
              </p>
              <p>
                Pero eso no significa que aquí encontrarás solamente frases bonitas, pensamientos
                positivos o versículos diseñados para hacerte sentir bien por unos minutos.
              </p>
              <p>Algunos mensajes te animarán. Otros te harán pensar. Algunos podrán confrontarte.</p>
              <p>
                Pero todos tienen el mismo propósito:{' '}
                <strong className="text-brand-900">
                  ayudarte a acercarte más a Dios y fortalecer tu relación con Él.
                </strong>
              </p>
              <p>
                Sandra comparte la Palabra de Dios, experiencias de su propia vida, lecciones
                aprendidas en momentos difíciles y recordatorios sencillos de una verdad que ella
                misma ha tenido que aprender una y otra vez:
              </p>
              <p className="font-serif text-xl text-brand-900 font-semibold text-center py-6 px-8 bg-brand-50 rounded-2xl border-l-4 border-gold-500">
                Nuestra confianza debe estar primero en Dios, no en las personas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== SIGNATURE MESSAGE ===================== */}
      <section className="py-20 sm:py-28 px-6 bg-brand-gradient relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative">
          <Reveal>
            <div className="gold-divider mx-auto mb-8" />
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
              "Si tienes que llorar, llora.{' '}
              <span className="text-gradient-gold">Pero ora primero."</span>
            </blockquote>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-brand-200 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Porque hay momentos en los que las personas pueden escucharte, acompañarte y amarte,
              pero solamente Dios puede hacer lo que nadie más puede hacer.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="space-y-3 mb-10">
              {[
                'Dios puede transformarte.',
                'Dios puede perdonarte.',
                'Dios puede cambiarte.',
                'Dios puede levantarte.',
              ].map((line) => (
                <p
                  key={line}
                  className="font-serif text-xl sm:text-2xl text-gold-300 font-semibold"
                >
                  {line}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={350}>
            <p className="font-serif text-xl sm:text-2xl text-white italic">
              Y no hay nadie que pueda amarte como Él.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== MI HISTORIA ===================== */}
      <section id="sobre-mi" className="py-20 sm:py-28 px-6 bg-brand-50">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionHeading>No te hablo desde una vida perfecta.</SectionHeading>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-5 text-base sm:text-lg text-brand-700 leading-relaxed">
              <p>
                Sandra ha vivido momentos difíciles y temporadas que no fueron fáciles. Ha llorado.
                Ha cometido errores. Ha enfrentado retos, pérdidas, cambios y momentos en los que
                solamente podía seguir confiando en Dios.
              </p>
              <p>Por eso no comparte desde la perfección.</p>
              <p>
                Comparte desde la experiencia de alguien que puede mirar hacia atrás y reconocer
                que, si todavía está de pie, ha sido por{' '}
                <strong className="text-brand-900">la gracia y la misericordia de Dios</strong>.
              </p>
              <p>La Motivadora nació de ese lugar.</p>
              <p>
                No para decirte que nunca vas a sufrir, sino para recordarte{' '}
                <strong className="text-brand-900">
                  a quién puedes acudir cuando lo hagas.
                </strong>
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <blockquote className="mt-10 font-serif text-xl sm:text-2xl text-brand-900 font-semibold italic text-center py-8 px-8 bg-white rounded-2xl card-shadow border-l-4 border-gold-500">
              "Quiero amar a Dios por quién es Él y no solamente por lo que Él hace."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ===================== FE / BELIEFS ===================== */}
      <section className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-gold-500" />
              <span className="text-sm font-semibold text-gold-600 uppercase tracking-widest">
                Mi fe
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="gold-divider mb-8" />
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5 text-base sm:text-lg text-brand-700 leading-relaxed">
              <p>
                Sandra no identifica La Motivadora con una denominación cristiana específica. Ella
                se considera, sencillamente,{' '}
                <strong className="text-brand-900">discípula de Cristo</strong>.
              </p>
              <p>
                Su deseo es estudiar la Palabra, crecer continuamente en su relación con Dios y
                dejarse guiar por el Espíritu Santo.
              </p>
              <p>
                Su fe está puesta en{' '}
                <strong className="text-brand-900">
                  Dios: Padre, Hijo y Espíritu Santo — un solo Dios.
                </strong>
              </p>
              <p>
                La Motivadora no pretende reemplazar una iglesia, un pastor, atención médica,
                terapia, consejería profesional ni ninguna otra ayuda que una persona pueda
                necesitar.
              </p>
              <p>
                Su propósito es compartir mensajes de fe que dirijan nuevamente nuestra atención
                hacia Dios y Su Palabra.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FAVORITE VERSE ===================== */}
      <section className="py-24 sm:py-32 px-6 bg-brand-gradient relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-3xl" />

        <div className="max-w-2xl mx-auto text-center relative">
          <Reveal>
            <p className="text-sm font-semibold text-gold-400 uppercase tracking-widest mb-6">
              Un versículo que siempre llevo conmigo
            </p>
          </Reveal>

          <Reveal delay={150}>
            <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.3] mb-8">
              "Si ustedes creen, recibirán todo lo que pidan en oración."
            </blockquote>
          </Reveal>

          <Reveal delay={250}>
            <p className="font-serif text-lg sm:text-xl text-gold-300 font-semibold">
              Mateo 21:22 — NVI
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== YOUTUBE / LOS JUEVES ===================== */}
      <section id="youtube" className="py-20 sm:py-28 px-6 bg-brand-50">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeading>Nos vemos los jueves</SectionHeading>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base sm:text-lg text-brand-700 leading-relaxed mb-10 max-w-2xl">
              Cada jueves Sandra presenta un nuevo tema en su canal de YouTube, compartiendo la
              Palabra de Dios y conversaciones que nos ayudan a conocer mejor Su corazón.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-base sm:text-lg text-brand-600 leading-relaxed mb-10 max-w-2xl">
              Y como Sandra también es espontánea, de vez en cuando aparecerá un mensaje corto que
              simplemente nació de una experiencia, una reflexión, un reto o una victoria de la
              vida real.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-red-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-red-600/20 hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              <Youtube className="w-5 h-5" />
              Visitar el canal de YouTube
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===================== SERIES / PLAYLISTS ===================== */}
      <section id="mensajes" className="py-20 sm:py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeading>Mensajes para diferentes temporadas de tu vida</SectionHeading>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLAYLISTS.map((pl, i) => (
                <a
                  key={pl.url}
                  href={pl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden card-shadow hover:card-shadow-lg hover:scale-[1.02] transition-all bg-brand-50"
                >
                  {/* Thumbnail placeholder */}
                  <div className="relative h-44 bg-brand-gradient flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-brand-800/30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-400 transition-all">
                      <Play className="w-6 h-6 text-brand-800 fill-current ml-0.5" />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      <Youtube className="w-3 h-3" />
                      Playlist
                    </div>
                  </div>
                  {/* Title */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-brand-900 group-hover:text-gold-600 transition-colors">
                      {pl.title}
                    </h3>
                    <p className="text-sm text-brand-500 mt-1 flex items-center gap-1">
                      Ver en YouTube <ArrowRight className="w-3.5 h-3.5" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== ORA PRIMERO ===================== */}
      <section className="py-24 sm:py-32 px-6 bg-brand-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-500/20 rounded-full blur-3xl" />

        <div className="max-w-2xl mx-auto text-center relative">
          <Reveal>
            <p className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-gold mb-8 leading-none">
              ORA PRIMERO.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-2 mb-10">
              <p className="text-brand-200 text-lg sm:text-xl">Antes de rendirte.</p>
              <p className="text-brand-200 text-lg sm:text-xl">Antes de desesperarte.</p>
              <p className="text-brand-200 text-lg sm:text-xl">
                Antes de poner toda tu esperanza en otra persona.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 mb-8">
              Ora primero.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-brand-100 text-lg leading-relaxed mb-4">
              Habla con Dios. Maybe you will still cry. Maybe the answer will not come immediately.
              Maybe the situation will take time.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <p className="text-white text-lg leading-relaxed mb-10">
              But prayer reminds us where our help ultimately comes from.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <GoldButton href="#youtube">
              <Play className="w-4 h-4 fill-current" />
              Escuchar mensajes de La Motivadora
            </GoldButton>
          </Reveal>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contacto" className="py-20 sm:py-28 px-6 bg-brand-50">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <SectionHeading>Hablemos</SectionHeading>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-base sm:text-lg text-brand-700 leading-relaxed mb-10">
              ¿Quieres comunicarte con Sandra, compartir un testimonio, hacer una pregunta o
              consultar sobre una conferencia o participación?
            </p>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-brand-900 font-semibold text-sm sm:text-base shadow-lg shadow-gold-500/20 hover:shadow-xl hover:scale-[1.03] transition-all"
            >
              <Mail className="w-5 h-5" />
              Enviar un correo
            </a>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-6 text-sm text-brand-500">{EMAIL}</p>
          </Reveal>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-brand-900 text-white pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top */}
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold">Sandra Graves</p>
                  <p className="text-xs text-gold-400 font-medium tracking-wide">La Motivadora</p>
                </div>
              </div>
              <p className="text-brand-300 text-sm leading-relaxed max-w-xs">
                Conocer más de Dios es bueno. Conocer mejor Su corazón transforma nuestra relación
                con Él.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
                Navegación
              </p>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-brand-300 hover:text-gold-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + YouTube */}
            <div>
              <p className="text-sm font-semibold text-gold-400 uppercase tracking-widest mb-4">
                Conecta
              </p>
              <p className="text-brand-300 text-sm mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400" />
                {EMAIL}
              </p>
              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-300 hover:text-gold-300 text-sm flex items-center gap-2 transition-colors"
              >
                <Youtube className="w-4 h-4 text-gold-400" />
                @SandraGraves
              </a>
              <p className="text-brand-400 text-sm mt-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-gold-400" />
                Nuevos mensajes cada jueves
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-brand-700/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-brand-400 text-xs">
              © {new Date().getFullYear()} Sandra Graves | La Motivadora. Todos los derechos
              reservados.
            </p>
            <p className="text-brand-400 text-xs">Hecho con fe. Para acercarte más a Dios.</p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-700 text-white shadow-lg hover:bg-brand-800 hover:scale-110 transition-all z-40"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
