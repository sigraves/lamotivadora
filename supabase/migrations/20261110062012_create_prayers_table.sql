/*
# Create prayers table for Ora Mujer library

## Purpose
This table stores the library of Spanish prayers for women ("Ora Mujer").
The prayers will be managed by Sandra/her team and displayed publicly on the site.
No sign-in is required to browse prayers — this is intentionally public content.

## New Tables
- `prayers`
  - `id` (uuid, primary key)
  - `title` (text, not null) — prayer title in Spanish
  - `bible_reference` (text) — associated scripture reference (e.g. "Mateo 21:22 — NVI")
  - `body` (text, not null) — full prayer text in Spanish
  - `topic` (text, not null) — prayer topic/category (e.g. "Ansiedad", "Gratitud", "Sanidad")
  - `life_stage` (text, not null) — life stage filter (e.g. "Joven", "Maternidad", "Matrimonio", "Madurez")
  - `sort_order` (integer, default 0) — manual ordering for curated display
  - `is_published` (boolean, default false) — allows drafts to exist without showing publicly
  - `created_at` (timestamptz, default now())
  - `updated_at` (timestamptz, default now())

## Indexes
- `idx_prayers_topic` on `topic` for filter queries
- `idx_prayers_life_stage` on `life_stage` for filter queries
- `idx_prayers_is_published` on `is_published` for efficient public queries
- `idx_prayers_title` on `title` for search

## Security
- RLS enabled on `prayers`.
- Grants: SELECT to `anon, authenticated` (public read, no sign-in needed).
- Grants: INSERT, UPDATE, DELETE to `authenticated` (Sandra or her team can manage prayers after signing in).
- Policies: anon + authenticated can SELECT published prayers only.
- Policies: authenticated can INSERT/UPDATE/DELETE all prayers (content management).
- The `is_published` column on SELECT means drafts are never visible to the public.
*/

CREATE TABLE IF NOT EXISTS prayers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  bible_reference text,
  body text NOT NULL,
  topic text NOT NULL,
  life_stage text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for filtering and search
CREATE INDEX IF NOT EXISTS idx_prayers_topic ON prayers(topic);
CREATE INDEX IF NOT EXISTS idx_prayers_life_stage ON prayers(life_stage);
CREATE INDEX IF NOT EXISTS idx_prayers_is_published ON prayers(is_published);
CREATE INDEX IF NOT EXISTS idx_prayers_title ON prayers(title);

-- Enable RLS
ALTER TABLE prayers ENABLE ROW LEVEL SECURITY;

-- Grants: public read, authenticated write
GRANT SELECT ON prayers TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON prayers TO authenticated;

-- SELECT: anyone can read published prayers
DROP POLICY IF EXISTS "public_select_published_prayers" ON prayers;
CREATE POLICY "public_select_published_prayers"
ON prayers FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- INSERT: authenticated users can add prayers
DROP POLICY IF EXISTS "auth_insert_prayers" ON prayers;
CREATE POLICY "auth_insert_prayers"
ON prayers FOR INSERT
TO authenticated
WITH CHECK (true);

-- UPDATE: authenticated users can edit prayers
DROP POLICY IF EXISTS "auth_update_prayers" ON prayers;
CREATE POLICY "auth_update_prayers"
ON prayers FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- DELETE: authenticated users can delete prayers
DROP POLICY IF EXISTS "auth_delete_prayers" ON prayers;
CREATE POLICY "auth_delete_prayers"
ON prayers FOR DELETE
TO authenticated
USING (true);
