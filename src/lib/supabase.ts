import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.');
}

export const supabase = createClient(
  supabaseUrl || 'http://localhost:54321',
  supabaseAnonKey || 'placeholder',
);

export type Quote = {
  id: string;
  text: string;
  author: string;
  category: string;
  created_at: string;
};
