import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import { ThemeToggle } from '@/components/ThemeToggle';
import { config } from './config';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <WorkExperience />
      <Manifesto />

      {/* Projects Section */}
      <section className="py-24 bg-gray-50 dark:bg-black relative border-t border-gray-200 dark:border-gray-900">
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-900 py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Hangsia Hong</h4>
              <p className="text-gray-500 text-sm">
                Built with Next.js • Deployed on Cloudflare/Vercel • Cost: $0
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`https://github.com/${config.github.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={`https://github.com/${config.github.organization}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                KOOMPI
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
