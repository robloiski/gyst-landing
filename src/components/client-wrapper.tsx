"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

// Import the client components with dynamic loading
const HeroBackground = dynamic(
  () => import("@/components/ui/hero-background").then(mod => mod.HeroBackground),
  { ssr: false }
);

const TypingAnimation = dynamic(
  () => import("@/components/ui/typing-animation").then(mod => mod.TypingAnimation),
  { ssr: false }
);

interface HeroContentProps {
  children: ReactNode;
}

export function HeroContent({ children }: HeroContentProps) {
  return (
    <div className="relative">
      <HeroBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function TypewriterHeadline({ 
  phrases, 
  className 
}: { 
  phrases: string[]; 
  className?: string;
}) {
  return (
    <TypingAnimation phrases={phrases} className={className} />
  );
} 