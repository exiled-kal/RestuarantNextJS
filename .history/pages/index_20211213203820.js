import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cake Restuarant in Bay Area</title>
        <meta name="description" content="Best Cake in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      home pages
      <Image src="/img/" alt="" />
    </div>
  );
}
