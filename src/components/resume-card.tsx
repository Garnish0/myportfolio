"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  disableLink?: boolean;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  disableLink = false,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const formatDescription = (text: string) => {
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Handle bullet points
      if (paragraph.includes('- ')) {
        const lines = paragraph.split('\n');
        const title = lines[0];
        const bullets = lines.slice(1).filter(line => line.trim().startsWith('- '));
        
        return (
          <div key={index} className="mb-4">
            {title && !title.startsWith('- ') && (
              <h4 className="font-semibold mb-2 text-foreground">{title}</h4>
            )}
            <ul className="space-y-1 ml-4">
              {bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="text-muted-foreground text-xs sm:text-sm flex">
                  <span className="mr-2 text-primary">•</span>
                  <span>{bullet.replace('- ', '')}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      // Handle section headers (lines that don't start with lowercase and aren't bullet points)
      if (paragraph.length < 100 && !paragraph.includes('.') && paragraph === paragraph.trim()) {
        return (
          <h4 key={index} className="font-semibold mb-2 mt-4 first:mt-0 text-foreground">
            {paragraph}
          </h4>
        );
      }
      
      // Regular paragraphs
      return (
        <p key={index} className="mb-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const cardContent = (
    <Card className="flex">
      <div className="flex-none">
        <Avatar className="border size-12 bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className={cn("flex-grow ml-4 items-center flex-col", !disableLink && "group")}>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-x-2 text-base">
            <h3 className="inline-flex items-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              {!disableLink && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground sm:text-right order-first sm:order-last">
              {period}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs mt-1">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 px-4 border-l-2 border-primary/20"
          >
            <div className="space-y-2">
              {formatDescription(description)}
            </div>
          </motion.div>
        )}
      </div>
    </Card>
  );

  return disableLink ? (
    <div className="block">
      {cardContent}
    </div>
  ) : (
    <Link
      href={href || "#"}
      target={href && href !== "#" && !description ? "_blank" : undefined}
      rel={href && href !== "#" && !description ? "noopener noreferrer" : undefined}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      {cardContent}
    </Link>
  );
};
