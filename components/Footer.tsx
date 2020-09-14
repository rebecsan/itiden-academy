import { Toggle } from "./Toggle";

export const Footer: React.FC = () => (
  <>
    <footer className="bg-gray-900 text-gray-400 border-t border-purple-700 py-6">
      <div className="max-w-5xl px-4 mx-auto flex flex-wrap justify-between ">
        <section>
          <img src="/itidensm.svg" alt="itiden logo"></img>
          {/* <h1 className="uppercase text-base">{courseId}</h1> */}
        </section>
        <Toggle />
        {/* Line between sections */}
        <div className="h-1px bg-gray-600 w-full mt-4 mb-3"></div>
        <section className="flex flex-col items-start w-full">
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
        {/* Line between sections */}
        <div className="h-1px bg-gray-600 mt-4 mb-3 w-full"></div>
        <section>
          0709-597008 <br />
          Kungstorget 11-12 <br />
          411 41 Göteborg
        </section>
        <section className="flex self-end">
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
