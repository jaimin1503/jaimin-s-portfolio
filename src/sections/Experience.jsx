import Section from "../components/Section";

const roles = [
  {
    org: "acme.co",
    role: "senior frontend engineer",
    period: "2024 — present",
    location: "remote",
    bullets: [
      "Leading a redesign of the core dashboard used by 12k+ daily users.",
      "Introduced a mono-themed design system; shipped 40+ tokens & primitives.",
      "Mentored two juniors; instituted weekly craft reviews.",
    ],
  },
  {
    org: "studio-north",
    role: "product engineer",
    period: "2022 — 2024",
    location: "hybrid, ahmedabad",
    bullets: [
      "Owned end-to-end delivery of a marketplace product from 0 → 1.",
      "Built the payments layer and reduced checkout errors by 62%.",
      "Rebuilt the marketing site — pagespeed went 41 → 98.",
    ],
  },
  {
    org: "freelance",
    role: "developer & designer",
    period: "2020 — 2022",
    location: "worldwide",
    bullets: [
      "Delivered 15+ small to mid-sized web projects across e-com, portfolio, saas.",
      "Long-term retainers with three studios in EU & IN.",
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
