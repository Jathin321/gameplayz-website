import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>What is Gameplayz?</h2>
          <p className={styles.description}>
            All in one esports platform which helps esports tournament organizers to organize their tournaments smoothly and esports players to grow in their career by participating in the tournaments in our platform
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <div className={styles.image}></div>
        </div>
      </div>
    </section>
  );
}