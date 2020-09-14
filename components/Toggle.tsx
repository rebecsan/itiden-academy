export const Toggle: React.FC = () => (
  <section className="relative">
    <input type="checkbox" id="toggle" className="checkbox" />
    <label htmlFor="toggle" className="switch bg-teal-400"></label>
    <label htmlFor="toggle" className="">
      <h3>Ljust/Mörkt</h3>
    </label>
  </section>
);
