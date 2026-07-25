import { useForm, ValidationError } from "@formspree/react";
import Section from "../components/Section";

const socials = [
  {
    key: "github",
    handle: "@jaimin1503",
    href: "https://github.com/jaimin1503",
  },
  {
    key: "linkedin",
    handle: "in/jaimin-viramgama",
    href: "https://www.linkedin.com/in/jaimin-viramgama-487485233/",
  },
  {
    key: "instagram",
    handle: "@jaimin_15.3",
    href: "https://www.instagram.com/jaimin_15.3/",
  },
  {
    key: "email",
    handle: "jaiminviramgama152@gmail.com",
    href: "mailto:jaiminviramgama152@gmail.com",
  },
  {
    key: "calendly",
    handle: "book a 30-min call",
    href: "https://calendly.com/jaiminv153/30min",
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm("mayrnnrj");
  const sent = state.succeeded;
  const sending = state.submitting;

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
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  className="link-mono text-fg break-all"
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
            onSubmit={handleSubmit}
            className="card-mono p-6 md:p-8"
            data-testid="contact-form"
          >
            <div className="text-[0.7rem] uppercase tracking-widest text-muted mb-5 dashed-b pb-3 flex justify-between">
              <span>./compose_message.sh</span>
              <span className={sent ? "text-accent" : ""}>
                {sent ? "● sent" : sending ? "◐ sending..." : "○ idle"}
              </span>
            </div>

            {sent ? (
              <div className="py-8 text-center">
                <div className="display text-2xl md:text-3xl text-fg">
                  ✓ message sent
                </div>
                <p className="mt-3 text-sm text-muted">
                  Thanks — I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <label className="block mb-5">
                  <span className="text-muted text-xs uppercase tracking-widest">
                    ~ name
                  </span>
                  <input
                    required
                    id="name"
                    type="text"
                    name="name"
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
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ada@analytical.engine"
                    data-testid="contact-email-input"
                    className="mt-1 w-full bg-transparent border-b border-line focus:border-accent outline-none py-2 text-fg placeholder:text-muted/60 font-mono"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-accent mt-1 block"
                  />
                </label>

                <label className="block mb-6">
                  <span className="text-muted text-xs uppercase tracking-widest">
                    ~ message
                  </span>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    defaultValue="Hello Jaimin! 👋"
                    data-testid="contact-message-input"
                    className="mt-1 w-full bg-transparent border-b border-line focus:border-accent outline-none py-2 text-fg placeholder:text-muted/60 font-mono resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-accent mt-1 block"
                  />
                </label>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className="text-[0.7rem] text-muted">
                    encrypted in transit · never shared
                  </span>
                  <button
                    type="submit"
                    disabled={sending}
                    data-testid="contact-submit-btn"
                    className="btn-mono solid disabled:opacity-60"
                  >
                    {sending ? "[ sending… ]" : "[ send message → ]"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
