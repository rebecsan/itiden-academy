import { useContext, useEffect, useState } from "react";
import DarkmodeContext, { useDarkMode } from "../utils/themeContext";
export const Toggle: React.FC = () => {
  //const darkMode = useContext(DarkmodeContext);
  const { isDarkMode, setDarkMode } = useDarkMode()!;
  // const [darkMode, setDarkMode] = useState(isDarkMode);
  function onToggle() {
    setDarkMode(!isDarkMode);
  }

  useEffect(() => {
    console.log("isDarkMode toggle är: " + isDarkMode);
  }, [isDarkMode]);

  return (
    <section className="flex flex-col md:hidden">
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        checked={isDarkMode}
        onChange={onToggle}
      />
      <label
        htmlFor="toggle"
        className="switch bg-purple-700 dark:bg-teal-400 self-end"
      ></label>
      <label htmlFor="toggle" className="mt-2">
        <h3>Ljust/Mörkt</h3>
      </label>
    </section>
  );
};
