import React from "react";

const initialTheme = {};

const ThemeContext = React.createContext(initialTheme);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(initialTheme);

  // React.useEffect(() => {
  //   // We'd get the theme from a web API / local storage in a real app
  //   // We've hardcoded the theme in our example
  //   const currentTheme = "lightblue";
  //   setTheme(currentTheme);
  // }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeContext;
