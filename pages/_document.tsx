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
      <Html>
        <Head />
        <body className="bg-gray-100 text-gray-600 font-document">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
