/*
# Create leads table for contact form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) - submitter's full name
  - `email` (text, not null) - submitter's email address
  - `project_scope` (text, not null) - selected project scope category
  - `message` (text, not null) - freeform project details
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `leads`.
- Allow anon + authenticated INSERT only (public contact form).
- No public SELECT/UPDATE/DELETE — leads are private to the agency owner.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_scope text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);
