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
    featured: true,
    previews: [
      {
        src: "https://customer-assets-eiarnc6j.emergentagent.net/job_mono-portfolio-5/artifacts/yu2kk3ox_Screenshot%202026-07-26%20at%2012.40.44%E2%80%AFAM.png",
        caption: "expanded · two live sessions with activity timeline",
      },
      {
        src: "https://customer-assets-eiarnc6j.emergentagent.net/job_mono-portfolio-5/artifacts/j35ofm30_Screenshot%202026-07-26%20at%2012.40.29%E2%80%AFAM.png",
        caption: "attention state · claude needs your permission",
      },
      {
        src: "https://customer-assets-eiarnc6j.emergentagent.net/job_mono-portfolio-5/artifacts/3lgilwz3_Screenshot%202026-07-26%20at%2012.40.58%E2%80%AFAM.png",
        caption: "idle pill · collapses to 40px when quiet",
      },
    ],
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
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index={3}
      title="work[]"
      meta={`ls -la ./projects · ${projects.length} entries`}
    >
      {/* featured card */}
      {featured && <FeaturedProject p={featured} />}

      {/* table header */}
      <div className="hidden md:grid grid-cols-[3rem_1fr_1.2fr_6rem_5rem] gap-4 pb-3 dashed-b text-[0.7rem] uppercase tracking-widest text-muted">
        <span>id</span>
        <span>project</span>
        <span>description</span>
        <span>year</span>
        <span className="text-right">status</span>
      </div>

      <ul className="divide-y divide-line/60">
        {rest.map((p) => (
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

function FeaturedProject({ p }) {
  return (
    <article
      data-testid={`project-featured-${p.id}`}
      className="card-mono p-5 md:p-7 mb-10 md:mb-14"
    >
      {/* header strip */}
      <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-widest text-muted mb-5 dashed-b pb-3 flex-wrap gap-2">
        <span>
          <span className="text-accent">★</span> featured · {p.id}/
          {p.year}
        </span>
        <span className="text-accent">● {p.status}</span>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {/* meta */}
        <div className="col-span-12 lg:col-span-5">
          <h3 className="display text-3xl md:text-4xl lg:text-5xl text-fg">
            {p.title}
          </h3>
          <div className="text-[0.72rem] uppercase tracking-widest text-muted mt-2">
            {p.kind}
          </div>

          <p className="mt-5 text-sm md:text-[0.92rem] text-muted leading-relaxed">
            {p.desc}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="text-[0.68rem] px-1.5 py-0.5 border border-line text-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-mono solid"
              data-testid={`project-code-${p.id}`}
            >
              [ code ↗ ]
            </a>
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-mono"
              data-testid={`project-live-${p.id}`}
            >
              [ download ↓ ]
            </a>
          </div>
        </div>

        {/* preview gallery */}
        <div className="col-span-12 lg:col-span-7">
          <div className="text-[0.7rem] uppercase tracking-widest text-muted mb-3 flex justify-between">
            <span>./previews</span>
            <span>{p.previews.length} shots</span>
          </div>

          <div className="grid grid-cols-6 gap-3">
            {/* big shot */}
            <a
              href={p.previews[0].src}
              target="_blank"
              rel="noreferrer noopener"
              className="col-span-6 sm:col-span-4 group relative border border-line hover:border-accent transition-colors overflow-hidden bg-[#111]"
              data-testid={`project-preview-${p.id}-0`}
            >
              <img
                src={p.previews[0].src}
                alt={p.previews[0].caption}
                loading="lazy"
                className="w-full h-full object-contain"
              />
              <span className="absolute bottom-0 left-0 right-0 px-3 py-2 text-[0.65rem] tracking-widest uppercase text-fg bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                ↳ {p.previews[0].caption}
              </span>
            </a>

            {/* two stacked shots */}
            <div className="col-span-6 sm:col-span-2 flex flex-col gap-3">
              {p.previews.slice(1).map((img, i) => (
                <a
                  key={img.src}
                  href={img.src}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative border border-line hover:border-accent transition-colors overflow-hidden bg-[#111] flex-1 min-h-[100px]"
                  data-testid={`project-preview-${p.id}-${i + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[0.6rem] tracking-widest uppercase text-fg bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    ↳ {img.caption}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-3 text-[0.65rem] uppercase tracking-widest text-muted/70">
            click any shot to open full-size
          </div>
        </div>
      </div>
    </article>
  );
}
