import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  relationship: string;
  date: string;
}

export function TestimonialCard({
  name,
  role,
  company,
  avatar,
  content,
  relationship,
  date,
}: TestimonialProps) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card">
      <CardHeader className="flex flex-row items-start gap-4 p-6">
        <Avatar className="size-12 border">
          <AvatarImage alt={name} src={avatar} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold">{name}</h3>
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              in
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <div className="space-y-3">
          {content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-sm text-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}