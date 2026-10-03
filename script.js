const repoApiUrl = "https://api.github.com/users/alijutt-xd/repos?per_page=100&sort=updated";
const excludedRepos = ["alijutt-xd", "alijutt-xd.github.io"];

const fallbackRepos = [
  {
    name: "alidev",
    description: "Termux Base Coding Agent",
    html_url: "https://github.com/alijutt-xd/alidev",
    stargazers_count: 1,
    forks_count: 0,
    language: "TypeScript",
  },
  {
    name: "E2EE",
    description: "End-to-end encrypted project and tooling examples",
    html_url: "https://github.com/alijutt-xd/E2EE",
    stargazers_count: 1,
    forks_count: 3,
    language: "JavaScript",
  }
];

const languageColors = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Shell: "#89e051",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  default: "#7cb4ff"
};

function buildRepoCard(repo) {
  const language = repo.language || "Other";
  const color = languageColors[language] || languageColors.default;
  const description = repo.description || "Focused on practical engineering, experimentation, and useful product thinking.";

  return `
    <article class="project-card">
      <div>
        <div class="project-top">
          <h3 class="project-name">${repo.name}</h3>
          <div class="project-icon">↗</div>
        </div>

        <p class="project-description">${description}</p>
      </div>

      <div class="project-meta">
        <div class="meta-group">
          <span class="language-pill" style="color:${color};">
            <span class="language-dot" style="background:${color};"></span>
            ${language}
          </span>
          <span>★ ${repo.stargazers_count || 0}</span>
          <span>⎇ ${repo.forks_count || 0}</span>
        </div>

        <a class="repo-link" href="${repo.html_url}" target="_blank" rel="noreferrer">View</a>
      </div>
    </article>
  `;
}

function renderProjects(repos) {
  const container = document.getElementById("projects-grid");
  const filtered = repos
    .filter((repo) => !excludedRepos.includes(repo.name) && !repo.fork && !repo.archived)
    .sort((a, b) => (new Date(b.updated_at || b.pushed_at || 0) - new Date(a.updated_at || a.pushed_at || 0)));

  if (!filtered.length) {
    container.innerHTML = '<p class="project-description">No public repositories were available at the moment. Please check again soon.</p>';
    return;
  }

  const totalStars = filtered.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  const totalForks = filtered.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);

  document.getElementById("repo-count").textContent = filtered.length;
  document.getElementById("stars-count").textContent = totalStars;
  document.getElementById("forks-count").textContent = totalForks;

  container.innerHTML = filtered.slice(0, 6).map(buildRepoCard).join("");
}

async function loadRepositories() {
  try {
    const response = await fetch(repoApiUrl, {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (!response.ok) throw new Error("GitHub API failed");

    const repos = await response.json();
    renderProjects(repos);
  } catch (error) {
    renderProjects(fallbackRepos);
  }
}

loadRepositories();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
