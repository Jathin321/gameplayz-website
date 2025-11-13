import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Gameplayz</h3>
            <p className={styles.tagline}>
              The ultimate esports platform for players and organizers
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Platform</h4>
              <a href="#tournaments" className={styles.link}>Tournaments</a>
              <a href="#features" className={styles.link}>Features</a>
              <a href="#about" className={styles.link}>About</a>
              <a href="#pricing" className={styles.link}>Pricing</a>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Support</h4>
              <a href="#help" className={styles.link}>Help Center</a>
              <a href="#contact" className={styles.link}>Contact</a>
              <a href="#faq" className={styles.link}>FAQ</a>
              <a href="#terms" className={styles.link}>Terms</a>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Community</h4>
              <a href="#discord" className={styles.link}>Discord</a>
              <a href="#twitter" className={styles.link}>Twitter</a>
              <a href="#instagram" className={styles.link}>Instagram</a>
              <a href="#youtube" className={styles.link}>YouTube</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Gameplayz. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#twitter" className={styles.socialLink} aria-label="Twitter">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="#discord" className={styles.socialLink} aria-label="Discord">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="#instagram" className={styles.socialLink} aria-label="Instagram">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </a>
            <a href="#youtube" className={styles.socialLink} aria-label="YouTube">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}