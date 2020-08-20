import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-gray-800 text-gray-300 ">
      <div className="container flex flex-col h-screen">
      <Head>
        <meta name="viewport" content="width=device-width"/>
        <title>Itiden Academy</title>
      </Head>

      <header>
        <img src="/logosm.svg"></img>
        <div className="bg-purple-700 absolute top-0 right-0" /* <-- inset*/>academy@itiden.se</div>
        <section className="">
          <img src="/itiden.svg" alt="itiden logo"></img>
          <h1 className="uppercase">Kursnamn - Hämtas från json</h1>
        </section>
      </header>

      <main className="flex-grow">
        <article className="bg-gray-700">
          <h3>vecka - lektion</h3>
          <h2 className="text-gray-200">Titel</h2>
          <p className="bg-gray-600">Här ska det finnas utbildningsmaterial...</p>
        </article>
      </main>

      <footer className="lg:flex bg-gray-900 text-gray-400 border-t border-purple-700">
        <section>
          <img src="/itidensm.svg" alt="itiden logo"></img>
          <h1 className="uppercase">Kursnamn - Hämtas från json</h1>
        </section>
        <section>
          <h3>Kursansvariga</h3>
          <a href="mailto:andreas@itiden.se">Andreas Bergqvist</a>
          <a href="mailto:filip@itiden.se">Filip Engberg</a>
        </section>
        <section>
          Adress
        </section>
        <section className="flex">
          <img src="/fb.svg"></img>
          <img src="/linkedin.svg"></img>
          <img src="/instagram.svg"></img>
        </section>
        <button>Light/Dark</button>
      </footer>
    </div>
    </div>
  )
}
