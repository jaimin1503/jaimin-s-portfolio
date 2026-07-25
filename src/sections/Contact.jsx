import { useState } from "react";
import Section from "../components/Section";

const socials = [
  { key: "github",   handle: "@jaimin1503",           href: "#" },
  { key: "linkedin", handle: "in/jaimin-viramgama",   href: "#" },
  { key: "twitter",  handle: "@jaimin_dev",           href: "#" },
  { key: "email",    handle: "hello@jaimin.dev",      href: "mailto:hello@jaimin.dev" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle"); // idle | sending | sent

  const on = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("sending");
    // placeholder — hook up to your form backend of choice
    setTimeout(() => {
      setState("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setState("idle"), 4000);
    }, 900);
  };

  return (
    <Section
      id="contact"
      index={6}
      title="contact()"
      meta="POST /hello"
    >
      <div className="grid grid-cols-12 gap-4 md:gap-8">
        {/* left: pitch */}
        <div className="col-span-12 lg:col-span-5">
          <p className="display text-3xl md:text-4xl text-fg leading-tight">
            Have a project,
            <br />a role, or a rabbit-hole
            <br />
            to <span className="text-accent">discuss?</span>
          </p>
          <p className="mt-6 text-muted leading-relaxed text-sm md:text-base">
            I read every message. Response time is usually under 24 hours.
            Prefer async — hit me on any of these:
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            {socials.map((s) => (
              <li
                key={s.key}
                className="grid grid-cols-[6rem_1fr] dashed-b py-2"
              >
                <span className="text-muted uppercase tracking-widest text-[0.72rem] pt-0.5">
                  {s.key}
                </span>
                <a
                  href={s.href}
                  className="link-mono text-fg"
                  data-testid={`contact-${s.key}`}
                >
                  {s.handle} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* right: form */}
        <div className="col-span-12 lg:col-span-7">
          <form
            onSubmit={submit}
            className="card-mono p-6 md:p-8"
            data-testid="contact-form"
          >
            <div className="text-[0.7rem] uppercase tracking-widest text-muted mb-5 dashed-b pb-3 flex justify-between">
              <span>./compose_message.sh</span>
              <span className={state === "sent" ? "text-accent" : ""}>
                {state === "sent" ? "● sent" : state === "sending" ? "◐ sending..." : "○ idle"}
              </span>
            </div>

            <label className="block mb-5">
              <span className="text-muted text-xs uppercase tracking-widest">
                ~ name
              </span>
              <input
                required
                value={form.name}
                onChange={on("name")}
                placeholder="ada lovelace"
                data-testid="contact-name-input"
                className="mt-1 w-full bg-transparent border-b border-line focus:border-accent outline-none py-2 text-fg placeholder:text-muted/60 font-mono"
              />
            </label>

            <label className="block mb-5">
              <span className="text-muted text-xs uppercase tracking-widest">
                ~ email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={on("email")}
                placeholder="ada@analytical.engine"
                data-testid="contact-email-input"
                className="mt-1 w-full bg-transparent border-b border-line focus:border-accent outline-none py-2 text-fg placeholder:text-muted/60 font-mono"
              />
            </label>

            <label className="block mb-6">
              <span className="text-muted text-xs uppercase tracking-widest">
                ~ message
              </span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={on("message")}
                placeholder="hey jaimin — let's build something interesting..."
                data-testid="contact-message-input"
                className="mt-1 w-full bg-transparent border-b border-line focus:border-accent outline-none py-2 text-fg placeholder:text-muted/60 font-mono resize-none"
              />
            </label>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="text-[0.7rem] text-muted">
                encrypted in transit · never shared
              </span>
              <button
                type="submit"
                disabled={state !== "idle"}
                data-testid="contact-submit-btn"
                className="btn-mono solid disabled:opacity-60"
              >
                {state === "sending"
                  ? "[ sending… ]"
                  : state === "sent"
                  ? "[ ✓ sent ]"
                  : "[ send message → ]"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
