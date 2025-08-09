import { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";

// Keep backward-compatible API (darkMode/toggleDarkMode) and also expose theme/setTheme
const ThemeContext = createContext({
  theme: "light",
  darkMode: false,
  setTheme: () => {},
  toggleDarkMode: () => {},
});

const getInitialTheme = () => {
  // 1) Explicit persisted theme
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") return storedTheme;

    // 2) Backward compatibility with previous "darkMode" boolean flag
    const storedBool = localStorage.getItem("darkMode");
    if (storedBool !== null) return storedBool === "true" ? "dark" : "light";

    // 3) System preference
    try {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch {
      /* ignore */
    }

    // 4) Current DOM state
    try {
      if (document?.documentElement?.classList?.contains("dark")) return "dark";
    } catch {
      /* ignore */
    }
  }
  return "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply class/attr ASAP to avoid flicker and ensure Tailwind dark: styles activate
  useLayoutEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    root.setAttribute("data-theme", isDark ? "dark" : "light");

    // Persist both new and legacy keys
    localStorage.setItem("theme", isDark ? "dark" : "light");
    localStorage.setItem("darkMode", isDark ? "true" : "false");
  }, [theme]);

  const toggleDarkMode = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const value = useMemo(
    () => ({ theme, darkMode: theme === "dark", setTheme, toggleDarkMode }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
