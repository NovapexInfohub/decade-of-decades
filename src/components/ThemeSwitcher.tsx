import { useTheme, ThemeName } from "./ThemeContext";
import { Palette } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes: { name: ThemeName; label: string; swatch: string }[] = [
  { name: "navy", label: "Navy", swatch: "hsl(215 45% 22%)" },
  { name: "forest", label: "Forest", swatch: "hsl(155 35% 24%)" },
  { name: "ember", label: "Ember", swatch: "hsl(18 50% 35%)" },
  { name: "charcoal", label: "Charcoal", swatch: "hsl(220 10% 20%)" },
  { name: "ocean", label: "Ocean", swatch: "hsl(195 55% 30%)" },
];

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 right-0 bg-card border border-border rounded-sm shadow-lg p-3 flex flex-col gap-2 min-w-[140px]"
          >
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => {
                  setTheme(t.name);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-colors ${
                  theme === t.name
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <span
                  className="w-4 h-4 rounded-full border border-border flex-shrink-0"
                  style={{ backgroundColor: t.swatch }}
                />
                {t.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Change theme"
      >
        <Palette size={20} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
