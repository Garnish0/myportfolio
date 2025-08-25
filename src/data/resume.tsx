import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mehdi Massrali",
  initials: "MM",
  url: "https://mehdi.massrali.com",
  location: "Paris, FR",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "I plan, design, and develop apps, dashboards, software, and create generative AI videos and content – bringing ideas to life through strategic thinking and hands-on development",
  summary:
    "I'm passionate about turning ideas into reality through code and creativity. Whether you need a sleek mobile app, an intuitive dashboard, custom software, or AI-powered content and videos, I bring designs to life with clean code and user-focused thinking. Since 2018, I've helped businesses across industries build digital solutions that actually work – from initial concept to final deployment. My approach combines technical expertise with creative problem-solving to deliver products that users love and businesses rely on.",
  avatarUrl: "/img/projects/me.png",
  skillCategories: [
    {
      label: "AI & Automation",
      skills: [
        { name: "N8n", icon: "n8n" },
                { name: "Cursor", icon: "cursor" },
        { name: "ChatGPT", icon: "chatgpt" },
        { name: "Claude 4", icon: "anthropic" },
                { name: "Midjourney", icon: "midjourney" },
        { name: "Hugging Face", icon: "huggingface" },
        { name: "Prompt Engineering", icon: "openai" },
        { name: "Context Engineering", icon: "code" }
      ],
    },
    {
      label: "Frontend & Product",
      skills: [
        { name: "React / Next.js", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "React Flow", icon: "reactflow" },
        { name: "Vite", icon: "vite" },
        { name: "Storybook", icon: "storybook" },
        { name: "Design Systems", icon: "palette" }
      ],
    },
    {
      label: "Backend & DevOps",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Supabase", icon: "supabase" },
        { name: "AWS (Lambda, S3)", icon: "aws" },
        { name: "Docker", icon: "docker" },
      ],
    },
    {
      label: "3D • Design • Motion",
      skills: [
        { name: "Figma", icon: "figma" },
        { name: "Spline 3D", icon: "spline" },
        { name: "Three.js", icon: "threejs" },
        { name: "Blender", icon: "blender" },
        { name: "Framer", icon: "framer" },
        { name: "Adobe Photoshop", icon: "photoshop" }
      ],
    },
    {
      label: "Productivity & Ops",
      skills: [
        { name: "Linear", icon: "linear" },
        { name: "Notion", icon: "notion" },
        { name: "Slack Workflows", icon: "slack" },
        { name: "Asana", icon: "asana" }
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "massrali@hexmount.io",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mehdimassrali",
        icon: Icons.github,
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mehdi-massrali/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/triloHQ",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@mehdimassrali",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MagicBird",
      href: "https://magicbird.ai",
      badges: [],
      location: "Paris, FR (remote)",
      title: "AI Automation Expert",
      logoUrl: "/Magicbird.svg",
      start: "Apr 2025",
      end: "Present",
      description:
        `Design and build custom AI automation solutions for businesses. Lead product development and client partnerships to deliver intelligent systems that streamline workflows and improve operational efficiency.\n\nKey Achievements:\n\n- Secured initial client portfolio and established strategic partnerships\n- Built custom AI agents for workflow automation across multiple industries\n- Led product development from concept to deployment`,
    },
    {
      company: "Hexmount",
      badges: [],
      href: "https://hexmount.io",
      location: "Paris 10e, FR",
      title: "Co-Founder & COO",
      logoUrl: "/hexmount.png",
      start: "Jan 2019",
      end: "Present",
      description:
        `Co-founded and scaled digital services studio from startup to 15+ team members. Led operations and cross-functional teams across multiple projects, delivering full-stack solutions in web, mobile, and AI technologies.\n\nKey Results:\n\n- Grew company from 0 to 15+ team members over 6+ years\n- Successfully delivered projects across web, mobile, and AI technologies\n- Built scalable operations and cross-functional team management systems\n- Led agile project management and coordinated distributed development teams`,
    },
    {
      company: "Asset Reality",
      href: "https://assetreality.co.uk",
      badges: [],
      location: "London, UK",
      title: "UI/UX Lead & Frontend Dev Mgr (via Hexmount)",
      logoUrl: "/Asset Reality.svg",
      start: "Dec 2021",
      end: "Mar 2024",
      description:
        `Led end-to-end product development for government seizure management platform used by police forces and law enforcement agencies.\n\nKey Results:\n\n- Improved user efficiency by 40% through intuitive dashboard redesign\n- Managed Product, UI/UX, and Frontend teams across 2+ year engagement\n- Delivered scalable B2G platform serving government agencies globally\n- Coordinated full-stack development including backend and DevOps infrastructure`,
    },
    {
      company: "Singularity Finance",
      href: "https://singularityfinance.com",
      badges: [],
      location: "Cairo, EG",
      title: "Lead, Tech PM & UI/UX (via Hexmount)",
      logoUrl: "/singularity finance.svg",
      start: "Nov 2019",
      end: "Dec 2021",
      description:
        `Led product development and design for fintech platform focused on financial inclusion and sustainable development.\n\nKey Achievements:\n\n- Built unified design system from scratch for web and mobile interfaces\n- Increased user engagement by 60% through improved UX design\n- Managed agile development across engineering and design teams\n- Conducted blockchain integration feasibility studies (Flare-based systems)\n- Delivered financial dashboards serving underserved global markets`,
    },
    {
      company: "Involved Group",
      href: "https://involvedgroup.com",
      badges: [],
      location: "London, UK",
      title: "Label & Events PM Intern",
      logoUrl: "/Involved Group.svg",
      start: "May 2016",
      end: "Jul 2016",
      description:
        "Coordinated music events and managed artist logistics in fast-paced creative environment. Gained foundational experience in project management, cross-team collaboration, and client relations within the music industry.",
    },
  ],
  education: [
    {
      school: "SAE Institute Paris",
      href: "https://paris.sae.edu",
      degree: "MA, Music Technology",
      logoUrl: "/SAE Paris.svg",
      start: "Feb 2017",
      end: "Jun 2018",
    },
    {
      school: "Keele University",
      href: "https://keele.ac.uk",
      degree: "Dual Honours BA, International Business & Music Technology",
      logoUrl: "/Keele University.svg",
      start: "2013",
      end: "2016",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "International Baccalaureate, International Business",
      logoUrl: "/IB.svg",
      start: "2000",
      end: "2013",
    },
  ],
  certifications: [
    {
      name: "GenAI Practice",
      issuer: "NVIDIA",
      date: "Jul 2025",
      credentialId: "AI Basics to GenAI Practice - Course Completion Certificate",
      logoUrl: "/NVIDIA.png",
      href: "https://www.nvidia.com/en-us/training/",
    },
    {
      name: "Data Science: Machine Learning",
      issuer: "Harvard Online",
      date: "May 2025",
      credentialId: "857cbe981f6e4a44a804f73f751cb46b",
      logoUrl: "/Harvard University.png",
      href: "https://www.harvardonline.harvard.edu/course/data-science-machine-learning",
    },
  ],
  projects: [
    {
      title: "MagicBird Platform",
      href: "https://www.magicbird.io/",
      dates: "Apr 2025 - Present",
      active: true,
      description:
        "AI automation platform that builds custom AI agents for businesses, streamlining workflows and improving operational efficiency across various industries.",
      technologies: [],
      links: [
        {
          type: "Visit Website",
          href: "https://www.magicbird.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/magicbird.mp4",
    },
    {
      title: "Hexmount Client Portal",
      href: "https://www.hexmount.io/",
      dates: "Jan 2022 - Present",
      active: true,
      description:
        "Comprehensive client management platform for digital services, featuring project tracking, communication tools, and automated billing systems.",
      technologies: [],
      links: [
        {
          type: "Visit Website",
          href: "https://www.hexmount.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/hexmount.mp4",
    },
    {
      title: "Trilo",
      href: "https://www.trilo.chat/",
      dates: "Dec 2021 - Mar 2024",
      active: false,
      description:
        "Your AI coworkers that never sleep. Handles meetings, tasks, and docs while you focus on what matters. No more tool sprawl.",
      technologies: [],
      links: [
        {
          type: "Visit Website",
          href: "https://www.trilo.chat/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/img/projects/Trilo.png",
      video: "",
    },
    {
      title: "Satstream",
      href: "https://www.satstream.io/",
      dates: "2023 - 2024",
      active: false,
      description:
        "SDK and API solution for bitcoin integration. Simplify integration and build faster with SatStream's powerful SDKs and intuitive tools.",
      technologies: [],
      links: [
        {
          type: "Visit Website",
          href: "https://www.satstream.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Satstream.mp4",
    },

  ],
  hackathons: [
    {
      title: "MagicBird Launch",
      dates: "Apr 2025 - Present",
      location: "Paris, FR",
      description:
        "Co-founded AI automation studio, established strategic partnerships and secured initial client portfolio.",
      image: "/img/timeline/magicbird-launch.png",
      links: [],
    },
    {
      title: "Hexmount Growth Phase",
      dates: "Jan 2019 - Present",
      location: "Paris, FR", 
      description:
        "Scaled digital studio from startup to full-service agency, grew team to 15+ members and delivered 100+ projects.",
      image: "/img/timeline/hexmount-growth.png",
      links: [],
    },
    {
      title: "Asset Reality Product Leadership",
      dates: "Dec 2021 - Mar 2024",
      location: "London, UK",
      description:
        "Led end-to-end product development for government seizure management platform, improved user efficiency by 40%.",
      image: "/img/timeline/asset-reality-leadership.png",
      links: [],
    },
    {
      title: "Singularity Finance Design System",
      dates: "Nov 2019 - Dec 2021", 
      location: "Cairo, EG",
      description:
        "Architected comprehensive design system and analytics platform, increased user engagement by 60%.",
      image: "/img/timeline/singularity-design-system.png",
      links: [],
    },
    {
      title: "Music Technology Innovation",
      dates: "Feb 2017 - Jun 2018",
      location: "Paris, FR",
      description:
        "Completed advanced studies in music technology, developed expertise in audio processing and creative technology solutions.",
      image: "/img/timeline/music-tech-innovation.png",
      links: [],
    },
    {
      title: "International Business Foundation",
      dates: "2013 - 2016",
      location: "Staffordshire, UK",
      description:
        "Earned dual honours degree combining international business and technology, established foundation for entrepreneurial career.",
      image: "/img/timeline/business-foundation.png",
      links: [],
    },
  ],
} as const;
