import { Lesson } from "../pages";

export const LessonArticle: React.FC<{
  lesson: Lesson;
  expand: boolean;
  onClick(id: number): void;
}> = ({ lesson, expand, onClick }) => {
  // Scroll to expanded lesson
  const scrollTo = (ref: HTMLElement) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <>
      <article
        onClick={() => {
          onClick(lesson.id);
        }}
        className="bg-gray-200 dark:bg-gray-700 mb-10 w-screen lg:max-w-5xl"
        id={`lesson${lesson.id}`}
        key={lesson.id}
        ref={scrollTo}
      >
        {/* Lesson info with title and week */}
        <section className="flex justify-between px-4">
          <div className="py-3">
            <h3>
              v {lesson.week} - Lektion {lesson.id}
            </h3>
            <h2>{lesson.subject}</h2>
          </div>
          <img
            src={expand ? "/collapseicon.svg" : "/expandicon.svg"}
            alt="collapse section icon"
          />
        </section>
        {/* Lesson description and links */}
        <section className={expand ? "block" : "hidden"}>
          {/* Description */}
          <div className="bg-gray-250 dark:bg-gray-600">
            <p className="px-4 py-3 md:col-count-2">{lesson.description}</p>
          </div>
          {/* Links */}
          <section className="px-4 pt-5 pb-1">
            {lesson.links.map(({ category, items }) => (
              <div className="flex flex-col items-start" key={category}>
                <div className="flex mb-3 w-full">
                  {/* Category title */}
                  <h4 className="pr-3">{category}</h4>
                  {/* Line on left side of category title */}
                  <div className="h-1px bg-gray-300 dark:bg-gray-600 flex-grow m-auto"></div>
                </div>
                {items.map(({ title, url }) => (
                  // Render each link with linkicon
                  <a
                    className="flex pb-4 text-purple-700 dark:text-teal-400 underline"
                    key={title}
                    href={url}
                  >
                    {title}
                    <div className="pl-3 inline self-center">
                      <img
                        src="/linkicon.svg"
                        alt="open link icon"
                        className="hidden dark:block"
                      ></img>
                      <img
                        src="/linkiconlight.svg"
                        alt="open link icon"
                        className="block dark:hidden"
                      ></img>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </section>
        </section>
      </article>
    </>
  );
};

export default LessonArticle;
