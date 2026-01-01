import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-purple-800 transition-colors"
          >
            <Code2 className="w-6 h-6" />
            <span>CG's Portfolio</span>
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`${
                currentPage === 'home' ? 'text-purple-600 font-semibold' : 'text-black'
              } hover:text-purple-600 transition-colors`}
            >
              Home
            </button>
            <a
              href="#about"
              className="text-black hover:text-purple-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-black hover:text-purple-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black hover:text-purple-600transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                currentPage === 'home'
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              } transition-colors`}
            >
              Home
            </button>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
