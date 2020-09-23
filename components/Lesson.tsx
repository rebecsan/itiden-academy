import { Lesson } from "../pages";
import LottieChevron from "./LottieChevron";
import DarkLottieChevron from "./DarkLottieChevron";

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
      <article className="bg-gray-200 dark:bg-gray-700 mb-10 w-screen lg:max-w-5xl">
        {/* Lesson info with title and week */}
        <section
          onClick={() => {
            onClick(lesson.id);
          }}
          id={`lesson${lesson.id}`}
          key={lesson.id}
          ref={scrollTo}
          className="flex justify-between px-4"
        >
          <div className="py-3">
            <h2>
              v {lesson.week} - Lektion {lesson.id}
            </h2>
            <h3>{lesson.subject}</h3>
          </div>
          {/* Animated collapse/expand icon */}
          <div className="self-center hidden dark:block">
            <LottieChevron expand={expand} />
          </div>
          <div className="self-center dark:hidden">
            <DarkLottieChevron expand={expand} />
          </div>
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
                {/* Render each link with linkicon */}
                {items.map(({ title, url }) => (
                  <a
                    className="flex pb-4 text-purple-700 dark:text-teal-400 underline"
                    key={title}
                    href={url}
                  >
                    {title}
                    {/* Linkicon */}
                    <div className="pl-3 inline self-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current text-gray-350 dark:text-gray-500"
                      >
                        <path d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z" />
                      </svg>
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
