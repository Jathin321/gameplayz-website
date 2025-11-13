import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        {/* add other sections/components below as needed */}
      </main>
      <Footer/>
    </>
  );
}
