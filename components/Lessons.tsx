// import {getCoursesData} from '../lib/getCourses'
// import {GetStaticProps} from 'next'

import { Course } from "../pages"

export default function Lessons({allCoursesData} : {allCoursesData: Course[]}) {

  return (
    <>
      <main className="bg-gray-800 flex-grow">
        {allCoursesData.map(({courseId, title, lessons}) => (
          console.log(lessons.flat(3))
          // lessons.map(({id, week, subject, description, links}) => (
            // <article className="bg-gray-700" key={id}>
            //     <h3 className="px-4">{week}</h3>
            //     <h2 className="text-gray-200 px-4">{subject}</h2>
            //     <p className="bg-gray-600 px-4">{description}</p>
            // </article>
          //   links.map(({category, title, url}) => (console.log('m')))
          // ))
  //         <article className="bg-gray-700" key={id}>
  //         <h3 className="px-4">{week}</h3>
  //         <h2 className="text-gray-200 px-4">{subject}</h2>
  //         <p className="bg-gray-600 px-4">{description}</p>
  // </article>  
        ))}
        
      </main>
    </>
  )
}

// {allPostsData.map(({ id, date, title }) => (
//   <li className={utilStyles.listItem} key={id}>
//     {title}
//     <br />
//     {id}
//     <br />
//     {date}
//   </li>