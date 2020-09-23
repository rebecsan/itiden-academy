import Toggle from "./Toggle";
import ItidenSmall from "./ItidenSmall";

export const Footer: React.FC = () => (
  <>
    <footer className="bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border-t border-purple-700 py-6 bottom-0 mt-6">
      <div className="max-w-5xl px-4 mx-auto flex flex-wrap justify-between md:flex-1 md:flex-no-wrap">
        <section>
          <ItidenSmall />
        </section>
        <div className="md:hidden">
          <Toggle />
        </div>
        {/* Line between sections */}
        <div className="h-1px bg-gray-300 dark:bg-gray-600 w-full my-4 md:hidden"></div>
        <section className="flex flex-col items-start w-full md:w-auto">
          <h2>Kursansvariga</h2>
          <a
            href="mailto:andreas@itiden.se"
            className="text-purple-700 dark:text-teal-400 underline py-2"
          >
            Andreas Bergqvist
          </a>
          <a
            href="mailto:filip@itiden.se"
            className="text-purple-700 dark:text-teal-400 underline"
          >
            Filip Engberg
          </a>
        </section>
        {/* Line between sections */}
        <div className="h-1px bg-gray-300 dark:bg-gray-600 mt-5 mb-4 w-full md:hidden"></div>
        <section>
          0709-597008 <br />
          Kungstorget 11–12
          <br />
          411 41 Göteborg
        </section>
        <section className="flex flex-col justify-end md:justify-start">
          <div className="hidden md:block">
            <Toggle />
          </div>
          <div className="flex flex-row">
            <a href="https://www.facebook.com/itiden">
              <span className="sr-only">Itiden on Facebook</span>
              <img src="/fb.svg" alt="Facebook logo"></img>
            </a>
            <a href="https://www.linkedin.com/company/itiden/">
              <span className="sr-only">Itiden onLinkedIn</span>
              <img
                className="px-4"
                src="/linkedin.svg"
                alt="Linkedin logo"
              ></img>
            </a>
            <a href="https://www.instagram.com/itidenab/">
              <span className="sr-only">Itiden on Instagram</span>
              <img src="/instagram.svg" alt="Instagram logo"></img>
            </a>
          </div>
        </section>
      </div>
    </footer>
  </>
);
