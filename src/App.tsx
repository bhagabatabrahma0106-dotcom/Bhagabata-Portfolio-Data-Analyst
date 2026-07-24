import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Loader from './components/layout/Loader';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Services from './components/sections/Services';
import Statistics from './components/sections/Statistics';
import SkillLab from './components/sections/SkillLab';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ParticlesBackground from './components/ui/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Finish loader after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (loading) return;
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certificates', 'services', 'skilllab', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      {/* Ambient background particles */}
      <ParticlesBackground />

      {/* Global ambient blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Page content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Services />
        <SkillLab />
        <Statistics />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
