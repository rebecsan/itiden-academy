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

      <header className="flex flex-wrap justify-between px-4">
        <div className="flex w-1/2">
          <img className="flex-grow-0" src="/logosm.svg"></img>
        </div>
        <div className="flex w-1/2">
          <div className="bg-purple-700 w-48 flex mt-5 h-6 py-1 px-6 rounded-full"><span className="self-center">academy@itiden.se</span></div>
        </div>
        <section className="w-full py-40 md:hidden">
          <img src="/itiden.svg" alt="itiden logo"></img>
          <h1 className="uppercase">Kursnamn - Hämtas från json</h1>
        </section>
      </header>

      <main className="flex-grow">
        <article className="bg-gray-700">
          <h3 className="px-4">vecka - lektion</h3>
          <h2 className="text-gray-200 px-4">Titel</h2>
          <p className="bg-gray-600 px-4">Här ska det finnas utbildningsmaterial...</p>
        </article>
      </main>

      <footer className="lg:flex justify-between bg-gray-900 text-gray-400 border-t border-purple-700">
        <section className="px-4">
          <img src="/itidensm.svg" alt="itiden logo"></img>
          <h1 className="uppercase">Kursnamn - Hämtas från json</h1>
        </section>
        <section className="px-4">
          <h3>Kursansvariga</h3>
          <a href="mailto:andreas@itiden.se">Andreas Bergqvist</a>
          <a href="mailto:filip@itiden.se">Filip Engberg</a>
        </section>
        <section className="px-4">
          Adress
        </section>
        <section className="flex px-4">
          <img src="/fb.svg"></img>
          <img src="/linkedin.svg"></img>
          <img src="/instagram.svg"></img>
        </section>
        <button className="px-4">Light/Dark</button>
      </footer>
    </div>
    </div>
  )
}
