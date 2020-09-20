// import Document, {
//   DocumentContext,
//   Html,
//   Head,
//   Main,
//   NextScript,
// } from "next/document";

// const themeScript = `
// (function () {
//   var storageKey = "darkMode";
//   var classNameDark = "mode-dark";
//   var classNameLight = "light-mode";

//   function setClassOnDocumentHtml(darkMode) {
//     document.documentElement.classList.add(darkMode ? classNameDark : classNameLight);
//     document.documentElement.classList.remove(darkMode ? classNameLight : classNameDark);
//   }

//   var localStorageTheme = null;
//   try {
//     localStorageTheme = localStorage.getItem(storageKey);
//   } catch (err) {}
//   var localStorageExists = localStorageTheme !== null;
//   if (localStorageExists) {
//     localStorageTheme = JSON.parse(localStorageTheme);
//   }

//   // Determine the source of truth
//   if (localStorageExists) {
//     // source of truth from localStorage
//     setClassOnDocumentHtml(localStorageTheme);
//   } else {
//     // Default to darkmode
//     setClassOnDocumentHtml("true")
//     var isDarkMode = true;
//     localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
//   }
// })();
// `;

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return initialProps;
//   }

//   render() {
//     return (
//       <Html>
//         <Head>
//           <script dangerouslySetInnerHTML={{ __html: themeScript }}></script>
//         </Head>
//         <body className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 font-document">
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

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
    document.body.classList.add(darkMode ? classNameDark : classNameLight);
    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
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
    console.log('Hämtar default från local storage')
    // source of truth from localStorage
    setClassOnDocumentHtml(localStorageTheme);
  } else {
    console.log('Kollar efter klass i body')
    console.log(document.body.classList)
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark);
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
        <body className="bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 font-document dark-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
