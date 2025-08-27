import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

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
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return result[0]
}