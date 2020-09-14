import { useTheme } from "../lib/themeContext";

const { toggleTheme } = useTheme();

export const Footer: React.FC = () => (
  <>
    <footer className="bg-gray-900 text-gray-400 border-t border-purple-700 py-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between ">
        <section className="px-4">
          <img src="/itidensm.svg" alt="itiden logo"></img>
          {/* <h1 className="uppercase text-base">{courseId}</h1> */}
        </section>
        <section>
          <button onClick={toggleTheme}>Toggle</button>
        </section>
        <section className="flex flex-col items-start px-4 w-full">
          <h3>Kursansvariga</h3>
          <a
            href="mailto:andreas@itiden.se"
            className="text-teal-400 underline"
          >
            Andreas Bergqvist
          </a>
          <a href="mailto:filip@itiden.se" className="text-teal-400 underline">
            Filip Engberg
          </a>
        </section>
        <section className="px-4">
          0709-597008 <br />
          Kungstorget 11-12 <br />
          411 41 Göteborg
        </section>
        <section className="flex self-end px-4">
          <a href="https://www.facebook.com/itiden">
            <img src="/fb.svg"></img>
          </a>
          <a href="https://www.linkedin.com/company/itiden/">
            <img className="px-4" src="/linkedin.svg"></img>
          </a>
          <a href="https://www.instagram.com/itidenab/">
            <img src="/instagram.svg"></img>
          </a>
        </section>
      </div>
    </footer>
  </>
);
