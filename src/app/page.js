import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Experience from '@/components/Experience';
import News from '@/components/News';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero - Fixed background */}
      <div className="fixed inset-0 h-screen w-full z-0">
        <Hero />
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Spacer matching hero height */}
        <div className="h-screen" />

        {/* Projects - Sticky section that covers hero */}
        <div className="sticky top-0 h-screen z-20">
          <Projects />
        </div>

        {/* Normal scroll content */}
        <div className="relative z-30 bg-white">
          <Team />
          <Experience />
          <News />
        </div>
      </div>
    </div>
  );
}