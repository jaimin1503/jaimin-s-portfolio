import Section from "../components/Section";

const factRows = [
  ["name", "Jaimin Viramgama"],
  ["role", "Full-stack Developer"],
  ["based", "Ahmedabad, India"],
  ["stack", "TypeScript · React · Node · Postgres"],
  ["experience", "3+ years shipping web apps"],
  ["studying", "distributed systems, type theory"],
  ["writing", "occasional notes at /log"],
  ["hobbies", "cycling, film photography, chess"],
];

export default function About() {
  return (
    <Section id="about" index={1} title="about()" meta="cat ./about.md">
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {/* narrative */}
        <div className="col-span-12 lg:col-span-7 space-y-5 text-[0.95rem] md:text-base leading-relaxed">
          <p className="text-fg">
            <span className="text-accent">//</span> Lorem ipsum. I'm a developer
            who cares deeply about the small details — the weight of a border,
            the ease of a transition, the rhythm of a sentence in a UI. I build
            software the way a typographer sets a page: patient, considered,
            and always in service of the reader.
          </p>
          <p className="text-muted">
            Over the last few years I've shipped e-commerce platforms,
            developer tools, and quiet little utilities that just work. I
            prefer boring technology, aggressive iteration, and honest error
            messages. When I'm not shipping, I'm reading changelogs or fixing
            my keyboard.
          </p>
          <p className="text-muted">
            This site itself is a placeholder — swap the copy for your own and
            keep the aesthetic. It's built with React and Tailwind, and set in{" "}
            <span className="text-fg">IBM Plex Mono</span> and{" "}
            <span className="text-fg">Space Mono</span>.
          </p>

          <div className="pt-4">
            <div className="text-muted text-xs uppercase tracking-widest mb-3">
              // currently
            </div>
            <ul className="text-sm md:text-base space-y-2">
              <li className="prompt">
                exploring server-driven UI patterns in React
              </li>
              <li className="prompt">
                writing a mono-themed note-taking app
              </li>
              <li className="prompt">
                open to freelance & full-time engagements
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
