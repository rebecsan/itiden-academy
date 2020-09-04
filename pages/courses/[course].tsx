import Head from "next/head";
import { LessonArticle } from "../../components/Lesson";
import { getLessonData, getAllCourseIds } from "../../lib/getCourses";
import { GetStaticProps, GetStaticPaths } from "next";
import { Course } from "../../pages";
import { useRouter } from "next/router";

const CoursePage: React.FC<{ courseData: Course }> = ({ courseData }) => {
  const router = useRouter();
  const { lesson: lessonid } = router.query;

  return (
    <>
      <Head>
        <title>{courseData.title + " " + " itiden Academy"}</title>
      </Head>
      <main className="flex-grow mt-64 pt-32">
        {courseData.lessons ? (
          courseData.lessons.map((lesson) => (
            <LessonArticle
              key={lesson.id}
              {...{
                initialExpand: Number(lessonid) === lesson.id,
                lesson,
              }}
            />
          ))
        ) : (
          <div className="bg-gray-800 flex-grow m-auto p-32">No data</div>
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
