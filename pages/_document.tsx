import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import DarkmodeContext, { DarkModeProvider } from "../utils/themeContext";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <DarkModeProvider>
        <DarkmodeContext.Consumer>
          {(darkModeContext) => {
            console.log("_document isDarkMode: " + darkModeContext.isDarkMode);
            return (
              <Html className={darkModeContext.isDarkMode ? "mode-dark" : ""}>
                <Head />
                <body className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-document">
                  <Main />
                  <NextScript />
                </body>
              </Html>
            );
          }}
        </DarkmodeContext.Consumer>
      </DarkModeProvider>
    );
  }
}

export default MyDocument;
