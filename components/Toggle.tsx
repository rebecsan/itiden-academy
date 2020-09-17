type darkModeProps = {
  checked: boolean;
  onToggle: () => void;
};

const Toggle = ({ checked, onToggle }: darkModeProps) => (
  <div className="flex justify-end">
    <section className="flex flex-col md:hidden">
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        checked={checked}
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
      {checked ? "Ljust tema" : "Mörkt tema"}
    </div>
  </div>
);

export default Toggle;
