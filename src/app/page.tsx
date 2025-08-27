import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
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
          <div className="text-center space-y-8">
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
              className="text-[36px] font-bold tracking-tight leading-tight text-center justify-center"
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
                  I get hired to design, fix or scale SaaS products
                </h2>
              </div>
            </BlurFade>
            
            <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
              <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
                <div className="bg-card border rounded-xl p-4 space-y-3 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">MVP Design for SaaS</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      Hire MVP designers to create an early version of your SaaS product that will be well-received by advisors, investors, and customers alike.
                    </p>
                    <div className="inline-block">
                      <span className="text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                        Recommended for Indie-makers
                      </span>
                    </div>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="bg-card border rounded-xl p-4 space-y-3 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">Product Redesign</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      We'll work together to overhaul your SaaS with a user-centered approach that will increase engagement, retention, and revenue. Say goodbye to a lackluster UX and hello to a product that stands out in the market.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
                <div className="bg-card border rounded-xl p-4 space-y-3 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">Team Extension</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      I can seamlessly integrate into your product development team and provide solutions to your design challenges.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="bg-card border rounded-xl p-4 space-y-3 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">UX Audit</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      I can help you to spot your product's bottlenecks to unlock its fullest potential.
                    </p>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
                <div className="bg-card border rounded-xl p-4 space-y-3 text-left hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zM11 3h6v6h-6V3zm2 2v2h2V5h-2zM3 11h6v6H3v-6zm2 2v2h2v-2H5zM13 13h2v2h-2v-2zM15 11h2v2h-2v-2zM17 13h2v2h-2v-2zM11 15h2v2h-2v-2zM13 17h2v2h-2v-2zM15 15h2v2h-2v-2zM17 17h2v2h-2v-2z"/>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-base">Design System</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      Have big plans for scaling your SaaS? I can support you in creating and shaping the design system.
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="mx-auto w-full max-w-5xl px-4 py-16">
          <div className="text-center space-y-12">
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  WHAT YOU GET WHEN WE WORK TOGETHER
                </p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Design isn't just about aesthetics—it's about delivering real, measurable results. Here's how my design work drives impact for your business:
                </h2>
              </div>
            </BlurFade>
            
            <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto text-left">
              <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Reduce churn</span> by designing intuitive user experiences that keep customers engaged.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Increase sign-ups</span> with high-converting landing pages tailored to your audience.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="8.5" cy="7" r="4"/>
                      <path d="M20 8v6M23 11h-6"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Boost retention</span> by crafting seamless mobile and web app designs users love.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 8}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Accelerate launches</span> with production-ready, pixel-perfect designs for faster development.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={BLUR_FADE_DELAY * 8.5}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Drive growth</span> through strategic UX improvements that align with your business goals.
                  </p>
                </div>
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
          <BlurFade delay={BLUR_FADE_DELAY * 10.2}>
            <div style={{ height: '140px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
              <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={64}
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
          <BlurFade delay={BLUR_FADE_DELAY * 10.3}>
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
                delay={BLUR_FADE_DELAY * 10.4 + id * 0.05}
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
      <section id="testimonials">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
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
                delay={BLUR_FADE_DELAY * 11.1 + id * 0.1}
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
    </main>
  );
}
