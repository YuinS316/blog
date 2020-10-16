import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Tags from "./tags";

const name = "Cat Person";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
  leftTitle,
  leftId,
  rightTitle,
  rightId,
}) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Tags
            leftTitle={leftTitle}
            leftId={leftId}
            rightTitle={rightTitle}
            rightId={rightId}
          />
        </div>
      )}
    </div>
  );
}
