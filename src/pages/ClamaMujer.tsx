import PrayerLibrary, { type LibraryConfig } from '@/components/PrayerLibrary';
import {
  clamaPrayers,
  clamaTopics,
  clamaLifeStages,
  getClamaPrayerBySlug,
} from '@/data/clamaPrayers';

const config: LibraryConfig = {
  name: 'Clama Mujer',
  basePath: '/ClamaMujer',
  heroImage:
    'https://images.unsplash.com/photo-1507692049790-de5829034474?q=80&w=2000&auto=format&fit=crop',
  tagline: '100 oraciones para clamar a Dios con audacia en medio de la tormenta.',
  introText:
    'Bienvenida a este espacio de clamor, donde encontrarás palabras para gritar a Dios desde lo profundo de tu necesidad y confiar que Él escucha el grito de quienes le aman.',
  searchPlaceholder: '¿Por qué necesitas clamar hoy?',
  prayers: clamaPrayers,
  topics: clamaTopics,
  lifeStages: clamaLifeStages,
  getBySlug: getClamaPrayerBySlug,
  detailRouteRegex: /^\/clamamujer\/oracion\/(.+)$/i,
  introAccent: 'bg-gradient-to-r from-rose-600 to-rose-800',
  cardExperienceId: 'clama',
};

export default function ClamaMujer() {
  return <PrayerLibrary config={config} />;
}
