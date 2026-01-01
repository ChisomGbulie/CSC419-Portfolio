import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ProjectDetail from './components/ProjectDetail';
import { projects } from './data/projects';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProjectId]);

  const handleViewProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
    setCurrentPage('home');
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleBackToHome} />

      {currentPage === 'home' && <HomePage onViewProject={handleViewProject} />}

      {currentPage === 'project-detail' && selectedProject && (
        <ProjectDetail project={selectedProject} onBack={handleBackToHome} />
      )}

    </div>
  );
}

export default App;
