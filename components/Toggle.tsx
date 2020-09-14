import { useState } from "react";
export const Toggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  function onToggle() {
    setDarkMode(!darkMode);
    darkMode
      ? document.documentElement.classList.add("mode-dark")
      : document.documentElement.classList.remove("mode-dark");
  }
  return (
    <section className="relative">
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        onClick={onToggle}
      />
      <label htmlFor="toggle" className="switch bg-teal-400"></label>
      <label htmlFor="toggle" className="">
        <h3>Ljust/Mörkt</h3>
      </label>
    </section>
  );
};
