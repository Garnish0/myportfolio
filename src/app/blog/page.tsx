import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import ASCIIText from "@/components/ASCIIText";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-light text-lg mb-8 tracking-tighter text-muted-foreground text-center">Coming Soon</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      <BlurFade delay={BLUR_FADE_DELAY * 3 + posts.length * 0.05}>
        <div className="w-full h-64 relative mt-16 flex items-center justify-center">
          <ASCIIText
            text="Coming Soon"
            enableWaves={true}
            asciiFontSize={16}
            textFontSize={200}
            planeBaseHeight={12}
          />
        </div>
      </BlurFade>
    </section>
  );
}
