import { useState, useEffect } from 'react';

export function useGitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const [davinciRes, devibeRes] = await Promise.all([
          fetch('https://api.github.com/users/DavinciShah/repos?sort=updated&per_page=10'),
          fetch('https://api.github.com/users/devibe70-ux/repos?sort=updated&per_page=10')
        ]);

        if (!davinciRes.ok || !devibeRes.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const davinciRepos = await davinciRes.json();
        const devibeRepos = await devibeRes.json();

        // Merge, deduplicate (if any), and sort by stargazers_count or updated_at
        const merged = [...davinciRepos, ...devibeRepos].sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

        // Filter out forks if we only want original projects, but let's keep it simple
        const filtered = merged.filter(repo => !repo.fork).slice(0, 6); // Show top 6

        setRepos(filtered);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
