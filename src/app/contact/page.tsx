"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { submitContactForm } from "@/lib/supabase";
import { useState } from "react";
import dynamic from "next/dynamic";
import GradientText from "@/components/GradientText";

const BlurText = dynamic(() => import("@/components/BlurText"), {
  ssr: false,
  loading: () => <div className="h-16 animate-pulse bg-muted/50 rounded" />
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    projectCategories: [] as string[],
    objectives: '',
    referralSource: [] as string[],
    referralPerson: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: 'projectCategories' | 'referralSource', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        website: formData.website,
        project_categories: formData.projectCategories,
        objectives: formData.objectives,
        referral_source: formData.referralSource,
        referral_person: formData.referralPerson
      });

      setSubmitMessage('Thank you! Your inquiry has been submitted successfully.');
      setFormData({
        name: '',
        email: '',
        website: '',
        projectCategories: [],
        objectives: '',
        referralSource: [],
        referralPerson: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your inquiry. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-16">
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-center mb-4">
            <BlurText
              text="Have a project in mind? Let's talk"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-4xl font-bold"
            />
          </div>
          <p className="text-lg text-gray-600 text-left">
            I&apos;d like to understand more about your company and project goals. The more context you
            provide, the more effective our collaboration will be!
          </p>
        </div>

        {submitMessage && (
          <div className={`mb-6 p-4 rounded-md ${
            submitMessage.includes('Thank you') 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                What&apos;s your name?
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Mark Williams"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                What&apos;s your email?
              </label>
              <Input
                id="email"
                type="email"
                placeholder="mark@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              What&apos;s the website of your company?
            </label>
            <Input
              id="website"
              type="text"
              placeholder="e.g. acme.com or linkedin.com/company/acme"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              className="w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              If you don&apos;t have a website, please provide either your company name or the LinkedIn page of your company.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Project Category
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox 
                id="landing-page" 
                label="Landing Page Design" 
                checked={formData.projectCategories.includes('Landing Page Design')}
                onChange={(e) => handleCheckboxChange('projectCategories', 'Landing Page Design', e.target.checked)}
              />
              <Checkbox 
                id="mobile-app" 
                label="Mobile App Design" 
                checked={formData.projectCategories.includes('Mobile App Design')}
                onChange={(e) => handleCheckboxChange('projectCategories', 'Mobile App Design', e.target.checked)}
              />
              <Checkbox 
                id="web-app" 
                label="Web App Design" 
                checked={formData.projectCategories.includes('Web App Design')}
                onChange={(e) => handleCheckboxChange('projectCategories', 'Web App Design', e.target.checked)}
              />
              <Checkbox 
                id="website" 
                label="Website Design" 
                checked={formData.projectCategories.includes('Website Design')}
                onChange={(e) => handleCheckboxChange('projectCategories', 'Website Design', e.target.checked)}
              />
              <Checkbox 
                id="ux-audit" 
                label="UX Audit" 
                checked={formData.projectCategories.includes('UX Audit')}
                onChange={(e) => handleCheckboxChange('projectCategories', 'UX Audit', e.target.checked)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-2">
              What are the project objectives?
            </label>
            <Textarea
              id="objectives"
              placeholder="Tell me about your site, project requirements, and when you&apos;d like to start."
              value={formData.objectives}
              onChange={(e) => handleInputChange('objectives', e.target.value)}
              className="w-full min-h-[120px]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              How did you find out about me?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Checkbox 
                id="twitter" 
                label="X / Twitter" 
                checked={formData.referralSource.includes('X / Twitter')}
                onChange={(e) => handleCheckboxChange('referralSource', 'X / Twitter', e.target.checked)}
              />
              <Checkbox 
                id="dribbble" 
                label="Dribbble" 
                checked={formData.referralSource.includes('Dribbble')}
                onChange={(e) => handleCheckboxChange('referralSource', 'Dribbble', e.target.checked)}
              />
              <Checkbox 
                id="linkedin" 
                label="LinkedIn" 
                checked={formData.referralSource.includes('LinkedIn')}
                onChange={(e) => handleCheckboxChange('referralSource', 'LinkedIn', e.target.checked)}
              />
              <Checkbox 
                id="peerlist" 
                label="Peerlist" 
                checked={formData.referralSource.includes('Peerlist')}
                onChange={(e) => handleCheckboxChange('referralSource', 'Peerlist', e.target.checked)}
              />
              <Checkbox 
                id="layers" 
                label="Layers" 
                checked={formData.referralSource.includes('Layers')}
                onChange={(e) => handleCheckboxChange('referralSource', 'Layers', e.target.checked)}
              />
              <Checkbox 
                id="google" 
                label="Google Search" 
                checked={formData.referralSource.includes('Google Search')}
                onChange={(e) => handleCheckboxChange('referralSource', 'Google Search', e.target.checked)}
              />
              <Checkbox 
                id="reference" 
                label="Reference" 
                checked={formData.referralSource.includes('Reference')}
                onChange={(e) => handleCheckboxChange('referralSource', 'Reference', e.target.checked)}
              />
              <Checkbox 
                id="other" 
                label="Other" 
                checked={formData.referralSource.includes('Other')}
                onChange={(e) => handleCheckboxChange('referralSource', 'Other', e.target.checked)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
              Who referred you?
            </label>
            <Input
              id="referral"
              type="text"
              placeholder="Enter their name or company"
              value={formData.referralPerson}
              onChange={(e) => handleInputChange('referralPerson', e.target.value)}
              className="w-full"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base font-medium disabled:opacity-50 rounded-lg"
          >
            {isSubmitting ? 'Sending...' : (
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className=""
              >
                Send an inquiry
              </GradientText>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}