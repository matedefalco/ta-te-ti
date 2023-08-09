import { useScore } from "../../ScoresContext";

import styles from "./score.module.css";

export default function Score() {
  const { scores } = useScore();

  return (
    <section className={styles.section}>
      <p className={styles.p}>SCORE</p>
      <div className={styles.div}>
        <div className={styles.flex}>
          <p className={styles.text}>Player X: </p>
          <p className={styles.bold}>{scores.X}</p>
        </div>
        <div className={styles.flex}>
          <p className={styles.text}>Player O: </p>
          <p className={styles.bold}>{scores.O}</p>
        </div>
      </div>
    </section>
  );
}
