// import Head from "next/head";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
import { Lessons } from "../components/Lessons";
import { getLessonData, getAllCourseIds } from "../lib/getCourses";
import { GetStaticProps, GetStaticPaths } from "next";
import { HomeProps } from "../pages";

const Course: React.FC<HomeProps> = ({ courses: courses }) => (
  <div className="container flex flex-col min-h-screen">
    {/* <Head>
      <meta name="viewport" content="width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <title>Itiden Academy</title>
    </Head> */}

    {/* <Header {...{ allCoursesData }} /> */}

    {courses ? (
      <Lessons {...{ courses: courses }} />
    ) : (
      <div className="bg-gray-800 flex-grow mx-auto">Loading</div>
    )}

    {/* <Footer {...{ allCoursesData }} /> */}
  </div>
);
export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCourseIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  if (params === undefined) {
    return { props: {} };
  }
  const courseData = await getLessonData(params.course as string);
  return {
    props: {
      courseData,
    },
  };
};

// export interface Course {
//   courseId: string;
//   title: string;
//   lessons: Lesson[];
// }

// export interface Lesson {
//   id: number;
//   week: number;
//   subject: string;
//   description: string;
//   links: Links[];
// }

// export interface Links {
//   category: string;
//   items: Items[];
// }

// export interface Items {
//   title: string;
//   url: string;
// }
// export interface HomeProps {
//   allCoursesData: Course[];
// }
