import { Lesson } from "../pages";
import LottieChevron from "./LottieChevron";
import DarkLottieChevron from "./DarkLottieChevron";
import LinkIcon from "./LinkIcon";
import { motion, AnimatePresence } from "framer-motion";

export const LessonArticle: React.FC<{
  lesson: Lesson;
  expand: boolean;
  onClick(id: number): void;
}> = ({ lesson, expand, onClick }) => {
  // // Scroll to expanded lesson
  // const scrollTo = (ref: HTMLElement) => {
  //   if (ref) {
  //     ref.scrollIntoView({ behavior: "smooth", block: "nearest" });
  //   }
  // };

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      height: "auto",
      transition: {
        when: "afterChildren",
        type: "tween",
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      y: 0,
      opacity: 0,
      height: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <article
        className="bg-gray-200 dark:bg-gray-700 mb-10 w-screen lg:max-w-5xl"
        id={`lesson${lesson.id}`}
        key={lesson.id}
        // ref={scrollTo}
      >
        {/* Lesson info with title and week */}
        <section
          onClick={() => {
            onClick(lesson.id);
          }}
          className="flex justify-between px-4 cursor-pointer"
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
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          {expand ? (
            <motion.section
              key={lesson.id}
              style={{ overflow: "hidden" }}
              variants={variants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Description */}
              <div className="bg-gray-250 dark:bg-gray-600">
                <section
                  className="px-4 py-3 md:w-4/5"
                  dangerouslySetInnerHTML={{ __html: lesson.description }}
                >
                  {/* {lesson.description} */}
                </section>
              </div>
              {/* Links */}
              <section className="px-4 pt-1 pb-1">
                {lesson.links.map(({ category, items }) => (
                  <div className="flex flex-col items-start" key={category}>
                    <div className="flex mb-3 mt-4 w-full">
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
                          <LinkIcon />
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
              </section>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </article>
    </>
  );
};

export default LessonArticle;
