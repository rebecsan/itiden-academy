import { Lesson } from "../pages";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const LessonArticle: React.FC<{
  initialExpand: boolean;
  lesson: Lesson;
}> = ({ initialExpand, lesson }) => {
  const [expand, setExpand] = useState(initialExpand);
  useEffect(() => {
    setExpand(initialExpand);
  }, [initialExpand]);

  const router = useRouter();
  const updateURL = (lessonId: number) => {
    // Remove previous query params and replace with new
    let currentPath = router.asPath;
    let splitPath = currentPath.split("?");
    let newPath = splitPath[0] + "?lesson=" + lessonId;
    router.push(newPath, undefined, {
      shallow: true,
    });
  };

  const scrollTo = (ref: HTMLElement) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <article
        onClick={() => {
          setExpand(!expand);
          // updateURL(lesson.id);
        }}
        className="bg-gray-700 mb-10"
        id={`${lesson.id}`}
        key={lesson.id}
        ref={scrollTo}
      >
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
        <div className={expand ? "block" : "hidden"}>
          <div className="bg-gray-600">
            <p className="px-4 py-3">{lesson.description}</p>
          </div>
          <section className="px-4 py-5">
            {lesson.links.map(({ category, items }) => (
              <div className="flex flex-col" key={category}>
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
        </div>
      </article>
    </>
  );
};

export default LessonArticle;
