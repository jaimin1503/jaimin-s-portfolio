import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const items = [
  { id: "home", label: "index" },
  { id: "about", label: "about" },
  { id: "projects", label: "work" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "stack" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [time, setTime] = useState("");

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} UTC`);
    };
    upd();
    const t = setInterval(upd, 30_000);
    return () => clearInterval(t);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md dashed-b"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 flex items-center justify-between h-14">
        {/* logo */}
        <a
          href="#home"
          data-testid="nav-logo"
          className="flex items-center gap-2 text-[0.82rem] tracking-tight"
        >
          <span className="text-accent">$</span>
          <span className="text-fg">jaimin</span>
          <span className="text-muted">.viramgama</span>
          <span className="blink ml-1 hidden sm:inline-block" />
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[0.78rem] uppercase tracking-widest">
          {items.map((it, i) => (
            <Link
              key={it.id}
              to={it.id}
              spy
              smooth
              duration={450}
              offset={-56}
              onSetActive={() => setActive(it.id)}
              className={`link-mono cursor-pointer flex items-center gap-1 ${
                active === it.id ? "text-accent" : "text-fg"
              }`}
              data-testid={`nav-link-${it.id}`}
            >
              <span className="text-muted">
                {String(i).padStart(2, "0")}/
              </span>
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-[0.7rem] text-muted tabular-nums">
            {time}
          </span>
          <ThemeToggle />

          {/* mobile toggle */}
          <button
            className="md:hidden btn-mono !py-1 !px-2 !text-xs"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {open ? "×" : "≡"}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden dashed-t bg-bg" data-testid="nav-mobile-menu">
          <nav className="flex flex-col px-4 py-3">
            {items.map((it, i) => (
              <Link
                key={it.id}
                to={it.id}
                spy
                smooth
                duration={450}
                offset={-56}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-widest link-mono flex items-center gap-2"
                data-testid={`nav-mobile-link-${it.id}`}
              >
                <span className="text-muted">
                  {String(i).padStart(2, "0")}/
                </span>
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
