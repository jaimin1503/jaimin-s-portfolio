import Section from "../components/Section";

const groups = [
  {
    key: "languages",
    items: ["typescript", "javascript", "java", "python", "html", "css", "sql", "bash"],
  },
  {
    key: "frameworks",
    items: ["react", "next", "node", "express", "spring boot", "tailwind", "vite", "fastapi"],
  },
  {
    key: "data & infra",
    items: ["postgres", "mongodb", "redis", "docker", "nginx", "vercel", "aws"],
  },
  {
    key: "tools",
    items: ["git", "figma", "neovim", "linear", "raycast", "playwright"],
  },
];

const principles = [
  ["01", "boring tech", "prefer proven, dependable tools over hype cycles."],
  ["02", "small pieces", "compose from tiny, understandable primitives."],
  ["03", "type-first", "let the compiler carry the load; refactor fearlessly."],
  ["04", "craft matters", "typography, motion & copy are part of the product."],
];

export default function Skills() {
  return (
    <Section
      id="skills"
      index={5}
      title="stack{}"
      meta="npm ls --depth=0"
    >
      {/* stack grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {groups.map((g) => (
          <div
            key={g.key}
            data-testid={`skill-group-${g.key.replace(/\s+/g, "-")}`}
            className="col-span-12 md:col-span-6 card-mono p-5"
          >
            <div className="text-[0.7rem] uppercase tracking-widest text-muted mb-3 dashed-b pb-2 flex justify-between">
              <span>{g.key}</span>
              <span>{String(g.items.length).padStart(2, "0")} items</span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="text-sm px-2 py-1 border border-line text-fg hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* principles */}
      <div className="mt-14">
        <div className="text-[0.7rem] uppercase tracking-widest text-muted mb-4">
          // how I build
        </div>
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {principles.map(([n, title, desc]) => (
            <div
              key={n}
              className="col-span-12 md:col-span-6 lg:col-span-3 border-t border-line pt-4"
            >
              <div className="text-muted text-xs tabular-nums mb-2">/{n}</div>
              <h4 className="display text-xl text-fg mb-2">{title}</h4>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="mt-14 overflow-hidden dashed-t dashed-b py-3">
        <div className="marquee whitespace-nowrap text-muted text-sm tabular-nums flex gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>● shipping · in production · react 19 · typescript 5</span>
              <span>▲ tailwind 3 · vite 5 · node 20 · postgres 16</span>
              <span>◆ open-source · a11y · perf · dx</span>
              <span>◇ mono-first · dark-first · calm-first</span>
              <span className="pr-8">◐ available for work — Q1 2026</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
