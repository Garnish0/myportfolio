import { cn } from "@/lib/utils";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m11.572 0 4.778 8.823 2.974 1.781L24 6.688 12.572 0h-1z"
      />
      <path fill="currentColor" d="M24 6.688 19.324 10.604 24 14.52V6.688z" />
      <path
        fill="currentColor"
        d="M11.572 24 24 17.311V14.52l-4.676 3.916L16.35 16.655 11.572 24z"
      />
      <path fill="currentColor" d="M0 17.311 11.572 24l4.778-7.345L0 9.967v7.344z" />
      <path fill="currentColor" d="M4.676 6.012 0 9.967l16.35 6.688-2.974-7.632L4.676 6.012z" />
      <path fill="currentColor" d="M0 9.967 4.676 6.012 11.572 0 0 6.688v3.279z" />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      viewBox="0 0 800 801"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M690.122 55.228H113.753C106.325 54.88 98.8995 56.0004 91.9041 58.5256C84.9087 61.0508 78.4801 64.9308 72.9858 69.9433C67.492 74.9562 63.0403 81.0035 59.8865 87.7386C56.7326 94.4741 54.9379 101.765 54.6055 109.195V686.86C55.0407 702.407 61.4122 717.203 72.4116 728.199C83.411 739.2 98.204 745.572 113.753 746.008H690.122C705.237 745.335 719.489 738.764 729.821 727.707C740.152 716.65 745.739 701.988 745.385 686.86V109.195C745.51 101.963 744.154 94.7833 741.404 88.0939C738.654 81.405 734.565 75.3482 729.389 70.2947C724.217 65.2417 718.064 61.2991 711.312 58.7082C704.56 56.1174 697.35 54.9331 690.122 55.228ZM270.474 631.166H169.879V323.338H270.474V631.166ZM222.551 276.709C215.532 276.954 208.537 275.744 202.007 273.156C195.477 270.568 189.553 266.658 184.607 261.671C179.661 256.684 175.799 250.728 173.264 244.178C170.73 237.627 169.577 230.623 169.879 223.605C169.569 216.512 170.744 209.432 173.331 202.82C175.918 196.208 179.858 190.209 184.898 185.209C189.939 180.209 195.969 176.318 202.602 173.785C209.235 171.252 216.324 170.134 223.415 170.502C230.434 170.257 237.429 171.467 243.958 174.055C250.488 176.642 256.413 180.553 261.359 185.54C266.305 190.527 270.167 196.482 272.701 203.033C275.236 209.584 276.388 216.588 276.087 223.605C276.397 230.699 275.221 237.778 272.635 244.391C270.048 251.003 266.108 257.002 261.068 262.002C256.027 267.002 249.997 270.893 243.364 273.426C236.731 275.959 229.642 277.077 222.551 276.709ZM630.543 631.166H529.516V462.789C529.516 422.637 515.269 395.006 479.435 395.006C468.304 395.101 457.472 398.637 448.432 405.13C439.387 411.624 432.574 420.755 428.921 431.272C426.115 439.156 424.941 447.527 425.468 455.881V631.166H326.168V323.338H425.468V366.512C434.297 350.291 447.434 336.83 463.434 327.608C479.435 318.39 497.671 313.774 516.132 314.27C581.325 314.27 630.543 357.445 630.543 449.405V631.166Z" />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  dribbble: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8.56 2.75 4.37 6.03a10.55 10.55 0 0 0 4.91-6.03 9.99 9.99 0 0 0-9.28 0z" />
      <path d="M14.07 15.94c-1.95 1.26-4.33 1.99-6.07 2.06a9.99 9.99 0 0 0 6.07-2.06z" />
      <path d="M18.64 11.26c-.87-.6-1.89-1.17-2.64-1.26-.75-.09-1.64.26-2.64 1.26a9.99 9.99 0 0 0 5.28 0z" />
      <path d="M15.26 5.38a9.99 9.99 0 0 0-3.33 6.02 9.99 9.99 0 0 0 3.33-6.02z" />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.988-1.36-1.56z"
      />
    </svg>
  ),
  tailwindcss: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
      />
    </svg>
  ),
  framermotion: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"
      />
    </svg>
  ),
  globe: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  sun: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="m12 2 0 2" />
      <path d="m12 20 0 2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="m2 12 2 0" />
      <path d="m20 12 2 0" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  laptop: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m20 16-4-4a9 9 0 0 1-12 0l-4 4" />
      <rect width="18" height="12" x="3" y="4" rx="2" />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  code: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="16,18 22,12 16,6" />
      <polyline points="8,6 2,12 8,18" />
    </svg>
  ),
  palette: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
};

