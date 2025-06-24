import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Experience from '../components/Experience';
import News from '../components/News';

// Home page component for JobSite
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-primary">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Team Section */}
      <Team />

      {/* Experience Section */}
      <Experience />

      {/* News Section */}
      <News />
    </div>
  );
}