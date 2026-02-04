import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'hp_theme'; // 'dark' | 'light'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
  return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  // Tailwind "dark:" variants (some components may use them)
  root.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('light', theme === 'light');
}

const DarkModeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);

    // Keep in sync with system changes only if user hasn't chosen explicitly
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    const handler = (e) => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') return;
      const next = e.matches ? 'dark' : 'light';
      setTheme(next);
      applyTheme(next);
    };
    mq?.addEventListener?.('change', handler);
    return () => mq?.removeEventListener?.('change', handler);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center p-2 rounded-lg border transition-all duration-300
                 bg-[var(--panel-strong)] border-[var(--border)] text-[var(--muted)]
                 hover:text-[var(--text)] hover:shadow-lg"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      type="button"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default DarkModeToggle;
