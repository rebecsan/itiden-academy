import fs from "fs";
import path from "path";
import { Course } from "../pages";

// Get all filenames from courses-folder
const coursesDirectory = path.join(process.cwd(), "courses");
const courseNames = fs.readdirSync(coursesDirectory);

export function getCoursesData(): Course[] {
  const allCoursesData = courseNames.map((courseName) => {
    // Use filename as courseId
    const courseId = courseName.replace(/\.json$/, "");
    return getLessonData(courseId);
  });
  return allCoursesData;
}

// Get data for specific course
export function getLessonData(courseId: string): Course {
  // Get JSON from coursefile
  const courseFileName = courseId + ".json";
  const fullPath = path.join(coursesDirectory, courseFileName);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  // Parse data and return object
  const jsonData = JSON.parse(fileContents);
  return {
    courseId,
    title: jsonData.title,
    lessons: jsonData.lessons,
  };
}

// Get courseIds and return as object with params for getStaticPaths function
export function getAllCourseIds() {
  return courseNames.map((courseName) => {
    return {
      params: {
        course: courseName.replace(/\.json$/, ""),
      },
    };
  });
}
