import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  website?: string
  project_categories: string[]
  objectives: string
  referral_source: string[]
  referral_person?: string
  created_at?: string
}

export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
  // Check if we have proper Supabase configuration at runtime
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Supabase configuration is missing. Please contact support.')
  }

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return result[0]
}