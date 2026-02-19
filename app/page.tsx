import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="content-layer">
      <JsonLd />
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
