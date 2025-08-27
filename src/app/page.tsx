import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dropdown } from "@/components/ui/dropdown";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { getSkillIcon, Icons } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { HeroButtons } from "@/components/hero-buttons";
import { Mail } from "lucide-react";

const LogoLoop = dynamic(() => import("@/components/LogoLoop"), {
  ssr: false,
  loading: () => <div className="h-[140px] animate-pulse bg-muted/50 rounded" />
});

const BlurText = dynamic(() => import("@/components/BlurText"), {
  ssr: false,
  loading: () => <div className="h-16 animate-pulse bg-muted/50 rounded" />
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
        <div className="mx-auto w-full max-w-5xl px-4 py-16">
          <div className="text-left space-y-8">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Available for new projects
              </p>
            </BlurFade>
            
            <BlurText
              text="Driving Business Growth through Product Strategy, Scalable Design & Technology"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[36px] font-bold tracking-tight leading-tight"
            />
            
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-base text-muted-foreground leading-relaxed max-w-4xl mx-auto"
              text="I'm a multidisciplinary product strategist, designer and developer with a track record of transforming early-stage ideas into scalable digital products. Since 2018, I've led startups and businesses in designing and developing apps, dashboards, and AI-driven solutions that drive growth, improve client retention, and unlock new revenue streams. My strength lies at the intersection of business strategy, design, and technology: I shape product roadmaps, write clean code, design intuitive interfaces, and deliver data-driven solutions that teams and users rely on."
            />
            
            <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
              <HeroButtons />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="mx-auto w-full max-w-5xl px-4 py-16">
          <div className="text-center space-y-12">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  HOW CAN I HELP YOU
                </p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Driving Business Growth through Product Strategy, Scalable Design & Technology
                </h2>
              </div>
            </BlurFade>
            
            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
              <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                <div className="bg-card border rounded-xl px-6 py-5 flex items-start gap-4 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">Digital Transformation & Growth Strategy</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      I help businesses create digital platforms and strategies that attract leads, improve retention, and open new revenue streams. From product roadmaps to growth initiatives, I align business goals with scalable solutions.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="bg-card border rounded-xl px-6 py-5 flex items-start gap-4 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2a3 3 0 0 0-3 3c0 1.5-1.5 3-3 3s-3 1.5-3 3 1.5 3 3 3c1.5 0 3 1.5 3 3a3 3 0 0 0 6 0c0-1.5 1.5-3 3-3s3-1.5 3-3-1.5-3-3-3c-1.5 0-3-1.5-3-3a3 3 0 0 0-3-3"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">AI Automation & Integration</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      I design and implement AI-powered systems to streamline operations, automate client communication, and unlock efficiencies. From booking systems to CRM automation, I deliver solutions that save time and drive measurable results.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
                <div className="bg-card border rounded-xl px-6 py-5 flex items-start gap-4 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">Product Design & Development</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      From early MVPs to mature platforms, I design and build apps, dashboards, and websites that scale. My approach blends clean UX, technical development, and business strategy to deliver products that users adopt and businesses rely on.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="bg-card border rounded-xl px-6 py-5 flex items-start gap-4 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="7,10.5 12,13.5 17,10.5"/>
                      <line x1="12" y1="22.08" x2="12" y2="13"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">SEO, Lead Generation & Retention</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      I craft strategies that boost visibility and conversion — from SEO-driven websites to automated lead funnels and retention programs that keep customers engaged.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
                <div className="bg-card border rounded-xl px-6 py-5 flex items-start gap-4 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">Platform Audits & Optimization</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      I identify product bottlenecks, design flaws, and workflow inefficiencies, then optimize for usability, retention, and growth. Whether it's a design system, UX audit, or technology integration, I help products perform at their best.
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5.75}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  What people say
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from the founders and leaders I&apos;ve worked with
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {DATA.testimonials.map((testimonial, id) => (
              <BlurFade
                key={testimonial.name}
                delay={BLUR_FADE_DELAY * 5.85 + id * 0.1}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  avatar={testimonial.avatar}
                  content={testimonial.content}
                  relationship={testimonial.relationship}
                  date={testimonial.date}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="space-y-6">
            {DATA.skillCategories.map((category, categoryId) => (
              <BlurFade key={category.label} delay={BLUR_FADE_DELAY * 7 + categoryId * 0.1}>
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, skillId) => (
                      <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 7.5 + categoryId * 0.1 + skillId * 0.02}>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg border bg-card hover:bg-muted/50 transition-colors duration-200">
                          <span className="flex-shrink-0">{getSkillIcon(skill.icon)}</span>
                          <span className="text-sm font-medium">{skill.name}</span>
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
          <BlurFade delay={BLUR_FADE_DELAY * 8.2}>
            <div style={{ height: '140px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={96}
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
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 8.3}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base">
                  And a lot more...
                </div>
                <div className="flex justify-center items-center">
                  <BlurText
                    text="Check out my latest work"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-center justify-center"
                  />
                </div>
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
                delay={BLUR_FADE_DELAY * 8.4 + id * 0.05}
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
    </main>
  );
}
