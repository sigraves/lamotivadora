import { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Search,
  ArrowLeft,
  BookOpen,
  X,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Filter,
  Copy,
  Share2,
  Check,
  AlertCircle,
} from 'lucide-react';

/* ---------- Types ---------- */
export type PrayerItem = {
  id: number;
  slug: string;
  title: string;
  topic: string;
  lifeStage: string;
  bibleReference: string;
  body: string;
};

export type LibraryConfig = {
  name: string;              // "Ora Mujer"
  basePath: string;          // "/OraMujer"
  heroImage: string;         // background URL
  tagline: string;           // "Un espacio para acercarte a Dios..."
  introText: string;         // intro paragraph
  searchPlaceholder: string; // "¿Por qué deseas orar hoy?"
  prayers: PrayerItem[];
  topics: string[];
  lifeStages: string[];
  getBySlug: (slug: string) => PrayerItem | undefined;
  detailRouteRegex: RegExp;  // /^\/oramujer\/oracion\/(.+)$/i
  introAccent: string;       // gradient classes for intro bar
};

/* ---------- Centralized copyright and attribution ---------- */
const ATTRIBUTION_SHORT = '© 2026 Sandra Graves | La Motivadora — www.lamotivadora.com';
const ATTRIBUTION_COPY = '© 2026 Sandra Graves | La Motivadora\nwww.lamotivadora.com';
const ATTRIBUTION_SHARE = 'Sandra Graves | La Motivadora';
const SITE_URL = 'https://www.lamotivadora.com';

/* ---------- UI helpers ---------- */
function GoldButton({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-brand-900 font-semibold text-sm sm:text-base shadow-lg shadow-gold-500/20 hover:shadow-xl hover:shadow-gold-500/30 hover:scale-[1.03] transition-all ${className}`}
    >
      {children}
    </button>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        active
          ? 'bg-brand-700 text-white shadow-md'
          : 'bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:bg-brand-50'
      }`}
    >
      {label}
    </button>
  );
}

/* ---------- Nav bar ---------- */
function NavBar({ name, basePath, onBack }: { name: string; basePath: string; onBack: () => void }) {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href={basePath} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md">
            <BookOpen className="w-5 h-5 text-gold-400" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold text-brand-900">{name}</span>
            <span className="text-xs text-gold-600 font-medium tracking-wide">
              Biblioteca de oraciones
            </span>
          </div>
        </a>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-brand-800 hover:bg-brand-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </button>
      </div>
    </nav>
  );
}

/* ---------- Footer ---------- */
function Footer({ tagline }: { tagline: string }) {
  return (
    <footer className="bg-brand-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-gold-400" />
          </div>
          <div className="text-left">
            <p className="font-serif text-base font-bold">Sandra Graves</p>
            <p className="text-xs text-gold-400">La Motivadora</p>
          </div>
        </div>
        <p className="text-brand-400 text-sm">
          {tagline}
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 text-sm mt-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </a>
      </div>
    </footer>
  );
}

