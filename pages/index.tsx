import Link from "next/link";
import { getCoursesData } from "../lib/getCourses";
import { GetStaticProps } from "next";

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
  <main className="m-auto p-32">
    <h2>Våra kurser</h2>
    {courses.map(({ courseId, title }) => (
      <Link href="courses/[course]" as={`/courses/${courseId}`} key={courseId}>
        <a className="text-grey-600">{title}</a>
      </Link>
    ))}
  </main>
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
