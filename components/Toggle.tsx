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
    <div className="flex justify-end">
      <section className="flex flex-col md:hidden">
        <input
          type="checkbox"
          id="toggle"
          className="checkbox"
          // checked={isDarkMode}
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
      <div
        className="self-end text-purple-700 dark:text-teal-400 underline hidden cursor-pointer mb-5 md:inline"
        onClick={onToggle}
      >
        {"isDarkMode " ? "Ljust tema" : "Mörkt tema"}
      </div>
    </div>
  );
};