/* ================================================================
   LIBRARY PAGE (list view)
================================================================ */
function LibraryList({ config }: { config: LibraryConfig }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeFilterCount = (selectedTopic ? 1 : 0) + (selectedStage ? 1 : 0);

  const filteredPrayers = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return config.prayers.filter((prayer) => {
      const matchesSearch =
        q === '' ||
        prayer.title.toLowerCase().includes(q) ||
        prayer.topic.toLowerCase().includes(q) ||
        prayer.lifeStage.toLowerCase().includes(q) ||
        prayer.bibleReference.toLowerCase().includes(q) ||
        prayer.body.toLowerCase().includes(q);

      const matchesTopic = selectedTopic === null || prayer.topic === selectedTopic;
      const matchesStage = selectedStage === null || prayer.lifeStage === selectedStage;

      return matchesSearch && matchesTopic && matchesStage;
    });
  }, [searchQuery, selectedTopic, selectedStage, config]);

  const clearAll = () => {
    setSearchQuery('');
    setSelectedTopic(null);
    setSelectedStage(null);
  };

  const hasActiveFilters = searchQuery || selectedTopic || selectedStage;

  const goToPrayer = (prayer: PrayerItem) => {
    const url = `${config.basePath}/oracion/${prayer.slug}`;
    window.history.pushState({}, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="min-h-screen bg-brand-50">
      <NavBar name={config.name} basePath={config.basePath} onBack={() => (window.location.href = '/')} />

      {/* HEADER */}
      <section
        className="pt-16 pb-16 px-6 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${config.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-brand-900/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-brand-900/60 to-brand-900/80" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-300 font-medium">{config.name}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-4">
            {config.name}
          </h1>
          <div className="gold-divider mx-auto my-6" />
          <p className="text-lg sm:text-xl text-brand-200 leading-relaxed max-w-xl mx-auto">
            {config.tagline}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`w-full h-[5px] rounded-full mb-6 ${config.introAccent}`} />
          <p className="text-sm sm:text-base text-brand-700 leading-relaxed">
            {config.introText}
          </p>
        </div>
      </section>

      {/* SEARCH + FILTERS */}
      <section className="py-6 px-6 bg-brand-50 sticky top-[64px] z-40 border-y border-brand-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-400" />
              <input
                type="text"
                placeholder={config.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 rounded-full bg-white border border-brand-200 text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-700 transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-sm transition-all whitespace-nowrap ${
                filtersOpen || activeFilterCount > 0
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-white text-brand-700 border border-brand-200 hover:border-brand-400'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filtros
              {activeFilterCount > 0 && (
                <span className="bg-gold-400 text-brand-900 text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1.5">
                  {activeFilterCount}
                </span>
              )}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {filtersOpen && (
            <div className="mt-4 pt-4 border-t border-brand-100">
              <div className="mb-4">
                <p className="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
                  Tema
                </p>
                <div className="flex flex-wrap gap-2">
                  <FilterChip
                    label="Todos"
                    active={selectedTopic === null}
                    onClick={() => setSelectedTopic(null)}
                  />
                  {config.topics.map((topic) => (
                    <FilterChip
                      key={topic}
                      label={topic}
                      active={selectedTopic === topic}
                      onClick={() =>
                        setSelectedTopic(selectedTopic === topic ? null : topic)
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
                  Etapa de vida
                </p>
                <div className="flex flex-wrap gap-2">
                  <FilterChip
                    label="Todas"
                    active={selectedStage === null}
                    onClick={() => setSelectedStage(null)}
                  />
                  {config.lifeStages.map((stage) => (
                    <FilterChip
                      key={stage}
                      label={stage}
                      active={selectedStage === stage}
                      onClick={() =>
                        setSelectedStage(selectedStage === stage ? null : stage)
                      }
                    />
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <div className="text-center">
                  <button
                    onClick={clearAll}
                    className="text-sm text-gold-600 font-medium hover:text-gold-500 transition-colors"
                  >
                    Limpiar todos los filtros
                  </button>
                </div>
              )}
            </div>
          )}

          {!filtersOpen && hasActiveFilters && (
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              {selectedTopic && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-brand-100 text-brand-700">
                  {selectedTopic}
                  <button
                    onClick={() => setSelectedTopic(null)}
                    className="hover:text-brand-900"
                    aria-label="Quitar filtro de tema"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedStage && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-brand-100 text-brand-700">
                  {selectedStage}
                  <button
                    onClick={() => setSelectedStage(null)}
                    className="hover:text-brand-900"
                    aria-label="Quitar filtro de etapa"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={clearAll}
                className="text-xs text-gold-600 font-medium hover:text-gold-500 transition-colors"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PRAYER CARDS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-brand-500 mb-6">
            {filteredPrayers.length}{' '}
            {filteredPrayers.length === 1 ? 'oración disponible' : 'oraciones disponibles'}
          </p>

          {filteredPrayers.length === 0 && (
            <div className="text-center py-16">
              <AlertCircle className="w-12 h-12 text-brand-300 mx-auto mb-4" />
              <p className="text-brand-600 text-lg mb-6 max-w-md mx-auto">
                No encontramos una oración con esas palabras. Intenta buscar otro tema.
              </p>
              <button
                onClick={clearAll}
                className="text-gold-600 font-medium hover:text-gold-500 transition-colors"
              >
                Limpiar todos los filtros
              </button>
            </div>
          )}

          {filteredPrayers.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrayers.map((prayer) => (
                <button
                  key={prayer.id}
                  onClick={() => goToPrayer(prayer)}
                  className="group text-left rounded-2xl bg-white border border-brand-100 p-6 card-shadow hover:card-shadow-lg hover:border-gold-300 hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700">
                      {prayer.topic}
                    </span>
                    <span className="text-xs text-brand-400">{prayer.lifeStage}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-900 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                    {prayer.title}
                  </h3>
                  <p className="text-sm text-brand-600 leading-relaxed line-clamp-3 mb-4">
                    {prayer.body.split('\n')[0]}
                  </p>
                  {prayer.bibleReference && (
                    <p className="text-xs text-gold-600 font-medium flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {prayer.bibleReference}
                    </p>
                  )}
                  <p className="text-sm text-gold-600 font-medium mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Leer oración <ChevronRight className="w-4 h-4" />
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* COPYRIGHT */}
      <section className="py-12 px-6 bg-white border-t border-brand-100">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-brand-50 border border-brand-100 p-8 sm:p-10">
            <h2 className="font-serif text-lg font-bold text-brand-900 mb-4 text-center">
              © 2026 Sandra Graves | La Motivadora
            </h2>
            <p className="text-sm text-brand-600 leading-relaxed text-center mb-4">
              Todos los derechos reservados.
            </p>
            <p className="text-sm text-brand-600 leading-relaxed text-center mb-4">
              Estas oraciones pueden compartirse gratuitamente para fines personales, espirituales y de inspiración cristiana.
            </p>
            <p className="text-sm text-brand-600 leading-relaxed text-center mb-4">
              Si deseas reproducirlas o publicarlas en páginas web, redes sociales, blogs, videos, libros u otros medios, debes incluir el nombre completo de su autora, Sandra Graves, y un enlace visible a{' '}
              <a
                href={SITE_URL}
                className="text-gold-600 font-medium hover:text-gold-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.lamotivadora.com
              </a>
              .
            </p>
            <p className="text-sm text-brand-600 leading-relaxed text-center mb-4">
              No está permitido atribuirse la autoría de estas oraciones, modificarlas para presentarlas como propias ni comercializarlas sin autorización previa por escrito.
            </p>
            <p className="text-sm text-brand-800 font-medium leading-relaxed text-center">
              Comparte la oración, comparte la fe y reconoce su autoría.
            </p>
          </div>
        </div>
      </section>

      <Footer tagline={`${config.name} — Un espacio para acercarte a Dios en cada etapa de tu vida.`} />
    </div>
  );
}

/* ================================================================
   DETAIL PAGE
================================================================ */
function LibraryDetail({ config, slug }: { config: LibraryConfig; slug: string }) {
  const [copied, setCopied] = useState(false);
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied' | 'unsupported'>('idle');

  const prayer = config.getBySlug(slug);

  const goBack = useCallback(() => {
    window.history.pushState({}, '', config.basePath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }, [config.basePath]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!prayer) {
    return (
      <div className="min-h-screen bg-brand-50 flex flex-col">
        <NavBar name={config.name} basePath={config.basePath} onBack={goBack} />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <AlertCircle className="w-16 h-16 text-brand-300 mx-auto mb-6" />
            <h1 className="font-serif text-2xl font-bold text-brand-900 mb-3">
              Oración no encontrada
            </h1>
            <p className="text-brand-600 mb-8">
              La oración que buscas no está disponible. Puede que el enlace haya cambiado.
            </p>
            <GoldButton onClick={goBack}>
              <ArrowLeft className="w-4 h-4" />
              Volver a las oraciones
            </GoldButton>
          </div>
        </div>
        <Footer tagline={`${config.name} — Un espacio para acercarte a Dios en cada etapa de tu vida.`} />
      </div>
    );
  }

  const handleCopy = async () => {
    const text = `${prayer.title}\n\n${prayer.bibleReference}\n\n${prayer.body}\n\n${ATTRIBUTION_COPY}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: `${prayer.title} — ${config.name}`,
      text: `${prayer.title}\n${prayer.bibleReference}\n\n${ATTRIBUTION_SHARE}`,
      url: shareUrl,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 2500);
      } catch {
        setShareStatus('unsupported');
        setTimeout(() => setShareStatus('idle'), 2500);
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      <NavBar name={config.name} basePath={config.basePath} onBack={goBack} />

      <section className="py-16 px-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700">
              {prayer.topic}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-200 text-gold-600">
              {prayer.lifeStage}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-900 leading-tight mb-6">
            {prayer.title}
          </h1>

          {prayer.bibleReference && (
            <div className="flex items-center gap-2 mb-8 pb-8 border-b border-brand-100">
              <BookOpen className="w-5 h-5 text-gold-500" />
              <p className="text-gold-600 font-semibold text-base">{prayer.bibleReference}</p>
            </div>
          )}

          <div className="bg-white rounded-2xl card-shadow p-8 sm:p-10">
            <div className="max-w-none">
              {prayer.body.split('\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-brand-700 text-base sm:text-lg leading-[1.8] mb-4 last:mb-0 font-serif"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-brand-100 text-center">
              <p className="text-xs text-brand-500 leading-relaxed">
                {'© 2026 Sandra Graves | La Motivadora — '}
                <a
                  href={SITE_URL}
                  className="text-gold-600 font-medium hover:text-gold-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.lamotivadora.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-200 text-brand-800 font-medium text-sm hover:border-gold-400 hover:bg-gold-50 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  ¡Copiada!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar oración
                </>
              )}
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-200 text-brand-800 font-medium text-sm hover:border-gold-400 hover:bg-gold-50 transition-all"
            >
              {shareStatus === 'copied' ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  ¡Enlace copiado!
                </>
              ) : shareStatus === 'unsupported' ? (
                <>
                  <Share2 className="w-4 h-4" />
                  No se pudo compartir
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  Compartir oración
                </>
              )}
            </button>
          </div>

          <div className="text-center mt-8">
            <GoldButton onClick={goBack}>
              <ArrowLeft className="w-4 h-4" />
              Volver a las oraciones
            </GoldButton>
          </div>
        </div>
      </section>

      <Footer tagline={`${config.name} — Un espacio para acercarte a Dios en cada etapa de tu vida.`} />
    </div>
  );
}

/* ================================================================
   DEFAULT EXPORT — Generic library router
================================================================ */
export default function PrayerLibrary({ config }: { config: LibraryConfig }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const detailMatch = path.match(config.detailRouteRegex);

  if (detailMatch) {
    return <LibraryDetail config={config} slug={decodeURIComponent(detailMatch[1])} />;
  }

  return <LibraryList config={config} />;
}

export { GoldButton, ATTRIBUTION_SHORT, ATTRIBUTION_COPY, ATTRIBUTION_SHARE, SITE_URL };
