-- Fix RLS policies for contact_submissions table
-- Run this in your Supabase SQL Editor

-- First, let's drop any existing policies and recreate them
DROP POLICY IF EXISTS "Allow public inserts" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public reads" ON contact_submissions;

-- Create a proper policy that allows anyone to insert
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT TO public
  WITH CHECK (true);

-- Also enable SELECT for confirmation (optional but recommended)
CREATE POLICY "Allow public reads" ON contact_submissions
  FOR SELECT TO public
  USING (true);