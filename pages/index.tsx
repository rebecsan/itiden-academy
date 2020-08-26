import Head from 'next/head'
import Header from '../components/Header'
import Footer from  '../components/Footer'
import Lessons from '../components/Lessons'
import {getCoursesData} from '../lib/getCourses'
import {GetStaticProps} from 'next'

export interface Course {
  courseId: string,
  title: string,
  lessons: Lesson[]
}

export interface Lesson {
  id: number,
  week: number,
  subject: string,
  description: string,
  links: Links[]
}

export interface Links {
  category: string,
  title: string,
  url: string
}
export interface HomeProps {
  Courses: Course[]
}

export default function Home({allCoursesData} : {allCoursesData: Course[]}) {

  return (
    <div className="bg-gray-800 text-gray-300 ">
      <div className="container flex flex-col h-screen">
        <Head>
          <meta name="viewport" content="width=device-width"/>
          <title>Itiden Academy</title>
        </Head>

        <Header {...{allCoursesData}}/>

        {allCoursesData ? (
        <Lessons {...{allCoursesData}} />
        ) :
        <div className="bg-gray-800 flex-grow mx-auto">Loading</div>}
        
        <Footer/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const allCoursesData = {Courses: [{id: '1', title: '2'}]}
  // return {props: {allCoursesData}}
  const allCoursesData = await getCoursesData()
  return {
    props: {
      allCoursesData
    }
  }
}