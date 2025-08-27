"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import dynamic from "next/dynamic";

const BlurText = dynamic(() => import("@/components/BlurText"), {
  ssr: false,
  loading: () => <div className="h-16 animate-pulse bg-muted/50 rounded" />
});

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <BlurText
            text="Have a project in mind? Let's talk"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold mb-4"
          />
          <p className="text-lg text-gray-600">
            I'd like to understand more about your company and project goals. The more context you
            provide, the more effective our collaboration will be!
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                What's your name?
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Mark Williams"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                What's your email?
              </label>
              <Input
                id="email"
                type="email"
                placeholder="mark@company.com"
                className="w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
              What's the website of your company?
            </label>
            <Input
              id="website"
              type="text"
              placeholder="e.g. acme.com or linkedin.com/company/acme"
              className="w-full"
            />
            <p className="text-sm text-gray-500 mt-1">
              If you don't have a website, please provide either your company name or the LinkedIn page of your company.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Project Category
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Checkbox id="landing-page" label="Landing Page Design" />
              <Checkbox id="mobile-app" label="Mobile App Design" />
              <Checkbox id="web-app" label="Web App Design" />
              <Checkbox id="website" label="Website Design" />
              <Checkbox id="ux-audit" label="UX Audit" />
            </div>
          </div>

          <div>
            <label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-2">
              What are the project objectives?
            </label>
            <Textarea
              id="objectives"
              placeholder="Tell me about your site, project requirements, and when you'd like to start."
              className="w-full min-h-[120px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              How did you find out about me?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Checkbox id="twitter" label="X / Twitter" />
              <Checkbox id="dribbble" label="Dribbble" />
              <Checkbox id="linkedin" label="LinkedIn" />
              <Checkbox id="peerlist" label="Peerlist" />
              <Checkbox id="layers" label="Layers" />
              <Checkbox id="google" label="Google Search" />
              <Checkbox id="reference" label="Reference" />
              <Checkbox id="other" label="Other" />
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
              className="w-full"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base font-medium"
          >
            Send an inquiry
          </Button>
        </form>
      </div>
    </div>
  );
}