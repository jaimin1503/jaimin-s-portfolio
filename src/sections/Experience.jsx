import Section from "../components/Section";

const roles = [
  {
    org: "emgage.work",
    role: "software engineer",
    period: "2024 — present",
    location: "full-time · ~1.5 yrs",
    bullets: [
      "Building and maintaining production-grade features across the frontend and backend of a scalable web platform.",
      "Working day-to-day with React, TypeScript and Spring Boot — from responsive UI components down to RESTful APIs and database layers.",
      "Owning features end-to-end: design → implementation → code review → release, in an agile, cross-functional team.",
      "Debugging complex issues in production, writing clean and maintainable code, and focusing on performance, reliability and UX.",
      "Continuously learning and adopting new tools/patterns to raise the bar for both developer experience and product quality.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      index={4}
      title="experience{}"
      meta="git log --author=jaimin"
    >
      <ol className="relative pl-6 md:pl-10 border-l border-line">
        {roles.map((r, i) => (
          <li
            key={r.org}
            data-testid={`experience-item-${i}`}
            className="pb-12 last:pb-0 relative"
          >
            {/* node */}
            <span
              aria-hidden
              className="absolute -left-[7px] top-2 w-3 h-3 bg-bg border border-accent"
            />
            <div className="grid md:grid-cols-[10rem_1fr] gap-2 md:gap-8">
              <div className="text-[0.72rem] uppercase tracking-widest text-muted tabular-nums md:pt-1">
                {r.period}
                <div className="text-muted/70 mt-1 normal-case tracking-normal text-[0.7rem]">
                  {r.location}
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="display text-2xl md:text-3xl text-fg">
                    {r.role}
                  </h3>
                  <span className="text-muted">@</span>
                  <span className="text-accent text-lg md:text-xl">
                    {r.org}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm md:text-[0.92rem] text-muted leading-relaxed">
                  {r.bullets.map((b, k) => (
                    <li key={k} className="prompt">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
