import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import { format } from "date-fns";
import { it } from "date-fns/locale";

import json from "./../mm.json";
const BLOG = json.rss.channel;

const createLink = (url) => url.replace("http://localhost:8888/wordpress", "");

const formatDate = (date) =>
  format(new Date(date), "eeee dd MMMM yyyy, HH:mm", {
    locale: it,
  });

const getTags = (list) =>
  list
    .filter((e) => e._domain === "post_tag")
    .map((e, i) => (
      <span className={styles.tag} key={i}>
        {e.__cdata}
      </span>
    ));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{BLOG.title}</title>
        <meta name="description" content={BLOG.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{BLOG.title}</h1>

        <p className={styles.description}>{BLOG.description}</p>

        <div className={styles.grid}>
          {BLOG.item
            .map((e, i) => (
              <div className={styles.card} key={e.post_id.__text}>
                <Link href={createLink(e.link)} passHref={true}>
                  <a>
                    <h2>{e.title.__cdata} &rarr;</h2>
                  </a>
                </Link>
                <p>{formatDate(e.pubDate)}</p>
                <p>
                  <small>Tags: {getTags(e.category)}</small>
                </p>
              </div>
            ))
            .reverse()}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
