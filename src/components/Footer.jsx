export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="mx-auto max-w-[1400px] px-4 md:px-8 py-8 dashed-t"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 text-[0.72rem] text-muted uppercase tracking-widest">
        <span>
          © {year} · jaimin viramgama · built with react + tailwind
        </span>
        <span>
          set in <span className="text-fg">ibm plex mono</span> &{" "}
          <span className="text-fg">space mono</span>
        </span>
        <span>
          <a href="#home" className="link-mono">
            back to top ↑
          </a>
        </span>
      </div>
      <pre
        aria-hidden
        className="mt-4 text-[0.55rem] leading-tight text-muted/60 select-none overflow-hidden"
      >{`     _       _           _         _  __
    (_) __ _(_)_ __ ___ (_)_ __   | |/ /
    | |/ _\` | | '_ \` _ \\| | '_ \\  | ' /
    | | (_| | | | | | | | | | | | | . \\
   _/ |\\__,_|_|_| |_| |_|_|_| |_| |_|\\_\\
  |__/                                  `}</pre>
    </footer>
  );
}
