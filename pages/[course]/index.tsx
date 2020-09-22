import Head from "next/head";
import { Header } from "../../components/Header";
import { LessonArticle } from "../../components/Lesson";
import { getLessonData, getAllCourseIds } from "../../lib/getCourses";
import { GetStaticProps, GetStaticPaths } from "next";
import { Course } from "..";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CoursePage: React.FC<{ courseData: Course }> = ({ courseData }) => {
  const router = useRouter();
  const { lesson: lessonid } = router.query;
  if (lessonid == undefined && typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  function handleLessonClick(id: number) {
    // Remove query param and if id != query.lesson: replace with new
    let currentPath = router.asPath;
    let splitPath = currentPath.split("?");
    let noQueryPath = splitPath[0];
    let newPath = noQueryPath + "?lesson=" + id;
    router.query.lesson !== id.toString()
      ? router.push(newPath, undefined, {
          shallow: true,
        })
      : router.push(noQueryPath, undefined, {
          shallow: true,
        });
  }

  return (
    <>
      <Head>
        <title>{courseData.title + " - itiden Academy"}</title>
      </Head>
      <Header {...{ subTitle: courseData.courseId }} />
      <main className="flex-grow z-10 pt-64 max-w-5xl mx-auto">
        {courseData.lessons ? (
          courseData.lessons.map((lesson) => (
            <LessonArticle
              key={lesson.id}
              onClick={handleLessonClick}
              {...{
                expand: Number(lessonid) === lesson.id,
                lesson,
              }}
            />
          ))
        ) : (
          <div className="bg-gray-100 dark:bg-gray-800 flex-grow m-auto p-32">
            No data
          </div>
        )}
      </main>
    </>
  );
};
export default CoursePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCourseIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // TODO : Why are params possibly undefined?
  if (params === undefined) {
    return {
      props: {
        courseData: "No course data",
      },
    };
  }
  const courseData = await getLessonData(params.course as string);
  return {
    props: {
      courseData,
    },
  };
};
