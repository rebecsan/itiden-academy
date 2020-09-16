import type { AppProps } from "next/app";
import Layout from "../components/Layout";
// import { ThemeProvider } from "../utils/themeContext";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  // <ThemeProvider>
  <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
  // </ThemeProvider>
);

export default MyApp;
