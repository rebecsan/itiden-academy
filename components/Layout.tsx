import Head from "next/head";
import { Footer } from "../components/Footer";

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1"
      />
      <meta name="Description" content="List of courses from Itiden Academy" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto&display=swap"
        rel="stylesheet"
      />
      <title>itiden Academy</title>
    </Head>

    {children}

    <Footer />
  </div>
);
export default Layout;
