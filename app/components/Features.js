"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Features.module.css";

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: "🏆",
      title: "Tournament Management",
      description: "Powerful tools for organizers to create, manage, and run tournaments seamlessly with automated brackets and scoring.",
      color: "#A143F4"
    },
    {
      id: 2,
      icon: "⚔️",
      title: "Scrims",
      description: "Practice and improve with organized scrim matches. Find teams, schedule sessions, and track your performance.",
      color: "#e100ff"
    },
    {
      id: 3,
      icon: "👥",
      title: "Team Collaboration",
      description: "Built-in team management with chat, scheduling, strategy planning, and performance analytics.",
      color: "#A143F4"
    },
    {
      id: 4,
      icon: "📊",
      title: "Build Your Profile",
      description: "Showcase your skills, achievements, and statistics. Create a professional esports portfolio that stands out.",
      color: "#e100ff"
    },
    {
      id: 5,
      icon: "📈",
      title: "Leaderboard & Rankings",
      description: "Track your progress with real-time rankings. Compete globally and climb the leaderboards in your favorite games.",
      color: "#A143F4"
    },
    {
      id: 6,
      icon: "🏢",
      title: "Organizer Spaces",
      description: "Dedicated workspace for organizers with analytics, participant management, and promotional tools.",
      color: "#e100ff"
    },
    {
      id: 7,
      icon: "🔍",
      title: "Explore & Discovery",
      description: "Players find teams, teams discover talent, organizers get quality registrations. Smart matching for everyone.",
      color: "#A143F4"
    },
    {
      id: 8,
      icon: "🛡️",
      title: "Secure & Fair Play",
      description: "Advanced anti-cheat systems, dispute resolution, and fair play enforcement to maintain competitive integrity.",
      color: "#e100ff"
    }
  ];

  const navigate = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    if (direction === 'next') {
      setActiveIndex((prev) => (prev + 1) % features.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    }
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const total = features.length;
    const normalizedDiff = ((diff % total) + total) % total;
    
    if (normalizedDiff === 0) return 'active';
    if (normalizedDiff === 1) return 'next';
    if (normalizedDiff === 2) return 'farNext';
    if (normalizedDiff === total - 1) return 'prev';
    if (normalizedDiff === total - 2) return 'farPrev';
    return 'hidden';
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      navigate('next');
    }
    if (isRightSwipe) {
      navigate('prev');
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeIndex, isAnimating]);

  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Powerful Features</h2>
          <p className={styles.subtitle}>
            Everything you need to succeed in competitive esports
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={() => navigate('prev')}
            disabled={isAnimating}
            aria-label="Previous feature"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div 
            ref={containerRef}
            className={styles.carouselContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {features.map((feature, index) => {
              const position = getCardPosition(index);
              
              return (
                <div 
                  key={feature.id} 
                  className={`${styles.card} ${styles[position]}`}
                  style={{ '--feature-color': feature.color }}
                  onClick={() => {
                    if (position === 'next' || position === 'farNext') navigate('next');
                    if (position === 'prev' || position === 'farPrev') navigate('prev');
                  }}
                >
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{feature.icon}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                  <div className={styles.cardGlow}></div>
                </div>
              );
            })}
          </div>

          <button 
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={() => navigate('next')}
            disabled={isAnimating}
            aria-label="Next feature"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className={styles.indicators}>
          {features.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.indicatorActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.swipeHint}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6M9 18l-6-6 6-6"/>
          </svg>
          <span className={styles.hintText}>Swipe to navigate</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6M15 6l6 6-6 6"/>
          </svg>
        </div>
      </div>
    </section>
  );
}