import styles from "../styles/sidebar.module.css";

import "react-fontawesome";

export default function SideBar({ status }) {
  return status ? (
    <div>
      <section className={styles.container}>
        <details className={styles.menu}>
          <summary>Html</summary>
          <ul>
            {[123232, 2, 3, 4].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </details>
        <details className={styles.menu}>
          <summary>CSS</summary>
          <ul>
            {[1, 2, 3, 4].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </details>
        <details className={styles.menu}>
          <summary>Javascript</summary>
          <ul>
            {[1, 2, 3, 4].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </details>
        <details className={styles.menu}>
          <summary>Javascript</summary>
          <ul>
            {[1, 2, 3, 4].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </details>
        <details className={styles.menu}>
          <summary>Javascript</summary>
          <ul>
            {[1, 2, 3, 4].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </details>
      </section>
    </div>
  ) : (
    <></>
  );
}
