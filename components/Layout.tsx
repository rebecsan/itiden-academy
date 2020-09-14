import Head from "next/head";
import { Footer } from "../components/Footer";
import { useTheme } from "../lib/themeContext";

const { theme } = useTheme();

const Layout: React.FC = ({ children }) => (
  <div
    className={
      `content-transition duration-200 ${theme}` +
      " pagelayout w-screen max-w-5xl mx-auto flex flex-col min-h-screen"
    }
  >
    <Head>
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1, initial-scale=1"
      />
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
