import { Star, GitBranch, ExternalLink } from 'lucide-react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos();

  return (
    <section id="projects">
      <div className="container">
        <h2>Our Projects</h2>
        {loading && <p style={{ textAlign: 'center' }}>Loading portfolio...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>Error loading projects: {error}</p>}
        
        {!loading && !error && (
          <div className="grid grid-2 grid-3">
            {repos.map(repo => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-header">
                  <span className="project-title">{repo.name}</span>
                  <ExternalLink size={16} />
                </div>
                <p className="project-desc">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="project-meta">
                  <span>
                    <Star size={14} /> {repo.stargazers_count}
                  </span>
                  <span>
                    <GitBranch size={14} /> {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
