import fs from "fs";
import path from "path";
import { Course } from "../pages";

const coursesDirectory = path.join(process.cwd(), "courses");
const courseNames = fs.readdirSync(coursesDirectory);

export function getCoursesData(): Course[] {
  const allCoursesData = courseNames.map((courseName) => {
    // Use filename as courseId
    const courseId = courseName.replace(/\.json/, "");

    const fullPath = path.join(coursesDirectory, courseName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    return {
      courseId,
      title: jsonData.title,
      lessons: jsonData.lessons,
    };
  });
  return allCoursesData;
}

export function getAllCourseIds() {
  return courseNames.map((courseName) => {
    return {
      params: {
        id: courseName.replace(/\.json/, ""),
      },
    };
  });
}
