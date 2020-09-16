import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { DarkModeProvider } from "../utils/themeContext";
import "../styles/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DarkModeProvider>
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  </DarkModeProvider>
);

export default MyApp;
