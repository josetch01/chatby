import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  // Initialize with system preference or localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      // Check localStorage first
      const saved = localStorage.getItem("theme");
      if (saved) {
        return saved === "dark";
      }

      // Check old darkMode key for backward compatibility
      const oldSaved = localStorage.getItem("darkMode");
      if (oldSaved !== null) {
        return oldSaved === "true";
      }

      // Check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply theme to DOM whenever darkMode changes
  useEffect(() => {
    const root = document.documentElement;

    // Remove both classes first to ensure clean state
    root.classList.remove("dark", "light");

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }

    // Save to localStorage
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", darkMode.toString());

    // Debug log
    console.log("Theme applied:", darkMode ? "dark" : "light", "HTML classes:", root.className);

    // Force a repaint
    root.style.display = 'none';
    root.offsetHeight; // Trigger reflow
    root.style.display = '';
  }, [darkMode]);

  const toggleDarkMode = () => {
  document.documentElement.classList.add("theme-transition");

  setTimeout(() => {
    setDarkMode(prev => !prev);
    document.documentElement.classList.remove("theme-transition");
  }, 300); // 300ms de delay
};

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
