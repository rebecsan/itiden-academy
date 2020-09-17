import { createContext, useState, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

type DarkModeContextType = {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

// const DarkModeContext = createContext<DarkModeContextType>({
//   isDarkMode: true,
//   setDarkMode: (value: boolean) => {},
// });
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   isDarkMode ?
  //     setDarkMode(false) :
  //     setDarkMode(true)
  // };

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
