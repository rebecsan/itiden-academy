import { useEffect, useState } from "react";
export const Toggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  function onToggle() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    // Add or remove class "mode-dark" from html root
    darkMode
      ? document.documentElement.classList.add("mode-dark")
      : document.documentElement.classList.remove("mode-dark");
  }, [darkMode]);

  return (
    <section className="flex flex-col md:hidden">
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        checked={darkMode}
        onClick={onToggle}
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
