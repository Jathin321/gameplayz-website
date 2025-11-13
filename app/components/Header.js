"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Gameplayz</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav
        className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <a href="#home" className={styles.mobileNavLink} onClick={closeMobileMenu}>Home</a>
        <a href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>About</a>
        <a href="#features" className={styles.mobileNavLink} onClick={closeMobileMenu}>Features</a>
        <a href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</a>
      </nav>
    </header>
  );
}