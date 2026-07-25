import Section from "../components/Section";

const roles = [
  {
    org: "emgage",
    role: "software engineer",
    period: "2024 — present",
    location: "full-time · ~1.5 yrs",
    focus:
      "HRMS platform · Payroll, Compliance, Offer Letter, Job Role & Employee Management",
    bullets: [
      "Developed and enhanced Payroll, Compliance, Offer Letter, Job Role and Employee Management modules within the HRMS platform.",
      "Built and maintained frontend features using React and TypeScript, ensuring responsive and user-friendly interfaces.",
      "Developed backend APIs and business logic using Spring Boot and Java for HR and payroll workflows.",
      "Created and optimized PostgreSQL queries, views and stored procedures for payroll processing and employee data management.",
      "Implemented and maintained Flyway database migrations for schema changes and new feature deployments.",
      "Worked on dynamic Letter Tag generation and document templating for offer letters and HR documents.",
      "Investigated and resolved production issues, database inconsistencies and application bugs across frontend and backend systems.",
      "Integrated REST APIs and improved data flow between the React frontend and Spring Boot backend.",
      "Participated in code reviews, feature planning, testing and deployment as part of an Agile development team.",
      "Improved application performance and maintainability by refactoring legacy code and optimizing SQL queries.",
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
                {r.focus && (
                  <div className="mt-2 text-[0.72rem] md:text-xs uppercase tracking-widest text-muted">
                    ↳ {r.focus}
                  </div>
                )}
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
