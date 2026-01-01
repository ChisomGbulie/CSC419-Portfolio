import { Mail, MessageCircle, Briefcase, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:alex.rivera@example.com"
            className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <Mail className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Me</h3>
            <p className="text-gray-600 mb-3">Get in touch via email for detailed inquiries</p>
            <span className="text-blue-600 font-semibold group-hover:underline">
              chisomgbulie@gmail.com
            </span>
          </a>

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
              <MessageCircle className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-3">Quick response for urgent matters</p>
            <span className="text-purple-600 font-semibold group-hover:underline">
              Message on WhatsApp
            </span>
          </a>

          <a
            href="mailto:hire@example.com?subject=Hiring Inquiry"
            className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
              <Briefcase className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hire Me</h3>
            <p className="text-gray-600 mb-3">Available for freelance and full-time opportunities</p>
            <span className="text-red-600 font-semibold group-hover:underline">
              Discuss Projects
            </span>
          </a>
        </div>

        <div className="text-center">
          <p className="text-white text-lg mb-6">Connect with me on social media</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
