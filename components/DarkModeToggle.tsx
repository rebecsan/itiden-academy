import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";

const DarkModeToggle = () => {
  //   if (!window.document) {
  //     return null;
  //   }

  const darkMode = useDarkMode(true, {
    // element: document.documentElement,
    // element: document.getElementsByTagName("html")[0],
  });

  return <Toggle checked={darkMode.value} onToggle={darkMode.toggle} />;
};

export default DarkModeToggle;
