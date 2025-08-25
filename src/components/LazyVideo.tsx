"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  alt?: string;
}

export default function LazyVideo({ src, className, poster, alt }: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.unobserve(video);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observerRef.current.observe(video);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className={`bg-muted/20 ${className}`}>
      <video
        ref={videoRef}
        className={className}
        autoPlay={isInView}
        loop
        muted
        playsInline
        poster={poster}
        preload="none"
        onLoadedData={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        {isInView && <source src={src} type="video/mp4" />}
      </video>
      {!isLoaded && isInView && (
        <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}