import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dropdown } from "@/components/ui/dropdown";
import { DATA } from "@/data/resume";
import { getSkillIcon, Icons } from "@/components/icons";
import Link from "next/link";
import Markdown from "react-markdown";
import { Mail, MessageCircle } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

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
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
              </div>
              <BlurFadeText
                className="text-base text-muted-foreground leading-relaxed"
                delay={BLUR_FADE_DELAY * 1.5}
                text={DATA.description}
              />
            </div>
            
            <div className="space-y-6">
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
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
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
      <section id="image-placeholders">
        <div className="flex flex-col sm:flex-row gap-6 w-full mx-auto justify-center items-center">
          <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">hexmount logo</p>
              <div className="rounded-lg border overflow-hidden" style={{ width: '380px', height: '400px' }}>
                <img 
                  src="/Isshowcase/hex1.png" 
                  alt="Cradle logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">hexmount website (+implementation)</p>
              <div className="rounded-lg border overflow-hidden" style={{ width: '790px', height: '400px' }}>
                <img 
                  src="/Isshowcase/hex2.png" 
                  alt="Showcase image" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
          <div className="flex justify-center mt-8">
            <div className="rounded-lg border overflow-hidden" style={{ width: '1170px', height: '700px' }}>
              <video 
                src="/Isshowcase/hex3.mp4" 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11.8}>
          <div className="flex justify-center mt-8">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">cradle ui</p>
              <div className="rounded-lg border overflow-hidden" style={{ width: '1170px', height: '700px' }}>
                <video 
                  src="/Isshowcase/hex3.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
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
                  My Projects
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
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-base">
                  Timeline
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Throughout my career, I've led transformative initiatives across multiple ventures. From co-founding innovative companies to leading product development for government and fintech solutions, each milestone has shaped my approach to building technology that creates meaningful impact.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14.5}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15.5 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
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
                  Hey, it's me, the maker of everything you just saw.
                </h2>
                <p className="mx-auto max-w-[600px] text-lg text-muted-foreground">
                  If something caught your attention and you have a potential project in mind – I'm a message away.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link href={`mailto:${DATA.contact.email}`}>
                    <Mail className="h-4 w-4" />
                    Send email
                  </Link>
                </Button>
                
                <Dropdown
                  trigger={
                    <>
                      <MessageCircle className="h-4 w-4" />
                      Send dm...
                    </>
                  }
                  items={[
                    {
                      label: "Open LinkedIn",
                      href: DATA.contact.social.LinkedIn.url,
                      icon: <Icons.linkedin className="h-4 w-4" />
                    },
                    {
                      label: "Open X (Twitter)",
                      href: DATA.contact.social.X.url,
                      icon: <Icons.twitter className="h-4 w-4" />
                    }
                  ]}
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
