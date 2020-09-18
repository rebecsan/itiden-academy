import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

const themeScript = `
(function () {
  var storageKey = "darkMode";
  var classNameDark = "dark-mode";
  var classNameLight = "light-mode";

  function setClassOnDocumentHtml(darkMode) {
    document.documentElement.classList.add(darkMode ? classNameDark : classNameLight);
    document.documentElement.classList.remove(darkMode ? classNameLight : classNameDark);
  }

  var localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentHtml(localStorageTheme);
  } else {
    // source of truth from document.body
    var isDarkMode = document.documentElement.classList.contains(classNameDark);
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
  }
})();
`;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }}></script>
        </Head>
        <body className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 font-document">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
