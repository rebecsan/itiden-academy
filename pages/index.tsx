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
  <>
    <Header />
    <main className="flex-grow flex flex-col z-10 pt-64 max-w-5xl mx-auto">
      <h3 className="self-center text-3xl ">Våra kurser:</h3>
      {courses.map(({ courseId, title }) => (
        <Link href="[course]" as={`/${courseId}`} key={courseId}>
          <h3 className="p-16 underline">
            <a className="cursor-pointer text-teal-400">{title}</a>
          </h3>
        </Link>
      ))}
    </main>
  </>
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
