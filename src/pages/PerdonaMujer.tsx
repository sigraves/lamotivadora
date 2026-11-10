import PrayerLibrary, { type LibraryConfig } from '@/components/PrayerLibrary';
import {
  perdonaPrayers,
  perdonaTopics,
  perdonaLifeStages,
  getPerdonaPrayerBySlug,
} from '@/data/perdonaPrayers';

const config: LibraryConfig = {
  name: 'Perdona Mujer',
  basePath: '/PerdonaMujer',
  heroImage:
    'https://images.unsplash.com/photo-1507692049790-de5829034474?q=80&w=2000&auto=format&fit=crop',
  tagline: '100 oraciones para soltar el dolor y abrazar la libertad del perdón.',
  introText:
    'Bienvenida a este espacio de perdón y restauración, donde encontrarás palabras para soltar heridas, perdonar lo que parece imperdonable y recibir la libertad que solo Cristo puede dar.',
  searchPlaceholder: '¿A quién necesitas perdonar hoy?',
  prayers: perdonaPrayers,
  topics: perdonaTopics,
  lifeStages: perdonaLifeStages,
  getBySlug: getPerdonaPrayerBySlug,
  detailRouteRegex: /^\/perdonamujer\/oracion\/(.+)$/i,
  introAccent: 'bg-gradient-to-r from-sky-500 to-indigo-600',
};

export default function PerdonaMujer() {
  return <PrayerLibrary config={config} />;
}
