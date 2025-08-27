-- Create the contact_submissions table
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    website TEXT,
    project_categories TEXT[] DEFAULT '{}',
    objectives TEXT NOT NULL,
    referral_source TEXT[] DEFAULT '{}',
    referral_person TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (since this is a contact form)
CREATE POLICY "Anyone can submit contact form" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Create a policy that only allows reading your own submissions (optional)
-- You might want to adjust this based on your needs
CREATE POLICY "Can only read own submissions" ON contact_submissions
    FOR SELECT USING (true); -- Change this if you want stricter access control