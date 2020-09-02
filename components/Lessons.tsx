import { Lessons } from "../pages";

export const LessonsPage: React.FC<Lessons> = ({
  lessons: lessons,
}: Lessons) => (
  <>
    <main className="flex-grow mt-64 pt-32">
      {lessons
        ? lessons.map(({ id, week, subject, description, links }) => (
            <article className="bg-gray-700 mb-10" key={id} id={`${id}`}>
              <div className="flex justify-between px-4">
                <div className="py-3">
                  <h3>
                    v {week} - Lektion {id}
                  </h3>
                  <h2 className="text-gray-200">{subject}</h2>
                </div>
                <img src="/collapseicon.svg" alt="collapse section icon" />
              </div>
              <div className="bg-gray-600">
                <p className="px-4 py-3">{description}</p>
              </div>
              <section className="px-4 py-5">
                {links.map(({ category, items }) => (
                  <div className="flex flex-col first:bg-green" key={category}>
                    <div className="flex">
                      <h4 className="pr-3 pb-3">{category}</h4>
                      <div className="h-1px bg-gray-600 flex-grow"></div>
                    </div>
                    {items.map(({ title, url }) => (
                      <a className="flex pb-4" key={title} href={url}>
                        {title}
                        <img
                          className="pl-3"
                          src="/linkicon.svg"
                          alt="open link icon"
                        />
                      </a>
                    ))}
                  </div>
                ))}
              </section>
            </article>
          ))
        : "no lessons"}
    </main>
  </>
);

export default LessonsPage;
