import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Features from "./components/Features";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Features />
      </main>
      <Footer/>
    </>
  );
}
