import type { AppProps } from "next/app";
// import Layout from "../components/Layout";
import ThemeProvider from "../lib/themeContext";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider {...pageProps}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
