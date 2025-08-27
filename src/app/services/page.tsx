import BlurFade from "@/components/magicui/blur-fade";
import BlurText from "@/components/BlurText";
import LazyVideo from "@/components/LazyVideo";
import Image from "next/image";
import dynamic from "next/dynamic";

const BLUR_FADE_DELAY = 0.04;

export default function Services() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
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
    </main>
  );
}