import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="content-layer">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </main>
  );
}
