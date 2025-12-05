import GitHubStats from './components/GitHubStats';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Hang Siahong
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-Stack Developer & Open Source Contributor
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building innovative web solutions and contributing to open source projects.
            Working with modern technologies to create impactful digital experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://github.com/hangsiahong"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View GitHub Profile
            </a>
            <a
              href="https://github.com/KOOMPI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              KOOMPI Organization
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">GitHub Statistics</h2>
          <GitHubStats />
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I enjoy building scalable applications and contributing to open source projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently working with organizations like KOOMPI, I focus on creating innovative
              solutions that make a real impact. My work spans across various technologies
              including React, Next.js, Node.js, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Python',
              'Git',
              'Docker',
              'PostgreSQL',
              'MongoDB',
              'Tailwind CSS',
              'Linux',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors text-center"
              >
                <span className="text-gray-300 font-semibold">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://github.com/hangsiahong"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://github.com/KOOMPI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
            >
              KOOMPI
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 Hang Siahong. Built with Next.js and deployed on GitHub Pages.</p>
        </div>
      </footer>
    </main>
  );
}
