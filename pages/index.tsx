import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Itiden Academy</title>
      </Head>

      <header>
        <div>academy@itiden.se</div>
        <section>
          <img src="/itiden.svg" alt="itiden logo"></img>
          <h1>Kursnamn - Hämtas från json</h1>
        </section>
      </header>

      <main>
        <article>
          <h3>vecka - lektion</h3>
          <h2>Titel</h2>
          <p>Här ska det finnas utbildningsmaterial...</p>
        </article>
      </main>

      <footer>
        <section>
          <img src="/itiden.svg" alt="itiden logo"></img>
          <h1>Kursnamn - Hämtas från json</h1>
        </section>
        <section>
          <h3>Kursansvariga</h3>
          <a href="mailto:andreas@itiden.se">Andreas Bergqvist</a>
          <a href="mailto:filip@itiden.se">Filip Engberg</a>
        </section>
        <section>
          Adress
        </section>
        <section>
          <img src="/fb.svg"></img>
          <img src="/linkedin.svg"></img>
          <img src="/instagram.svg"></img>
        </section>
      </footer>
    </div>
  )
}
