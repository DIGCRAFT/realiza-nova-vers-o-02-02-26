// client/src/contexts/ThemeContext.tsx
import React, { createContext, useState, ReactNode } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; // Esta linha exporta o ThemeProvider como default, mas a importação nomeada no App.tsx também funciona com a exportação acima.
