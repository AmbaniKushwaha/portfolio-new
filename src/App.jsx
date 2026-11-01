import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
// import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { AllProjects } from "@/pages/AllProjects";
import { ScrollToTop } from "@/components/ScrollToTop";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
