import React from "react";

type ThemeContextType = {
  theme: string;
  setTheme?: (value: string) => void; // Ska setTheme vara optional?
};

const initialValue = { theme: "theme-dark" };

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  initialValue
);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("theme-dark");

  function toggleTheme() {
    setTheme(theme === "theme-dark" ? "theme-light" : "theme-dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
