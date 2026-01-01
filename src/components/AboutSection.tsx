import { Code2, Database, Palette } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Hi, I am Chisom Gbulie
            </h2>
            <p className="text-xl text-black mb-6">
              An aspiring Full-Stack Developer passionate about building exceptional digital products.
            </p>
            <p className="text-lg text-black mb-6 leading-relaxed">
              I specialize in creating web applications as well as APIs and backend functionalities for such web applications. I have a decent foundation in both frontend and
              backend technologies. I specialize in Frontend Codes like Flutter, react.js with Vite, Node.js, electron.js and Tailwindcss.
            </p>
            <p className="text-lg text-black mb-8 leading-relaxed">
              In terms of backend I specialize in Java Spring Boot, Node.js backend with Express.js, and databases like PostgreSQL and MongoDB.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Frontend Developer</h3>
                  <p className="text-sm text-black"> Flutter, React.js with Vite, Node.js, Electron.js and Tailwind CSS</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Backend Developer</h3>
                  <p className="text-sm text-gray-600">Java Spring Boot, APIs, Node.js with Express.js, PostgreSQL, MongoDB</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pl-20">
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Palette className="w-5 h-5 text-purple-800" />
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    UI/UX Designer
                  </h3>
                  <p className="text-sm text-gray-600">
                    Figma, Canva, Photoshop
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div >
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 via-purple-800 to-red-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Code2 className="w-24 h-24 mx-auto mb-4 opacity-90" />
                  <p className="text-2xl font-bold">My short Introduction</p>
           
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
