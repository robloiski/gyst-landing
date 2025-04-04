"use client";

import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
}

export function TypingAnimation({ phrases, className = "" }: TypingAnimationProps) {
  // To prevent hydration issues, render only on client side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with similar styling to prevent layout shift
    return <span className={className} style={{ fontFamily: "'Gobold Extra', sans-serif" }}>{phrases[0]}</span>;
  }

  return (
    <span className={className} style={{ fontFamily: "'Gobold Extra', sans-serif" }}>
      <Typewriter
        options={{
          strings: phrases,
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20,
        }}
      />
    </span>
  );
} 