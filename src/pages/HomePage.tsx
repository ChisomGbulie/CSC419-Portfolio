import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

interface HomePageProps {
  onViewProject: (projectId: string) => void;
}

export default function HomePage({ onViewProject }: HomePageProps) {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectsSection onViewProject={onViewProject} />
      <ContactSection />
    </div>
  );
}
