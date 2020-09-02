import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HomeProps } from "../pages";

const Layout: React.FC<HomeProps> = ({ courses: allCoursesData, children }) => (
  <div className="container flex flex-col min-h-screen">
    <Head>
      <meta name="viewport" content="width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <title>itiden Academy</title>
    </Head>

    <Header {...{ courses: allCoursesData }} />

    {children}

    <Footer {...{ courses: allCoursesData }} />
  </div>
);
export default Layout;
