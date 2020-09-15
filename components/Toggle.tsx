import { useState } from "react";
export const Toggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  // const [checked, setChecked] = useState(true);
  function onToggle() {
    setDarkMode(!darkMode);
    // Add or remove class "mode-dark" from html root
    darkMode
      ? document.documentElement.classList.remove("mode-dark")
      : document.documentElement.classList.add("mode-dark");
  }
  return (
    <section className="relative md:hidden">
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        // defaultChecked={checked}
        // onChange={() => setChecked(!checked)}
        onClick={onToggle}
      />
      <label
        htmlFor="toggle"
        className="switch bg-purple-700 dark:bg-teal-400"
      ></label>
      <label htmlFor="toggle" className="">
        <h3>Ljust/Mörkt</h3>
      </label>
    </section>
  );
};
