'use client';

import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';
import { TechStack } from '@/components/TechStack';

export default function Home() {
  return (
    <div className="pt-24"> {/* This padding-top accounts for the fixed header */}
      <Hero />
      <TechStack />
      <Features />
      <CTA />
    </div>
  );
}
