import { HomeProps } from "../pages";

export const Lessons: React.FC<HomeProps> = ({ allCoursesData }) => (
  <>
    <main
      className="
       flex-grow"
    >
      {allCoursesData.map(({ courseId, title, lessons }) =>
        lessons.map(({ id, week, subject, description, links }) => (
          // links.map(({category, title, url}) => (
          <article className="bg-gray-700" key={id}>
            <h3 className="px-4">{week}</h3>
            <h2 className="text-gray-200 px-4">{subject}</h2>
            <p className="bg-gray-600 px-4">{description}</p>
          </article>

          // ))
        ))
      )}
    </main>
  </>
);
