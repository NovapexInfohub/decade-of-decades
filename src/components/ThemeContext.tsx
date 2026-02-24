import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeName = "navy" | "forest" | "ember" | "charcoal" | "ocean";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "navy",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const themeClasses: Record<ThemeName, string> = {
  navy: "theme-navy",
  forest: "theme-forest",
  ember: "theme-ember",
  charcoal: "theme-charcoal",
  ocean: "theme-ocean",
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem("sed-theme");
    return (saved as ThemeName) || "navy";
  });

  useEffect(() => {
    localStorage.setItem("sed-theme", theme);
    const root = document.documentElement;
    // Remove all theme classes
    Object.values(themeClasses).forEach((cls) => root.classList.remove(cls));
    // Add current
    root.classList.add(themeClasses[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