// Skill icon component that uses SVG files from public/Skills folder
export const SkillIcon = ({ iconName, className }: { iconName: string; className?: string }) => {
  const iconMap: Record<string, string> = {
    // AI & Automation
    "n8n": "/Skills/n8n.svg",
    "openai": "/Skills/openai.svg",
    "claude": "/Skills/claude.svg",
    "anthropic": "/Skills/claude.svg", // Using claude icon for anthropic
    
    // Frontend & Product
    "react": "/Skills/react.svg",
    "reactflow": "/Skills/react.svg", // Use React icon for React Flow
    "typescript": "/Skills/typescript.svg",
    "tailwindcss": "/Skills/tailwindcss.svg",
    "framer": "/Skills/framer.svg",
    "vite": "/Skills/vite.svg",
    "storybook": "/Skills/storybook.svg",
    
    // Backend & DevOps
    "nodejs": "/Skills/nodedotjs.svg",
    "postgresql": "/Skills/postgresql.svg",
    "supabase": "/Skills/supabase.svg",
    "docker": "/Skills/docker.svg",
    
    // 3D • Design • Motion
    "figma": "/Skills/figma.svg",
    "threejs": "/Skills/threedotjs.svg",
    "blender": "/Skills/blender.svg",
    
    // Productivity & Ops
    "linear": "/Skills/linear.svg",
    "notion": "/Skills/notion.svg",
    "slack": "/Skills/slack.svg",
    "asana": "/Skills/asana (1).svg",
    
    // Engineering & Electronics
    "proteus": "/Skills/proteus.svg",

    // Additional mappings for all resume skills
    "cursor": "/Skills/cursor.svg",
    "langchain": "/Skills/react.svg", // fallback
    "chatgpt": "/Skills/openai.svg", // use openai icon
    "midjourney": "/Skills/midjourney.svg",
    "stablediffusion": "/Skills/react.svg", // fallback
    "huggingface": "/Skills/huggingface.svg",
    "sparkles": "/Skills/react.svg", // fallback
    "component": "/Skills/react.svg", // fallback
    "graphql": "/Skills/react.svg", // fallback
    "prisma": "/Skills/react.svg", // fallback
    "aws": "/Skills/aws.svg",
    "githubactions": "/Skills/react.svg", // fallback
    "spline": "/Skills/react.svg", // fallback
    "photoshop": "/Skills/adobe.svg", // use adobe icon for photoshop
    "trello": "/Skills/react.svg", // fallback
    "scrum": "/Skills/react.svg", // fallback
  };

  const iconPath = iconMap[iconName];
  
  if (!iconPath) {
    // Fallback to a generic icon or return null
    return (
      <div className={cn("size-4 rounded bg-muted flex items-center justify-center text-xs font-medium", className)}>
        {iconName.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={iconPath}
      alt={iconName}
      className={cn(
        "size-6",
        // Make all icons black/dark like other skill icons
        "brightness-0",
        className
      )}
    />
  );
};

// Updated function that returns the SkillIcon component
export const getSkillIcon = (iconName: string): React.ReactNode => {
  // Check if it's one of the SVG icons from the Icons object
  if (iconName in Icons) {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return <IconComponent className="size-6 text-black" />;
  }
  
  return <SkillIcon iconName={iconName} />;
};
