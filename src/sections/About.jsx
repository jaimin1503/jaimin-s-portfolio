import Section from "../components/Section";

const factRows = [
  ["name", "Jaimin Viramgama"],
  ["role", "Software Engineer"],
  ["based", "Ahmedabad, India"],
  ["stack", "React · TypeScript · Spring Boot"],
  ["experience", "~1.5 yrs @ emgage.work"],
  ["studying", "system design, backend performance"],
  ["writing", "occasional notes at /log"],
  ["hobbies", "reading, chess, exploring new tech"],
];

export default function About() {
  return (
    <Section id="about" index={1} title="about()" meta="cat ./about.md">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {/* narrative */}
        <div className="col-span-12 lg:col-span-7 space-y-5 text-[0.95rem] md:text-base leading-relaxed">
          <p className="text-fg">
            <span className="text-accent">//</span> I'm a software engineer
            with about <span className="text-fg">1.5 years</span> of
            professional experience building scalable web applications
            end-to-end. My day-to-day is <span className="text-fg">React</span>,{" "}
            <span className="text-fg">TypeScript</span> and{" "}
            <span className="text-fg">Spring Boot</span> — shipping
            production-grade features across both the frontend and backend.
          </p>
          <p className="text-muted">
            I care about clean, maintainable code, thoughtful UI, and APIs
            that are pleasant to work with. I've spent that time designing
            responsive interfaces, writing RESTful services, integrating
            databases, debugging real production issues, and collaborating
            with cross-functional teams in an agile environment.
          </p>
          <p className="text-muted">
            I'm passionate about delivering high-quality software,
            continuously picking up new tools, and solving real-world
            engineering problems with an emphasis on performance,
            reliability and user experience.
          </p>

          <div className="pt-4">
            <div className="text-muted text-xs uppercase tracking-widest mb-3">
              // currently
            </div>
            <ul className="text-sm md:text-base space-y-2">
              <li className="prompt">
                shipping full-stack features at{" "}
                <span className="text-accent">emgage.work</span>
              </li>
              <li className="prompt">
                deepening my Spring Boot & system design chops
              </li>
              <li className="prompt">
                open to interesting side-projects & collaborations
              </li>
            </ul>
          </div>
        </div>

        {/* facts table */}
        <aside className="col-span-12 lg:col-span-5">
          <div className="card-mono p-5">
            <div className="flex justify-between text-muted text-[0.68rem] uppercase tracking-widest mb-3 dashed-b pb-2">
              <span>const facts = {"{"}</span>
              <span>8 keys</span>
            </div>
            <dl className="text-[0.82rem] md:text-sm">
              {factRows.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[7rem_1fr] py-2 dashed-b last:border-0"
                >
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-fg break-words">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="text-muted text-[0.68rem] uppercase tracking-widest mt-3 pt-3 dashed-t">
              {"}"};
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
