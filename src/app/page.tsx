import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { getSkillIcon, Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Markdown from "react-markdown";
import { Mail, MessageCircle } from "lucide-react";

const LogoLoop = dynamic(() => import("@/components/LogoLoop"), {
  ssr: false,
  loading: () => <div className="h-[120px] animate-pulse bg-muted/50 rounded" />
});

const BlurText = dynamic(() => import("@/components/BlurText"), {
  ssr: false,
  loading: () => <div className="h-16 animate-pulse bg-muted/50 rounded" />
});

const LazyVideo = dynamic(() => import("@/components/LazyVideo"), {
  ssr: false,
  loading: () => <div className="animate-pulse bg-muted/50 w-full h-full rounded" />
});

const BLUR_FADE_DELAY = 0.04;

const techLogos = [
  { node: getSkillIcon("react"), title: "React" },
  { node: getSkillIcon("typescript"), title: "TypeScript" },
  { node: getSkillIcon("tailwindcss"), title: "Tailwind CSS" },
  { node: getSkillIcon("nodejs"), title: "Node.js" },
  { node: getSkillIcon("postgresql"), title: "PostgreSQL" },
  { node: getSkillIcon("docker"), title: "Docker" },
  { node: getSkillIcon("figma"), title: "Figma" },
  { node: getSkillIcon("aws"), title: "AWS" },
  { node: getSkillIcon("openai"), title: "OpenAI" },
  { node: getSkillIcon("anthropic"), title: "Claude" },
  { node: getSkillIcon("supabase"), title: "Supabase" },
  { node: getSkillIcon("notion"), title: "Notion" },
];

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-16 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-[24px] font-bold tracking-tight"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name} 👋`}
                />
              </div>
              <BlurFadeText
                className="text-base text-muted-foreground leading-relaxed"
                delay={BLUR_FADE_DELAY * 1.5}
                text={DATA.description}
              />
            </div>
            
            <div className="space-y-6 mt-4">
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <h2 className="text-xl font-semibold">Working with me</h2>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <Markdown className="prose prose-sm max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert prose-p:leading-relaxed">
                  {DATA.summary}
                </Markdown>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                disableLink={true}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
            <h2 className="text-xl font-bold">Licenses & Certifications</h2>
          </BlurFade>
          {DATA.certifications.map((cert, id) => (
            <BlurFade
              key={cert.name}
              delay={BLUR_FADE_DELAY * 8.6 + id * 0.05}
            >
              <ResumeCard
                key={cert.name}
                href={cert.href}
                logoUrl={cert.logoUrl}
                altText={cert.issuer}
                title={cert.name}
                subtitle={cert.issuer}
                period={`Issued ${cert.date}`}
                description={`Credential ID ${cert.credentialId}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 9.5}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="space-y-6">
            {DATA.skillCategories.map((category, categoryId) => (
              <BlurFade key={category.label} delay={BLUR_FADE_DELAY * 10 + categoryId * 0.1}>
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, skillId) => (
                      <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10.5 + categoryId * 0.1 + skillId * 0.02}>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg border bg-card hover:bg-muted/50 transition-colors duration-200">
                          <span className="flex-shrink-0">{getSkillIcon(skill.icon)}</span>
                          <span className="text-base font-medium">{skill.name}</span>
                        </div>
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="tech-logos" className="w-full">
        <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <BlurFade delay={BLUR_FADE_DELAY * 10.2}>
            <div style={{ height: '120px', position: 'relative', overflow: 'hidden'}}>
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
              />
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="latest-work" className="py-8">
        <div className="flex justify-center items-center">
          <BlurText
            text="Crafted experiences that captivate, convert, and create lasting impact"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl font-bold tracking-tight text-center justify-center"
          />
        </div>
      </section>
      <section id="image-placeholders">
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">hexmount logo</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-md lg:w-96 mx-auto">
                <Image 
                  src="/Isshowcase/hex1.png" 
                  alt="Cradle logo" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">hexmount website (+implementation)</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-2xl lg:w-[790px] mx-auto">
                <Image 
                  src="/Isshowcase/hex2.png" 
                  alt="Showcase image" 
                  width={790}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 790px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 11.8}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/hex3.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">Hexmount Branding Assets</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-2xl lg:w-[790px] mx-auto">
                <Image 
                  src="/Isshowcase/hex5.png" 
                  alt="Placeholder 1" 
                  width={790}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 790px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12.5}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">Additional assets</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-md lg:w-96 mx-auto">
                <Image 
                  src="/Isshowcase/hex4.png" 
                  alt="Placeholder 2" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">satstream logo</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-md lg:w-96 mx-auto">
                <Image 
                  src="/Isshowcase/sat1.png" 
                  alt="Placeholder 3" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">satstream branding</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-2xl lg:w-[790px] mx-auto">
                <Image 
                  src="/Isshowcase/satsbanner.png" 
                  alt="Placeholder 4" 
                  width={790}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 790px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">Website Dashboard and SDK developement and implentation</p>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/sat3.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">Pitch Deck material</p>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px]">
                <Image 
                  src="/Isshowcase/sat4.png" 
                  alt="Large placeholder image"
                  width={1170}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 100vw, 1170px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">Custom 3D assets and integration</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-2xl lg:w-[790px] h-64 sm:h-80 lg:h-96 mx-auto relative">
                <LazyVideo 
                  src="/Isshowcase/sat2.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 15.5}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">Interactive 3D asset</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-md lg:w-96 h-64 sm:h-80 lg:h-96 mx-auto relative">
                <LazyVideo 
                  src="/Isshowcase/sat5.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">magicbird logo</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-md lg:w-96 mx-auto">
                <Image 
                  src="/Isshowcase/magic1.png" 
                  alt="Magic 1" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 16.5}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">website design and implementation</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-2xl lg:w-[790px] h-64 sm:h-80 lg:h-96 mx-auto relative">
                <LazyVideo 
                  src="/Isshowcase/magic2.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/magic3.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <div className="flex flex-col gap-6 w-full mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">AI workflow automation</p>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px]">
                <Image 
                  src="/Isshowcase/magic12.png" 
                  alt="Magic 12" 
                  width={1170}
                  height={700}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 100vw, 1170px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 17.5}>
            <div className="space-y-3 w-full md:w-auto">
              <p className="text-sm text-muted-foreground">Branding assets</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-sm md:w-72 lg:w-80 mx-auto">
                <Image 
                  src="/Isshowcase/magic10.png" 
                  alt="Magic 10" 
                  width={320}
                  height={250}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="space-y-3 w-full md:w-auto">
              <p className="text-sm text-muted-foreground">Marketing materials</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-sm md:w-72 lg:w-80 mx-auto">
                <Image 
                  src="/Isshowcase/magic9.png" 
                  alt="Magic 9" 
                  width={320}
                  height={250}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18.5}>
            <div className="space-y-3 w-full md:w-auto">
              <p className="text-sm text-muted-foreground">Visual identity</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-sm md:w-72 lg:w-80 mx-auto">
                <Image 
                  src="/Isshowcase/magic11.png" 
                  alt="Magic 11" 
                  width={320}
                  height={250}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-6xl mx-auto justify-center items-center mt-16 px-4 mb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 18.7}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">trilo logo</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-md lg:w-96 mx-auto">
                <Image 
                  src="/Isshowcase/trilo1.png" 
                  alt="Trilo 1" 
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-3 w-full lg:w-auto">
              <p className="text-sm text-muted-foreground">develop ios app</p>
              <div className="rounded-lg border overflow-hidden w-full max-w-2xl lg:w-[790px] mx-auto">
                <Image 
                  src="/Isshowcase/trilo2.png" 
                  alt="Trilo 2" 
                  width={790}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 790px"
                  loading="lazy"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 20}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">website design and developement</p>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/trilo3.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 20.5}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">IOS app design and AI integration</p>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/trilo02.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/trilo03.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 21.5}>
          <div className="flex justify-center mt-16 px-4 mb-16">
            <div>
              <div className="rounded-lg border overflow-hidden w-full sm:w-[1170px] h-64 sm:h-[700px] relative">
                <LazyVideo 
                  src="/Isshowcase/trilo4.mp4" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base">
                  And a lot more...
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[1120px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12.5 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies || []}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16.5}>
            <div className="flex flex-col items-center space-y-6">
              <Avatar className="size-32 border-2">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  Hey, it&apos;s me, the maker of everything you just saw.
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
                  If something caught your attention and you have a potential project in mind – I&apos;m a message away.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Link href={`mailto:${DATA.contact.email}`}>
                  <Badge className="flex gap-2 px-3 py-2 text-xs hover:bg-primary/90 transition-colors cursor-pointer">
                    <Mail className="h-4 w-4" />
                    Send email
                  </Badge>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
