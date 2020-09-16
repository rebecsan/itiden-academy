// import { useEffect } from "react";
import { useDarkMode } from "../utils/themeContext";
export const Toggle: React.FC = () => {
  const { isDarkMode, setDarkMode } = useDarkMode();

  function onToggle() {
    const newDarkModeValue = !isDarkMode;
    setDarkMode(newDarkModeValue);
    newDarkModeValue
      ? document.documentElement.classList.add("mode-dark")
      : document.documentElement.classList.remove("mode-dark");
  }

  // useEffect(() => {}, [isDarkMode]);

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
