import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SafeBar</title>
        <meta name="description" content="SafeBar is brought to you by the Sexual Assault Center Nashville" />
        <link rel="icon" href="/sac-logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to SafeBar App
        </h1>
        <h2>This is the main page that is open to all who navigate to the app</h2>
      </main>
    </div>
  );
}
