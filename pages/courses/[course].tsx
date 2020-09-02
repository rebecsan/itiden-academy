import Head from "next/head";
import { LessonsPage } from "../../components/Lessons";
import { getLessonData, getAllCourseIds } from "../../lib/getCourses";
import { GetStaticProps, GetStaticPaths } from "next";
import { Course } from "../../pages";

const CoursePage: React.FC<{ courseData: Course }> = ({ courseData }) => (
  <div className="container flex flex-col min-h-screen">
    <Head>
      <title>{courseData.title + " " + " itiden Academy"}</title>
    </Head>
    {courseData.lessons ? (
      <LessonsPage {...{ lessons: courseData.lessons }} />
    ) : (
      <div className="bg-gray-800 flex-grow m-auto p-32">Loading</div>
    )}
  </div>
);
export default CoursePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCourseIds();
  console.log(paths);
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
