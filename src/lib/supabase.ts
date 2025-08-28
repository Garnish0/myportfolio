import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Create client with proper error handling
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  },
  global: {
    headers: {
      'Content-Type': 'application/json'
    }
  }
})

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
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  console.log('Supabase URL:', url)
  console.log('Supabase Key:', key ? key.substring(0, 20) + '...' : 'Missing')
  
  if (!url || !key || url.includes('placeholder') || key.includes('placeholder')) {
    throw new Error('Supabase configuration is missing or using placeholder values. Please check environment variables.')
  }

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()

  if (error) {
    console.error('Supabase error:', error)
    throw new Error(error.message)
  }

  return result[0]
}