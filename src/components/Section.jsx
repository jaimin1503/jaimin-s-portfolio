import useReveal from "../hooks/useReveal";

/**
 * Section wrapper with numbered header and ASCII rule.
 */
export default function Section({
  id,
  index,
  title,
  meta,
  children,
  className = "",
}) {
  const { ref, shown } = useReveal(0.08);

  return (
    <section
      id={id}
      ref={ref}
      data-testid={`section-${id}`}
      className={`mx-auto max-w-[1400px] px-4 md:px-8 py-20 md:py-28 reveal ${
        shown ? "in" : ""
      } ${className}`}
    >
      <header className="mb-10 md:mb-14">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <div className="flex items-baseline gap-3 md:gap-5">
            <span className="text-muted text-xs md:text-sm tabular-nums">
              §{String(index).padStart(2, "0")}
            </span>
            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-fg">
              {title}
            </h2>
          </div>
          {meta && (
            <span className="text-[0.7rem] md:text-xs text-muted uppercase tracking-widest">
              {meta}
            </span>
          )}
        </div>
        <div className="hr-ascii mt-4 select-none" aria-hidden>
          {"─".repeat(600)}
        </div>
      </header>

      {children}
    </section>
  );
}
