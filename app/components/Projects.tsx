'use client';

import { useEffect, useState } from 'react';

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
  const [personalRepos, setPersonalRepos] = useState<Repository[]>([]);
  const [koompiRepos, setKoompiRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Fetch personal repositories
        const personalRes = await fetch('https://api.github.com/users/hangsiahong/repos?sort=updated&per_page=6');
        const personalData = await personalRes.json();
        setPersonalRepos(personalData.filter((repo: Repository) => !repo.name.includes('page')));

        // Fetch KOOMPI organization repositories
        const koompiRes = await fetch('https://api.github.com/orgs/KOOMPI/repos?sort=updated&per_page=6');
        const koompiData = await koompiRes.json();
        setKoompiRepos(koompiData.slice(0, 6));
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
      className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all hover:scale-105 block"
    >
      <h3 className="text-xl font-semibold mb-2 text-white">{repo.name}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {repo.description || 'No description available'}
      </p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          ⭐ {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          🍴 {repo.forks_count}
        </span>
      </div>
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {repo.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">
              {topic}
            </span>
          ))}
        </div>
      )}
    </a>
  );

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg animate-pulse">
                <div className="h-6 bg-gray-700 rounded mb-3"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Personal Projects */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-white">Personal Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalRepos.slice(0, 6).map(renderRepoCard)}
        </div>
      </div>

      {/* KOOMPI Projects */}
      {koompiRepos.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">KOOMPI Organization Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {koompiRepos.map(renderRepoCard)}
          </div>
        </div>
      )}
    </div>
  );
}
