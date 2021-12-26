import Head from "next/head";
import { useRouter } from "next/router";
import parse from "html-react-parser";

import styles from "./../../../../styles/Home.module.css";

import json from "./../../../../mm.json";
const BLOG = json.rss.channel;
const POSTS = json.rss.channel.item;

const mock = {
  title: { __cdata: "" },
  encoded: [{ __cdata: "" }],
};

const getText = (content) => parse(content, { trim: true });

export default function Article({ ...props }) {
  const q = useRouter().query;

  const current =
    POSTS.filter((e) =>
      e.link.includes(`/${q.year}/${q.month}/${q.day}/${q.title}`)
    )[0] || mock;

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {BLOG.title} - {current.title.__cdata}
        </title>
        <meta name="description" content={BLOG.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{BLOG.title}</h1>
        <p className={styles.description}>{BLOG.description}</p>
        <div className={styles.grid}>
          <h3>{current.title.__cdata}</h3>
          {current.encoded.map((e, i) => (
            <div key={i}>{getText(e.__cdata)}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const shorten = (url) =>
    url.replace("http://localhost:8888/wordpress", "").split("/");

  const paths = POSTS.map((e) => ({
    params: {
      year: shorten(e.link)[1],
      month: shorten(e.link)[2],
      day: shorten(e.link)[3],
      title: shorten(e.link)[4],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
