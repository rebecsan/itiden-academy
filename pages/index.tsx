import Link from "next/link";
import { getCoursesData } from "../lib/getCourses";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { Header } from "../components/Header";

export type Course = {
  courseId: string;
  title: string;
  lessons: Lesson[];
};

export type Lessons = {
  lessons: Lesson[];
};

export type Lesson = {
  courseId: string;
  id: number;
  week: number;
  subject: string;
  description: string;
  links: Links[];
};

export type Links = {
  category: string;
  items: Items[];
};

export type Items = {
  title: string;
  url: string;
};
export type HomeProps = {
  courses: Course[];
};

const Home: React.FC<HomeProps> = ({ courses: courses }) => (
  <Layout>
    <Header />
    <main className="flex flex-col items-center m-auto p-32 z-10">
      <h2 className="center text-3xl">Våra kurser:</h2>
      {courses.map(({ courseId, title }) => (
        <Link
          href="courses/[course]"
          as={`/courses/${courseId}`}
          key={courseId}
        >
          <h2 className="p-20 underline ">
            <a className="text-grey-600 cursor-pointer">{title}</a>
          </h2>
        </Link>
      ))}
    </main>
  </Layout>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allCourses = await getCoursesData();
  return {
    props: {
      courses: allCourses,
    },
  };
};
