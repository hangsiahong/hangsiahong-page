'use client';

import { useEffect, useState } from 'react';
import { config } from '../config';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch(`${config.api.baseUrl}/users/${config.github.username}/repos?sort=updated&per_page=9`);
        const data: Repository[] = await res.json();
        // Filter out the portfolio itself and any forks if desired
        setRepos(data.filter((repo: Repository) => !repo.name.includes('page')).slice(0, 6));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const renderRepoCard = (repo: Repository) => (
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all overflow-hidden shadow-sm dark:shadow-none"
    >
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {repo.name}
          </h3>
          <span className="text-xs font-mono bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-900 px-2 py-1 rounded">
            $0/mo
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 min-h-[40px] line-clamp-2">
          {repo.description || 'Open source tool built with free tier infrastructure.'}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            {repo.stargazers_count}
          </span>
        </div>

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            {repo.topics.slice(0, 3).map((topic) => (
              <span key={topic} className="text-xs text-gray-500">
                #{topic}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 animate-pulse h-48" />
        ))}
      </div>
    );
  }

  return (
    <div id="projects" className="space-y-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Open Source <span className="text-blue-600 dark:text-blue-500">& Fun</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Things I build for the community, deployed for free.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map(renderRepoCard)}
      </div>
    </div>
  );
}
