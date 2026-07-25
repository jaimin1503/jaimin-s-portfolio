import Section from "../components/Section";

const projects = [
  {
    id: "01",
    title: "agent-peek",
    kind: "developer tool · desktop overlay",
    year: "2026",
    desc: "An always-on-top overlay that shows what your Claude Code sessions are doing, so you can leave the terminal and only come back when something actually needs you.",
    stack: ["tauri", "rust", "react", "typescript", "vite"],
    code: "https://github.com/jaimin1503/agent-peek",
    live: "https://github.com/jaimin1503/agent-peek/releases/latest",
    status: "shipped",
  },
  {
    id: "02",
    title: "friends-flock",
    kind: "social · full-stack",
    year: "2024",
    desc: "Instagram-style micro-social platform with posts, likes, comments and realtime feed.",
    stack: ["react", "redux", "node", "express", "mongodb", "tailwind"],
    code: "https://github.com/jaimin1503/rj-insta",
    live: "https://friends-flock.vercel.app",
    status: "shipped",
  },
  {
    id: "03",
    title: "do-remote",
    kind: "marketplace · saas",
    year: "2024",
    desc: "A two-sided platform where freelancers and clients post jobs, apply, and coordinate work.",
    stack: ["react", "node", "express", "mongodb", "tailwind"],
    code: "https://github.com/jaimin1503/do-remote",
    live: "https://do-remote.vercel.app",
    status: "shipped",
  },
  {
    id: "04",
    title: "resume-hub",
    kind: "tool · generator",
    year: "2024",
    desc: "Type-driven résumé builder with multiple templates and a live preview pane.",
    stack: ["react", "redux", "node", "express"],
    code: "https://github.com/jaimin1503/zidio-resume-builder",
    live: "https://pro-resume-hub.vercel.app",
    status: "shipped",
  },
  {
    id: "05",
    title: "open-to-work",
    kind: "hackathon · fullstack",
    year: "2023",
    desc: "Role-based profile app supporting clients and freelancers, built in a 24-hour hackathon.",
    stack: ["react", "node", "express"],
    code: "https://github.com/jaimin1503/odoo-hackathon",
    live: "https://task-me-bay.vercel.app/log-in",
    status: "archived",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      index={3}
      title="work[]"
      meta={`ls -la ./projects · ${projects.length} entries`}
    >
      {/* table header */}
      <div className="hidden md:grid grid-cols-[3rem_1fr_1.2fr_6rem_5rem] gap-4 pb-3 dashed-b text-[0.7rem] uppercase tracking-widest text-muted">
        <span>id</span>
        <span>project</span>
        <span>description</span>
        <span>year</span>
        <span className="text-right">status</span>
      </div>

      <ul className="divide-y divide-line/60">
        {projects.map((p) => (
          <li
            key={p.id}
            data-testid={`project-row-${p.id}`}
            className="group grid md:grid-cols-[3rem_1fr_1.2fr_6rem_5rem] gap-2 md:gap-4 py-6 md:py-7 items-start hover:bg-surface/40 transition-colors -mx-2 md:-mx-4 px-2 md:px-4"
          >
            <span className="text-muted tabular-nums text-sm">{p.id}</span>

            <div>
              <h3 className="display text-2xl md:text-3xl text-fg group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <div className="text-[0.7rem] uppercase tracking-widest text-muted mt-1">
                {p.kind}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[0.68rem] px-1.5 py-0.5 border border-line text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 md:hidden">
                <a href={p.code} target="_blank" rel="noreferrer noopener" className="link-mono text-xs uppercase tracking-widest">
                  code ↗
                </a>
                <a href={p.live} target="_blank" rel="noreferrer noopener" className="link-mono text-xs uppercase tracking-widest">
                  live ↗
                </a>
              </div>
            </div>

            <p className="text-sm md:text-[0.92rem] text-muted leading-relaxed md:pt-1">
              {p.desc}
              <span className="hidden md:inline-flex gap-4 mt-3 pt-3 dashed-t w-full">
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-mono text-[0.72rem] uppercase tracking-widest"
                  data-testid={`project-code-${p.id}`}
                >
                  code ↗
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-mono text-[0.72rem] uppercase tracking-widest"
                  data-testid={`project-live-${p.id}`}
                >
                  live ↗
                </a>
              </span>
            </p>

            <span className="text-sm text-fg tabular-nums md:pt-2">{p.year}</span>

            <span
              className={`text-[0.68rem] uppercase tracking-widest md:text-right md:pt-2 ${
                p.status === "shipped" ? "text-accent" : "text-muted"
              }`}
            >
              ● {p.status}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 dashed-t pt-4 text-[0.72rem] text-muted uppercase tracking-widest">
        end of list · <span className="text-accent">more soon</span>
      </div>
    </Section>
  );
}
