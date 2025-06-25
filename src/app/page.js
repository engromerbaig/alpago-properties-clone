import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Experience from '@/components/Experience';
import News from '@/components/News';
import { Headline } from '@/components/Headline';

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Fixed Hero Background */}
      <div className="fixed inset-0 h-screen w-full z-0">
        <Hero />
      </div>

      {/* 2. Scroll Container */}
      <div className="relative z-10">
        {/* Empty spacer matching viewport height */}
        <div className="h-screen" />

        {/* 3. Projects Section - Will cover hero */}
        <div className="relative z-20 min-h-screen ">
          <Headline />
          <Projects />
        </div>

        {/* 4. Normal Scroll Content (NO PARALLAX) */}
        <div className="relative z-30">
          <Team />
          <Experience />
          <News />
        </div>
      </div>
    </div>
  );
}