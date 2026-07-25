import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      data-testid="theme-toggle-btn"
      className="btn-mono !py-1 !px-2 !text-[0.7rem] uppercase tracking-widest"
    >
      <span className="text-muted">theme:</span>
      <span className="text-accent">{isDark ? "dark" : "light"}</span>
      <span aria-hidden className="text-muted">
        [{isDark ? "◐" : "◑"}]
      </span>
    </button>
  );
}
