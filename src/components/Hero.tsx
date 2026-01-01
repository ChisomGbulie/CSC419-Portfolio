import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-red-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Chisom Gbulie's Personal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I am an aspiring Full-Stack Developer specializing in creating beautiful, functional, and
            user-centric web applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-purple-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a>
              
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </section>
  );
}
