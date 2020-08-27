import { HomeProps } from "../pages";

export const Header: React.FC<HomeProps> = ({ allCoursesData }) => (
  <>
    <header className="flex flex-wrap justify-between px-4">
      <div className="flex ">
        <img className="flex-grow-0" src="/logosm.svg"></img>
      </div>
      <div className="flex ">
        <div className="bg-purple-700 w-48 flex mt-5 h-6 py-1 px-6 rounded-full">
          <span className="self-center">academy@itiden.se</span>
        </div>
      </div>
      <section className="flex flex-col w-full py-24 md:hidden">
        <img className="self-center" src="/itiden.svg" alt="itiden logo"></img>
        {allCoursesData.map(({ courseId }) => (
          <h1 className="self-center uppercase" key={courseId}>
            {courseId}
          </h1>
        ))}
      </section>
    </header>
  </>
);
