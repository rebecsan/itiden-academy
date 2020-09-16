import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html className="mode-dark">
        <Head />
        <body className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-document">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
