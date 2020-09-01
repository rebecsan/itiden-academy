// import Head from "next/head";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
import { Lessons } from "../components/Lessons";
import { getCourseData, getAllCourseIds } from "../lib/getCourses";
import { GetStaticProps, GetStaticPaths } from "next";
import { HomeProps } from "../pages";

const Course: React.FC<HomeProps> = ({ allCoursesData }) => (
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

    {allCoursesData ? (
      <Lessons {...{ allCoursesData }} />
    ) : (
      <div className="bg-gray-800 flex-grow mx-auto">Loading</div>
    )}

    {/* <Footer {...{ allCoursesData }} /> */}
  </div>
);
export default Course;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCourseIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (params) => {
  const courseData = await getCourseData(params.id);
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
