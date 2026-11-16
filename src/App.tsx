import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Loader from './components/layout/Loader';
import PremiumStudio from './components/sections/PremiumStudio';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import PremiumLearning from './components/sections/PremiumLearning';
import Services from './components/sections/Services';
import SkillLab from './components/sections/SkillLab';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import MessengerWidget from './components/layout/MessengerWidget';
import ParticlesBackground from './components/ui/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Keep the loading transition brief; avoid an artificial wait for reduced-motion users.
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => setLoading(false), prefersReduced ? 0 : 650);
    return () => clearTimeout(timer);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    if (loading) return;
    const sections = [
      'home',
      'highlights',
      'projects',
      'experience',
      'skills',
      'about',
      'learning',
      'services',
      'skilllab',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [loading]);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden selection:bg-primary/20 selection:text-white">
      {/* Ambient background particles */}
      <ParticlesBackground />

      {/* Global ambient glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Page content in strategic studio sequence */}
      <main className="relative z-10">
        {/* Section 1: Hero & Introduction */}
        <PremiumStudio />

        {/* Section 4: Professional Experience */}
        <Experience />

        {/* Section 5: Technical Capabilities & Skills */}
        <Skills />

        {/* Section 6: Education & Qualifications */}
        <About />

        {/* Section 7: Professional Development & Certifications */}
        <PremiumLearning />

        {/* Section 8: Services */}
        <Services />

        {/* Section 9: Interactive Skill Lab */}
        <SkillLab />

        {/* Section 10: Contact & Closing Studio Invitation */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Messenger & Conversation Widget (Inspired by onlines.com.ar) */}
      <MessengerWidget />
    </div>
  );
}

export default App;
