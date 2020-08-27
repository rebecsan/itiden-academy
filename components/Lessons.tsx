import { HomeProps } from "../pages";

export const Lessons: React.FC<HomeProps> = ({ allCoursesData }) => (
  <>
    <main
      className="
       flex-grow"
    >
      {allCoursesData.map(({ courseId, title, lessons }) =>
        lessons.map(({ id, week, subject, description, links }) => (
          <article className="bg-gray-700 mb-10" key={id}>
            <div className="flex justify-between px-4">
            <div className="py-3">
              <h3>v {week} - Lektion {id}</h3>
              <h2 className="text-gray-200">{subject}</h2>
            </div>
            <img src="/collapseicon.svg" alt="collapse section icon"/>
            </div>
            <div className="bg-gray-600">
              <p className="px-4 py-3">{description}</p>
            </div>
            <section className="px-4 py-5">
              {links.map(({ category, title, url }) => (
                <div key={title}>
                  <h4 className="pr-3 pb-3">{category}</h4>
                  <a className="flex pb-4 last:pb-6" href={url}>{title} <img className="pl-3" src="/linkicon.svg" alt="open link icon"/> </a>
                </div>
              ))}
            </section>
          </article>
        ))
      )}
    </main>
  </>
);
