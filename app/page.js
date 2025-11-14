import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Faqs from "./components/Faqs";

export const metadata = {
  title: "Gameplayz - Esports Tournaments, Scrims & Team Platform",
  description:
    "Gameplayz is an esports platform where players join tournaments and scrims, build teams, and grow their esports profile. Organizers can host tournaments with automated brackets, payments, and match management.",
  keywords: [
    "esports",
    "esports tournaments",
    "bgmi tournaments",
    "valorant tournaments",
    "scrims",
    "team management",
    "gaming platform",
    "esports India",
    "tournament organizer tools",
    "paid scrims",
    "paid tournaments"
  ],
  authors: [{ name: "Gameplayz" }],
  openGraph: {
    title: "Gameplayz – Play Tournaments & Build Your Esports Profile",
    description:
      "Join esports tournaments, create teams, participate in scrims, or host events with automated brackets and payments.",
    url: "https://gameplayz.in",
    siteName: "Gameplayz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gameplayz – Esports Tournaments & Scrims",
    description:
      "Join tournaments, form teams, and build your esports career on Gameplayz.",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Features />
        <Faqs />
      </main>
      <Footer/>
    </>
  );
}
