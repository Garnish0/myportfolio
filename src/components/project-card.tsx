import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        target={href && href !== "#" ? "_blank" : undefined}
        rel={href && href !== "#" ? "noopener noreferrer" : undefined}
        className={cn("block cursor-pointer", className)}
      >
        {video ? (
          <div className="h-54 w-full overflow-hidden">
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none w-full h-full object-cover object-center"
            />
          </div>
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-49 w-full overflow-hidden object-cover object-center"
          />
        ) : (
          <div className="h-54 w-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-base">No media</span>
          </div>
        )}
      </Link>
      <CardHeader className="px-4 py-4">
        <div className="space-y-2">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 px-4">
          {tags?.map((tag) => (
            <Badge
              className="px-2 py-1 text-xs"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <CardFooter className="px-4 pb-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-3 py-2 text-xs hover:bg-primary/90 transition-colors">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
