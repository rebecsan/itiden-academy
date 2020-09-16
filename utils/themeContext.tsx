import { createContext, useState, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

type DarkModeContextType = {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: true,
  setDarkMode: (value: boolean) => {},
});

export const DarkModeProvider = ({ children }: Props) => {
  const [isDarkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   // Toggle darkmode
  //   isDarkMode ? setDarkMode(false) : setDarkMode(true);
  // }, [setDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(`useDarkMode must be used within a DarkModeProvider`);
  }
  return context;
};

export default DarkModeContext;
