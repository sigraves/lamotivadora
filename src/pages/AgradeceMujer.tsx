import PrayerLibrary, { type LibraryConfig } from '@/components/PrayerLibrary';
import {
  agradecePrayers,
  agradeceTopics,
  agradeceLifeStages,
  getAgradecePrayerBySlug,
} from '@/data/agradecePrayers';

const config: LibraryConfig = {
  name: 'Agradece Mujer',
  basePath: '/AgradeceMujer',
  heroImage:
    'https://images.unsplash.com/photo-1507692049790-de5829034474?q=80&w=2000&auto=format&fit=crop',
  tagline: '100 oraciones para agradecer a Dios en cada temporada de tu vida.',
  introText:
    'Bienvenida a este espacio de gratitud, donde encontrarás palabras para dar gracias a Dios por Su bondad, Su fidelidad y las bendiciones grandes y pequeñas que llenan cada temporada de tu vida.',
  searchPlaceholder: '¿Por qué deseas agradecer hoy?',
  prayers: agradecePrayers,
  topics: agradeceTopics,
  lifeStages: agradeceLifeStages,
  getBySlug: getAgradecePrayerBySlug,
  detailRouteRegex: /^\/agradecemujer\/oracion\/(.+)$/i,
  introAccent: 'bg-gradient-to-r from-emerald-500 to-teal-600',
};

export default function AgradeceMujer() {
  return <PrayerLibrary config={config} />;
}
