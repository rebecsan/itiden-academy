// import Head from "next/head";
import Link from "next/link";
// import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
// import { Lessons } from "../components/Lessons";
import { getCoursesData } from "../lib/getCourses";
import { GetStaticProps } from "next";

export interface Course {
  courseId: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: number;
  week: number;
  subject: string;
  description: string;
  links: Links[];
}

export interface Links {
  category: string;
  items: Items[];
}

export interface Items {
  title: string;
  url: string;
}
export interface HomeProps {
  allCoursesData: Course[];
}

const Home: React.FC<HomeProps> = ({ allCoursesData }) => (
  <main className="m-auto p-32">
    <h2>Våra kurser</h2>
    {allCoursesData.map(({ courseId, title }) => (
      <Link href={courseId} key={courseId}>
        <a className="text-grey-600">{title}</a>
      </Link>
    ))}
  </main>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allCoursesData = await getCoursesData();
  return {
    props: {
      allCoursesData,
    },
  };
};
