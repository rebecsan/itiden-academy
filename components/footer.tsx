import { HomeProps } from "../pages";

export const Footer: React.FC<HomeProps> = ({ allCoursesData }) => (
  <>
    <footer className="flex flex-wrap justify-between bg-gray-900 text-gray-400 border-t border-purple-700 py-6">
      <section className="px-4">
        <img src="/itidensm.svg" alt="itiden logo"></img>
        {/* {allCoursesData.map(({courseId}) => (
          <h1 className="uppercase text-base" key={courseId}>{courseId}</h1>
        ))} */}
      </section>
      <section>
        <button className="px-4">Light/Dark</button>
      </section>
      <section className="flex flex-col px-4 w-full">
        <h3>Kursansvariga</h3>
        <a href="mailto:andreas@itiden.se">Andreas Bergqvist</a>
        <a href="mailto:filip@itiden.se">Filip Engberg</a>
      </section>
      <section className="px-4">
        0709-597008 <br />
        Kungstorget 11-12 <br />
        411 41 Göteborg
      </section>
      <section className="flex self-end px-4">
        <img src="/fb.svg"></img>
        <img className="px-4" src="/linkedin.svg"></img>
        <img src="/instagram.svg"></img>
      </section>
    </footer>
  </>
);
