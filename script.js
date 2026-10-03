* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-alt: #0d1728;
  --panel: rgba(15, 23, 42, 0.82);
  --panel-strong: #101b2d;
  --card: rgba(15, 23, 42, 0.9);
  --card-border: rgba(148, 163, 184, 0.18);
  --text: #e5eefb;
  --muted: #a7b5cf;
  --soft: #dfeaff;
  --primary: #7c9dff;
  --primary-strong: #5f7dff;
  --secondary: #8ef0d2;
  --accent: #8b5cf6;
  --shadow: 0 30px 80px rgba(6, 12, 22, 0.45);
  --radius: 20px;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(124, 157, 255, 0.22), transparent 30%),
    radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.2), transparent 25%),
    var(--bg);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
a {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.alt-section {
  background: rgba(11, 17, 29, 0.78);
  border-top: 1px solid rgba(148, 163, 184, 0.09);
  border-bottom: 1px solid rgba(148, 163, 184, 0.09);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(18px);
  background: rgba(7, 17, 31, 0.7);
  border-bottom: 1px solid rgba(148, 163, 184, 0.08);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text);
  font-weight: 700;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  box-shadow: 0 12px 30px rgba(124, 157, 255, 0.38);
  font-size: 0.82rem;
}

.brand-name {
  letter-spacing: -0.03em;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.main-nav a,
.text-link {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.main-nav a:hover,
.text-link:hover {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.9rem 1.3rem;
  border: 1px solid transparent;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.button:hover {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  box-shadow: 0 18px 35px rgba(124, 157, 255, 0.28);
}

.button-secondary {
  background: rgba(148, 163, 184, 0.06);
  border-color: rgba(148, 163, 184, 0.18);
  color: var(--text);
}

.hero {
  padding-top: 88px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 44px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 18px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.74rem;
  color: var(--secondary);
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
}

.lead {
  max-width: 640px;
  margin-top: 22px;
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 32px;
}

.stat-item {
  min-width: 110px;
  padding: 16px 18px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid var(--card-border);
  border-radius: 18px;
}

.stat-item strong {
  display: block;
  font-size: 1.45rem;
  margin-bottom: 6px;
}

.stat-item span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.panel-top {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  padding: 8px 12px;
  border: 1px solid rgba(142, 240, 210, 0.2);
  border-radius: 999px;
  background: rgba(142, 240, 210, 0.06);
  color: var(--secondary);
  font-size: 0.85rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #49e3a8;
  box-shadow: 0 0 15px rgba(73, 227, 168, 0.8);
}

.profile-card {
  width: min(100%, 420px);
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(12, 19, 32, 0.96));
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px;
}

.avatar-ring {
  width: 110px;
  height: 110px;
  display: grid;
  place-items: center;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(124, 157, 255, 0.35), rgba(139, 92, 246, 0.35));
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.avatar-inner {
  width: 86px;
  height: 86px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  font-size: 1.6rem;
  font-weight: 800;
}

.profile-card h2 {
  margin: 0;
  text-align: center;
  font-size: 2rem;
  letter-spacing: -0.05em;
}

.profile-card p {
  color: var(--muted);
  text-align: center;
  line-height: 1.7;
  margin: 14px 0 18px;
}

.mini-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.mini-list li {
  position: relative;
  padding-left: 24px;
  color: var(--soft);
}

.mini-list li::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.05em;
}

.split-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 30px;
}

.about-copy {
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.9;
}

.about-copy p {
  margin: 0 0 18px;
}

.skill-panel {
  background: var(--panel);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 28px;
}

.skill-panel h3 {
  margin: 0 0 18px;
  font-size: 1.2rem;
}

.skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skills-wrap span {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 0.64rem 0.9rem;
  background: rgba(124, 157, 255, 0.08);
  border: 1px solid rgba(124, 157, 255, 0.18);
  color: var(--soft);
  font-size: 0.92rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 260px;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 24px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(124, 157, 255, 0.36);
}

.project-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.project-name {
  margin: 0;
  font-size: 1.18rem;
  letter-spacing: -0.04em;
}

.project-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: rgba(124, 157, 255, 0.12);
  color: var(--primary);
  font-size: 1rem;
}

.project-description {
  color: var(--muted);
  line-height: 1.7;
  margin: 18px 0;
  flex-grow: 1;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 18px;
  border-top: 1px solid rgba(148, 163, 184, 0.1);
  color: var(--muted);
  font-size: 0.88rem;
}

.meta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.language-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.language-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: currentColor;
}

.repo-link {
  color: var(--soft);
  text-decoration: none;
  font-weight: 600;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.workflow-card {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 24px;
}

.step-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 46px;
  height: 32px;
  border-radius: 999px;
  background: rgba(124, 157, 255, 0.12);
  color: var(--secondary);
  border: 1px solid rgba(124, 157, 255, 0.18);
  font-weight: 700;
  margin-bottom: 18px;
}

.workflow-card h3 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.workflow-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
}

.contact-section {
  padding-top: 54px;
  padding-bottom: 110px;
}

.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 34px 38px;
  background: linear-gradient(135deg, rgba(124, 157, 255, 0.2), rgba(139, 92, 246, 0.18));
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 24px;
}

.contact-card h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.site-footer {
  border-top: 1px solid rgba(148, 163, 184, 0.09);
  padding: 26px 0 38px;
  color: var(--muted);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .hero-grid,
  .about-grid,
  .projects-grid,
  .workflow-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr 1fr;
  }

  .contact-card,
  .split-heading,
  .nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-nav {
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 72px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 2.7rem;
  }

  .nav {
    padding: 16px 0;
  }

  .contact-card {
    padding: 24px 20px;
  }
}
