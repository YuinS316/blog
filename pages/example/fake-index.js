import styles from "../styles/Home.module.css";
import Link from "next/link";
import Router from "next/router";
import Navigation from "../components/navigation";

export default function Home() {
  function handleClick() {
    Router.push({
      pathname: "/test",
      query: {
        name: "hello~hello",
      },
    });
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/test">jump to test</Link>
          <button
            style={{
              height: "40px",
              borderRadius: "10px",
              fontSize: "1rem",
              color: "white",
              background: "#0070f3",
              cursor: "pointer",
              margin: "5vh",
              borderColor: "white",
              boxShadow: 0,
            }}
            onClick={handleClick}
          >
            another junp to test
          </button>
          <Link href="/example/introduce">jump to introduce</Link>
          <Link href="/blog">jump to blog</Link>
        </main>
      </div>
    </>
  );
}
