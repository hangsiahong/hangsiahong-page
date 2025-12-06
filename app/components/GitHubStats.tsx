'use client';

import { useEffect, useState } from 'react';
import { config } from '../config';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
}

interface Repository {
  stargazers_count: number;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        // Fetch user data
        const userRes = await fetch(`${config.api.baseUrl}/users/${config.github.username}`);
        const userData = await userRes.json();

        // Fetch repositories to count stars
        const reposRes = await fetch(`${config.api.baseUrl}/users/${config.github.username}/repos?per_page=100`);
        const reposData: Repository[] = await reposRes.json();

        const totalStars = reposData.reduce((acc: number, repo: Repository) => acc + repo.stargazers_count, 0);

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          total_stars: totalStars,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg animate-pulse">
            <div className="h-8 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-20"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    { label: 'Repositories', value: stats.public_repos },
    { label: 'Followers', value: stats.followers },
    { label: 'Following', value: stats.following },
    { label: 'Total Stars', value: stats.total_stars },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item) => (
        <div key={item.label} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors shadow-sm dark:shadow-none">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
          <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
