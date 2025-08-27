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
            
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 1.5}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              yOffset={8}
              text="Driving Business Growth through Product Strategy, Scalable Design & Technology"
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
      <section id="contact">
        <div className="flex flex-col items-center justify-center gap-8 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 15}>
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
