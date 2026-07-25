import { useEffect, useState } from "react";

const roles = [
  "web developer",
  "systems tinkerer",
  "design engineer",
  "problem solver",
];

function useTypewriter(words, speed = 90, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i];
    const done = !deleting && text === current;
    const empty = deleting && text === "";
    const delay = done ? pause : empty ? 300 : deleting ? speed / 2 : speed;

    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (empty) {
        setDeleting(false);
        setI((n) => (n + 1) % words.length);
      } else {
        setText((cur) =>
          deleting ? current.slice(0, cur.length - 1) : current.slice(0, cur.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);
  const [uptime, setUptime] = useState("00d 00h 00m");

  useEffect(() => {
    const start = new Date("2020-01-01T00:00:00Z").getTime();
    const upd = () => {
      const diff = Date.now() - start;
      const d = Math.floor(diff / 86_400_000);
      const h = Math.floor((diff % 86_400_000) / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      setUptime(
        `${String(d).padStart(4, "0")}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m`
      );
    };
    upd();
    const t = setInterval(upd, 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      data-testid="section-home"
      className="relative pt-24 md:pt-28 pb-16 md:pb-24 min-h-screen flex flex-col"
    >
      <div className="mx-auto max-w-[1400px] w-full px-4 md:px-8 flex-1 flex flex-col">
        {/* meta strip */}
        <div className="flex justify-between text-[0.7rem] md:text-xs text-muted uppercase tracking-widest dashed-b pb-3">
          <span>~/portfolio/index</span>
          <span className="hidden sm:inline">status: Busy in building Something..</span>
          <span>v3.0.0</span>
        </div>

        {/* main hero */}
        <div className="flex-1 grid grid-cols-12 gap-4 md:gap-6 py-10 md:py-16">
          {/* left: prompt + name */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-2 text-sm md:text-base text-muted">
              <div>
                <span className="text-accent">$</span> whoami
              </div>
            </div>
            <h1
              className="display mt-4 text-[13vw] md:text-[9vw] lg:text-[7.5vw] leading-[0.9] text-fg"
              data-testid="hero-name"
            >
              Jaimin
              <br />
              <span className="text-accent">Viramgama</span>
              <span className="blink ml-2 !h-[0.75em] align-middle" />
            </h1>

            <div className="mt-8 md:mt-10 text-lg md:text-2xl text-fg">
              <span className="text-muted mr-2">↳</span>
              <span className="tabular-nums">{role}</span>
              <span className="text-accent">_</span>
            </div>

            <p className="mt-8 max-w-xl text-sm md:text-base text-muted leading-relaxed">
              Building thoughtful interfaces at the intersection of{" "}
              <span className="text-fg">code</span>,{" "}
              <span className="text-fg">typography</span> and{" "}
              <span className="text-fg">craft</span>. Currently open to
              freelance and full-time engagements.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="btn-mono solid"
                data-testid="hero-cta-work"
              >
                [ view work → ]
              </a>
              <a
                href="https://calendly.com/jaiminv153/30min"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-mono"
                data-testid="hero-cta-contact"
              >
                [ schedule a meet ]
              </a>
              <a
                href="https://drive.google.com/file/d/1b3Im91wJBcdNNlqRqA7B3QAzAv3j2q_1/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-mono"
                data-testid="hero-cta-resume"
              >
                [ résumé.pdf ↓ ]
              </a>
            </div>
          </div>

          {/* right: ascii card */}
          <aside className="col-span-12 lg:col-span-4 flex lg:justify-end mt-8 lg:mt-0">
            <div className="card-mono p-5 w-full lg:max-w-sm text-[0.78rem] leading-relaxed">
              <div className="flex justify-between text-muted text-[0.68rem] uppercase tracking-widest mb-3 dashed-b pb-2">
                <span>~/session.log</span>
                <span className="text-accent">● live</span>
              </div>
              <ul className="space-y-1.5 text-fg tabular-nums">
                <li>
                  <span className="text-muted">location  </span> Ahmedabad, IN
                </li>
                <li>
                  <span className="text-muted">timezone  </span> GMT+05:30
                </li>
                <li>
                  <span className="text-muted">focus     </span> React · Node · Systems
                </li>
                <li>
                  <span className="text-muted">writing   </span> a{" "}
                  <span className="text-accent">terminal-first</span> UI kit
                </li>
                <li>
                  <span className="text-muted">listening </span> lo-fi & tape hiss
                </li>
                <li>
                  <span className="text-muted">uptime    </span> {uptime}
                </li>
              </ul>
              <div className="mt-4 pt-3 dashed-t text-muted text-[0.68rem]">
                press <span className="text-accent">↓</span> to explore
              </div>
            </div>
          </aside>
        </div>

        {/* bottom ticker */}
        <div className="dashed-t pt-3 text-[0.68rem] md:text-xs text-muted flex justify-between gap-4 flex-wrap">
          <span>
            [scroll] navigate · [tab] focus · [/] search (soon)
          </span>
          <span className="hidden md:inline">
            0x{Math.floor(Math.random() * 0xffff).toString(16).padStart(4, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
