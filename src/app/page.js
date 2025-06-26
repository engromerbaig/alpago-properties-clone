'use client';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Partners from '@/components/Partners';
import Experience from '@/components/Experience';
import News from '@/components/News';
import { Headline } from '@/components/Headline';

export default function Home() {
  return (
    <div className="relative">
      {/* Fixed Hero Background */}
      <div className="fixed inset-0 h-screen w-full z-0">
        <Hero />
      </div>

      {/* Scroll Container */}
      <div className="relative z-10 pointer-events-none"> {/* Add pointer-events-none to prevent blocking */}
        <div className="h-screen pointer-events-none" />
        <div className="relative z-20 min-h-screen pointer-events-auto"> {/* Re-enable for interactive content */}
          <Headline />
          <Projects />
        </div>
        <div className="relative z-30 pointer-events-auto">
          <Partners />
          <Experience />
          <News />
        </div>
      </div>
    </div>
  );
}