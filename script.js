const background_image = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "Developer",
    description: "Building elegant systems and reliable products."
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    title: "Automation",
    description: "Turning repetitive tasks into smarter workflows."
  },
  {
    src: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    title: "UX / UI",
    description: "Designing interfaces that feel crisp and modern."
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    title: "Architecture",
    description: "Creating scalable foundations for long-term products."
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Teamwork",
    description: "Collaborating with clarity and shared momentum."
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Code",
    description: "Shipping practical software with purpose."
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    title: "Systems",
    description: "Combining performance, logic, and maintainability."
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    title: "Portfolio",
    description: "Exploring ideas, coding solutions, and shipping outcomes."
  }
];

const appContent = {
  home: `
    <div class="screen-title">Home</div>
    <div class="hero-banner">
      <div class="hero-box">
        <h2>Building <span class="gradient-text">smart digital products.</span></h2>
        <p>
          I design and build software that balances clean engineering, thoughtful UX, and real-world functionality.
        </p>
        <div class="hero-buttons">
          <a href="https://github.com/alijutt-xd" class="btn primary" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" class="btn secondary" onclick="toggleAppNavigation('project'); return false;">Projects</a>
        </div>
        <div class="stat-grid">
          <div>
            <strong id="repo-count">0</strong>
            <span>Repos</span>
          </div>
          <div>
            <strong id="stars-count">0</strong>
            <span>Stars</span>
          </div>
          <div>
            <strong id="forks-count">0</strong>
            <span>Forks</span>
          </div>
        </div>
      </div>
      <div class="info-box">
        <h3>Core Focus</h3>
        <div class="skills-wrap">
          <span class="inline-tag">TypeScript</span>
          <span class="inline-tag">JavaScript</span>
          <span class="inline-tag">Node.js</span>
          <span class="inline-tag">React</span>
          <span class="inline-tag">API Design</span>
          <span class="inline-tag">Automation</span>
          <span class="inline-tag">GitHub</span>
          <span class="inline-tag">UI Systems</span>
        </div>
      </div>
    </div>
  `,

  biodata: `
    <div class="screen-title">Biodata</div>
    <div class="dash-grid">
      <div class="card-box">
        <h3>Profile</h3>
        <p>Developer focused on full-stack work, automation, and product-level problem solving.</p>
      </div>
      <div class="card-box">
        <h3>Location</h3>
        <p>Pakistan</p>
      </div>
      <div class="card-box">
        <h3>Specialization</h3>
        <p>Web development, automation, secure systems, and software experimentation.</p>
      </div>
      <div class="card-box">
        <h3>Approach</h3>
        <p>Think cleanly, build efficiently, and iterate based on real-world feedback.</p>
      </div>
    </div>
  `,

  termux: `
    <div class="screen-title">Terminal</div>
    <div class="terminal-box">
      <h3>bash</h3>
      <pre>$ whoami
ali-jutt

$ skills
TypeScript, JavaScript, Node.js, React

$ focus
Product engineering, automation, clean systems

$ deploy
GitHub Pages + secure CI workflows</pre>
    </div>
  `,

  project: `
    <div class="screen-title">Projects</div>
    <div id="repo-list" class="repo-grid"></div>
  `,

  portfolio: `
    <div class="screen-title">Portfolio</div>
    <div class="dash-grid">
      <div class="card-box">
        <h3>Mission</h3>
        <p>Turn technical ideas into dependable digital products with strong UI and thoughtful engineering.</p>
      </div>
      <div class="card-box">
        <h3>Process</h3>
        <p>Understand the problem, design the system, iteratively build, and release with confidence.</p>
      </div>
      <div class="card-box">
        <h3>Values</h3>
        <p>Clarity, performance, maintainability, and product-first thinking.</p>
      </div>
      <div class="card-box">
        <h3>Contact</h3>
        <p><a href="https://github.com/alijutt-xd" target="_blank" rel="noreferrer">github.com/alijutt-xd</a></p>
      </div>
    </div>
  `
};

