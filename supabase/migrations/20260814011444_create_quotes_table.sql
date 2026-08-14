/*
# Create quotes table for La Motivadora

## Overview
La Motivadora is a motivational app that displays inspirational quotes in Spanish.
This migration creates the quotes table and seeds it with a collection of motivational quotes.

## New Tables
- `quotes`
  - `id` (uuid, primary key)
  - `text` (text, the quote content, not null)
  - `author` (text, the quote author, not null)
  - `category` (text, category like "success", "perseverance", etc.)
  - `created_at` (timestamp)

## Security
- Enable RLS on `quotes`.
- Allow anon + authenticated to read (public/shared data).
- No insert/update/delete from the frontend — quotes are managed via migrations only.
*/

CREATE TABLE IF NOT EXISTS quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  text text NOT NULL,
  author text NOT NULL,
  category text NOT NULL DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_quotes" ON quotes;
CREATE POLICY "anon_select_quotes" ON quotes FOR SELECT
  TO anon, authenticated USING (true);

-- Seed motivational quotes in Spanish
INSERT INTO quotes (text, author, category) VALUES
  ('El éxito es la suma de pequeños esfuerzos repetidos día tras día.', 'Robert Collier', 'success'),
  ('La única forma de hacer un gran trabajo es amar lo que haces.', 'Steve Jobs', 'passion'),
  ('No esperes. El tiempo nunca será el adecuado.', 'Napoleon Hill', 'action'),
  ('Cree en Dios y todo será posible.', 'Anónimo', 'mindset'),
  ('La perseverancia es la madre del éxito.', 'Anónimo', 'perseverance'),
  ('El mayor riesgo es no tomar ninguno.', 'Anónimo', 'courage'),
  ('La disciplina es el puente entre metas y logros.', 'Jim Rohn', 'discipline'),
  ('Cada día es una nueva oportunidad para cambiar tu vida.', 'Anónimo', 'opportunity'),
  ('El fracaso es simplemente la oportunidad de empezar de nuevo con más inteligencia.', 'Henry Ford', 'failure'),
  ('La mente es todo. Te conviertes en lo que piensas.', 'Buddha', 'mindset'),
  ('No cuentes los días, haz que los días cuenten.', 'Muhammad Ali', 'action'),
  ('La motivación te pone en marcha, el hábito es lo que hace que sigas.', 'Jim Ryun', 'habit'),
  ('El futuro pertenece a quienes creen en la belleza de sus sueños.', 'Eleanor Roosevelt', 'dreams'),
  ('La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.', 'Charles R. Swindoll', 'mindset'),
  ('Si quieres lograr algo que nunca has tenido, debes hacer algo que nunca has hecho.', 'Anónimo', 'action'),
  ('La paciencia es amarga, pero sus frutos son dulces.', 'Aristóteles', 'perseverance'),
  ('No te detengas cuando estés cansado, detente cuando hayas terminado.', 'Anónimo', 'perseverance'),
  ('El único modo de hacer un descubrimiento extraordinario es siendo extraordinariamente curioso.', 'Anónimo', 'curiosity'),
  ('Los obstáculos son esas cosas frightantes que ves cuando apartas los ojos de tu meta.', 'Henry Ford', 'focus'),
  ('La calidad no es un acto, es un hábito.', 'Aristóteles', 'excellence'),
  ('Tu actitud, no tu aptitud, determinará tu altitud.', 'Zig Ziglar', 'attitude'),
  ('La mejor manera de predecir el futuro es crearlo.', 'Peter Drucker', 'action'),
  ('El que quiere hacer algo encuentra un medio; el que no quiere hacer nada encuentra una excusa.', 'Anónimo', 'determination'),
  ('La felicidad no es algo que viene hecho, viene de tus propias acciones.', 'Dalai Lama', 'happiness'),
  ('El conocimiento habla, la sabiduría escucha.', 'Jimi Hendrix', 'wisdom'),
  ('La fuerza no viene de la capacidad física, sino de una voluntad indomable.', 'Mahatma Gandhi', 'willpower'),
  ('El cambio es la ley de la vida. Y aquellos que solo miran al pasado o al presente se perderán el futuro.', 'John F. Kennedy', 'change'),
  ('Nada en la vida debe ser temido, solo comprendido.', 'Marie Curie', 'courage'),
  ('El éxito no es definitivo, el fracaso no es fatal: es el coraje para continuar lo que cuenta.', 'Winston Churchill', 'courage'),
  ('La creatividad es la inteligencia divirtiéndose.', 'Albert Einstein', 'creativity'),
  ('Si puedes soñarlo, puedes hacerlo.', 'Walt Disney', 'dreams'),
  ('La diferencia entre lo ordinario y lo extraordinario es esa pequeña cosa extra.', 'Jimmy Johnson', 'excellence'),
  ('No importa qué tan lento vayas, siempre y cuando no te detengas.', 'Confucio', 'perseverance'),
  ('El verdadero viaje del descubrimiento no consiste en buscar nuevas tierras, sino en tener un nuevo ojo.', 'Marcel Proust', 'wisdom'),
  ('La vida comienza donde termina tu zona de confort.', 'Neale Donald Walsch', 'growth'),
  ('Tu tiempo es limitado, no lo malgastes viviendo la vida de otra persona.', 'Steve Jobs', 'authenticity'),
  ('La única persona que estás destinado a ser es la persona que decides ser.', 'Ralph Waldo Emerson', 'belief'),
  ('Los sueños no funcionan a menos que tú lo hagas.', 'John C. Maxwell', 'action'),
  ('La gratitud convierte lo que tenemos en suficiente.', 'Anónimo', 'gratitude'),
  ('El optimismo es la fe que conduce al logro.', 'Helen Keller', 'optimism'),
  ('La educación es el arma más poderosa que puedes usar para cambiar el mundo.', 'Nelson Mandela', 'education'),
  ('Levántate cada mañana con la determinación de ser mejor de lo que fuiste ayer.', 'Anónimo', 'growth'),
  ('La pasión es energía. Siente el poder que viene de enfocarte en lo que te entusiasma.', 'Oprah Winfrey', 'passion'),
  ('El miedo es el camino al lado oscuro. El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento.', 'Yoda', 'wisdom'),
  ('No puedes tener una vida positiva con una mente negativa.', 'Anónimo', 'mindset'),
  ('El secreto de salir adelante es empezar.', 'Mark Twain', 'action'),
  ('La confianza en Dios es el primer secreto del éxito.', 'Anónimo', 'mindset'),
  ('Cada logro comienza con la decisión de intentarlo.', 'Anónimo', 'determination'),
  ('La vida es un 10% lo que me pasa y un 90% de cómo reacciono a ello.', 'John Maxwell', 'attitude'),
  ('El mayor gloría en vivir no está en nunca caer, sino en levantarnos cada vez que caemos.', 'Nelson Mandela', 'perseverance')
ON CONFLICT DO NOTHING;
