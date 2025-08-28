"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import GradientText from "@/components/GradientText";

export function HeroButtons() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-4">
      <Link href={`mailto:${DATA.contact.email}`}>
        <Button 
          size="lg" 
          className="bg-foreground hover:bg-foreground/90 rounded-full px-8 py-6 text-base font-medium transition-all duration-200 hover:scale-105"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className=""
          >
            Let&apos;s Work Together →
          </GradientText>
        </Button>
      </Link>
      <Button 
        variant="outline" 
        size="lg" 
        className="rounded-full px-8 py-6 text-base font-medium border-2 hover:bg-muted/50 transition-all duration-200 hover:scale-105"
        onClick={handleCopyEmail}
      >
        Copy Email
      </Button>
    </div>
  );
}