function toggleAppNavigation(app) {
  const appNavigator = document.getElementById("app-navigator");
  const menuButtons = document.querySelectorAll(".spawn-apk");

  menuButtons.forEach((button) => {
    button.classList.toggle("active", button.id === `spawn-app-${app === "biodata" ? "biodata" : app === "project" ? "project" : app === "termux" ? "termux" : app === "portfolio" ? "portfolio" : "home"}`);
  });

  const shell = `
    <div class="app-shell">
      <aside class="app-left">
        <div class="app-profile">
          <div class="app-avatar">AJ</div>
          <div>
            <h3>Ali Jutt</h3>
            <p>Developer • Builder</p>
          </div>
        </div>
        <nav class="side-nav">
          <a class="side-link" href="#" onclick="toggleAppNavigation('home'); return false;">Home</a>
          <a class="side-link" href="#" onclick="toggleAppNavigation('biodata'); return false;">Biodata</a>
          <a class="side-link" href="#" onclick="toggleAppNavigation('termux'); return false;">Terminal</a>
          <a class="side-link" href="#" onclick="toggleAppNavigation('project'); return false;">Projects</a>
          <a class="side-link" href="#" onclick="toggleAppNavigation('portfolio'); return false;">Portfolio</a>
        </nav>
      </aside>
      <div class="app-right">
        ${appContent[app] || appContent.home}
      </div>
    </div>
  `;

  appNavigator.innerHTML = shell;
  appNavigator.classList.add("active");
  appNavigator.style.display = "block";
}

function renderProjectCards(repos) {
  const repoList = document.getElementById("repo-list");
  if (!repoList) return;

  const filtered = repos
    .filter((repo) => !["alijutt-xd", "alijutt-xd.github.io"].includes(repo.name) && !repo.fork && !repo.archived)
    .slice(0, 6);

  repoList.innerHTML = filtered.map((repo) => `
    <div class="repo-item">
      <h4>${repo.name}</h4>
      <p>${repo.description || "A practical software project focused on product and engineering."}</p>
      <div class="meta-row">
        <span>${repo.language || "Code"}</span>
        <a href="${repo.html_url}" target="_blank" rel="noreferrer">View →</a>
      </div>
    </div>
  `).join("");

  if (document.getElementById("repo-count")) {
    document.getElementById("repo-count").textContent = filtered.length;
    document.getElementById("stars-count").textContent = filtered.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
    document.getElementById("forks-count").textContent = filtered.reduce((sum, repo) => sum + (repo.forks_count || 0), 0);
  }
}

async function loadRepositories() {
  try {
    const response = await fetch("https://api.github.com/users/alijutt-xd/repos?per_page=100&sort=updated", {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (!response.ok) throw new Error("GitHub API failed");

    const repos = await response.json();
    renderProjectCards(repos);
  } catch (error) {
    renderProjectCards([
      {
        name: "alidev",
        description: "Termux Base Coding Agent",
        html_url: "https://github.com/alijutt-xd/alidev",
        language: "TypeScript",
        stargazers_count: 1,
        forks_count: 0
      },
      {
        name: "E2EE",
        description: "End-to-end encrypted project and tooling examples",
        html_url: "https://github.com/alijutt-xd/E2EE",
        language: "JavaScript",
        stargazers_count: 1,
        forks_count: 3
      }
    ]);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".content-box");

  setTimeout(() => {
    boxes.forEach((box, index) => {
      setTimeout(() => {
        const imagePlot = document.createElement("div");
        imagePlot.classList.add("image-plot");

        imagePlot.innerHTML = `
          <div class="shadow-box-image">
            <div class="content-box-inside">
              <h1 class="title-box-inside">${background_image[index].title}</h1>
              <span class="desc-box-inside">${background_image[index].description}</span>
            </div>
          </div>
          <img src="${background_image[index].src}" alt="${background_image[index].title}" />
        `;

        box.appendChild(imagePlot);
        box.classList.add("active");
      }, index * 300);
    });
  }, 500);

  setTimeout(() => {
    const scaleBox = document.querySelector(".scale-box");
    if (scaleBox) scaleBox.classList.add("active");
    const menuBox = document.getElementById("menu-box");
    if (menuBox) menuBox.classList.add("active");
  }, 1800);

  toggleAppNavigation("home");
  loadRepositories();
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("*");
  elements.forEach(function (element) {
    element.addEventListener("selectstart", function (event) {
      event.preventDefault();
    });
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const appNavigator = document.getElementById("app-navigator");
    if (appNavigator) {
      appNavigator.classList.remove("active");
    }
  }
});

