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
              <div 
                key={repo.id} 
                className="project-card"
              >
                <div className="project-header">
                  <span className="project-title">{repo.name}</span>
                </div>
                <p className="project-desc" style={{ marginBottom: 0 }}>
                  {repo.description || 'No description provided.'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
