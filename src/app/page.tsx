import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Course from "@/components/Course";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-eerie_black">
      <Header />
      <Hero />
      <About />
      <Course />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}