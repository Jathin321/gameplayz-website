"use client";

import { useState } from "react";
import styles from "./Faqs.module.css";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "When will the Gameplayz app be officially launched?",
      answer: "We are currently in development. Early-access users will get exclusive access before the public launch. Join the waitlist to be the first to try it."
    },
    {
      id: 3,
      question: "Is Gameplayz free to use?",
      answer: "Yes! Joining tournaments, creating teams, and using player features is free. Organizers may add entry fees to their tournaments, and players can pay securely through our platform."
    },
    {
      id: 4,
      question: "What games does Gameplayz support?",
      answer: "Gameplayz supports popular esports titles like BGMI, Valorant, Free Fire, CODM, and more. We'll continue to add additional games based on community demand."
    },
    {
      id: 5,
      question: "How do organizers host a tournament on Gameplayz?",
      answer: "Organizers can create a tournament in a few steps. Our platform automates registrations, entry fee collection, brackets, schedules, and result tracking to save time and avoid manual errors."
    },
    {
      id: 6,
      question: "How do players join tournaments?",
      answer: "Players can join individually or with their teams. Just browse events, select a tournament, register, pay the entry fee if required, and receive instant confirmation."
    },
    {
      id: 7,
      question: "Does Gameplayz handle payments and entry fees?",
      answer: "Yes. Gameplayz offers secure online payments. Tournament entry fees are paid directly on the platform, and organizers can track payment status in real time."
    },
    {
      id: 8,
      question: "Can organizers host both free and paid tournaments?",
      answer: "Yes. Gameplayz supports both free tournaments (no entry fee) and paid tournaments with secure payment handling."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className={styles.faqs} id="faqs">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Find answers to common questions about Gameplayz
          </p>
        </div>

        <div className={styles.faqsGrid}>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleAccordion(index)}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <svg
                  className={styles.icon}
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </div>
    </section>
  );
}