import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} role="banner" aria-label="Gameplayz hero">
      <div className={styles.dim} aria-hidden />
      <div className={styles.inner}>
        <h1 className={styles.mainHeading}>Gameplayz</h1>
        <h2 className={styles.quote}>
          The Future Of <span className={styles.highlight}>Esports</span> is
          here
        </h2>
        <p className={styles.cta}>Coming Soon</p>
        <div className={styles.scrollIndicator} aria-label="Scroll down">
          <svg
            className={styles.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
