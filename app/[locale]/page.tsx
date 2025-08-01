import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Ornament from "@/components/Ornament";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 py-8">
        <div className="portfolio-card bg-white border border-gray-200 shadow-lg">
          <Header />
          <div className="content p-12">
            <About />
            <Skills />
            <Ornament />
            <Projects />
            <Ornament />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
