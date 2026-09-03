import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type for the agency contact form leads
export type ContactLead = {
  id?: string;
  name: string;
  email: string;
  project_scope: string;
  message: string;
  created_at?: string;
};

// Type for the Steward Flow micro-SaaS leads
export type StewardLead = {
  id?: string;
  email: string;
  source: string;
  created_at?: string;
};