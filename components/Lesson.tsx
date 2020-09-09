import { Lesson } from "../pages";

export const LessonArticle: React.FC<{
  lesson: Lesson;
  expand: boolean;
  onClick(id: number): void;
}> = ({ lesson, expand, onClick }) => {
  // Scroll to expanded lesson
  const scrollTo = (ref: HTMLElement) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <article
        onClick={() => {
          onClick(lesson.id);
        }}
        className="bg-gray-700 mb-10 'scroll-margin-top': '4rem'"
        id={`lesson${lesson.id}`}
        key={lesson.id}
        ref={scrollTo}
        // style={{ "scroll-margin-top": "4rem" }}
      >
        {/* Lesson info with title and week */}
        <section className="flex justify-between px-4">
          <div className="py-3">
            <h3>
              v {lesson.week} - Lektion {lesson.id}
            </h3>
            <h2 className="text-gray-200">{lesson.subject}</h2>
          </div>
          <img
            src={expand ? "/collapseicon.svg" : "/expandicon.svg"}
            alt="collapse section icon"
          />
        </section>
        {/* Lesson description and links */}
        <section className={expand ? "block" : "hidden"}>
          {/* Description */}
          <div className="bg-gray-600">
            <p className="px-4 py-3 md:col-count-2">{lesson.description}</p>
          </div>
          {/* Links */}
          <section className="px-4 py-5">
            {lesson.links.map(({ category, items }) => (
              <div className="flex flex-col" key={category}>
                <div className="flex mb-3">
                  {/* Category title */}
                  <h4 className="pr-3">{category}</h4>
                  {/* Line on left side of category title */}
                  {/* <div className=" flex flex-col justify-center"> */}
                  <div className="decorationLine h-1px bg-gray-600 flex-grow m-auto"></div>
                  {/* </div> */}
                </div>
                {items.map(({ title, url }) => (
                  //
                  <a
                    className="flex pb-4  text-teal-400 underline;"
                    key={title}
                    href={url}
                  >
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
        </section>
      </article>
    </>
  );
};

export default LessonArticle;
