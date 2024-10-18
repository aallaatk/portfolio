import React, { useRef, useEffect, useState } from 'react';
import 'animate.css/animate.min.css';
import Header from "./Components/Header";
import Services from "./Sections/Services";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import AboutMe from "./Sections/AboutMe";
import Technologies from "./Sections/Technologies";
import Projects from './Sections/Projects';
import Testimonials from './Sections/Testimonials';
import Main from './Sections/Main';
import Footer from "./Sections/Footer";
import Skills from './Sections/Skills';
import Resume from './Sections/Resume';

const App: React.FC = () => {
  // Create references for each section
  const sectionRefs = {
    aboutMe: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    resume: useRef<HTMLDivElement>(null),
    technologies: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // State to track animated sections
  const [animatedSections, setAnimatedSections] = useState<Record<string, boolean>>({
    aboutMe: false,
    services: false,
    skills: false,
    resume: false,
    technologies: false,
    projects: false,
    testimonials: false,
    blog: false,
    contact: false,
  });

  // Define animations and durations for each section
  const animations: Record<string, { animation: string; duration: number }> = {
    aboutMe: { animation: "animate__fadeInUp", duration: 1.5 },
    services: { animation: "animate__fadeInRight", duration: 1.5 },
    skills: { animation: "animate__bounceIn", duration: 1.5 },
    resume: { animation: "animate__zoomIn", duration: 1.5 },
    technologies: { animation: "animate__slideInUp", duration: 1.5 },
    projects: { animation: "animate__slideInUp", duration: 1.5 },
    testimonials: { animation: "animate__fadeInRight", duration: 1.5 },
    blog: { animation: "animate__fadeInLeft", duration: 1.5 },
    contact: { animation: "animate__fadeInDown", duration: 1.5 },
  };

  useEffect(() => {
    const handleScroll = () => {
      // Iterate over each section ref
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        const section = ref.current;
        if (section) {
          const topPosition = section.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;

          // Trigger animation earlier at 85% of the viewport height
          if (topPosition < screenHeight * 0.85 && !animatedSections[key]) {
            const { animation, duration } = animations[key];
            section.classList.add("animate__animated", animation);
            section.style.animationDuration = `${duration}s`; // Set the animation duration
            section.style.opacity = "1"; // Ensure opacity is set for visibility
            // Update the animated state for the section
            setAnimatedSections((prev) => ({ ...prev, [key]: true }));
          }
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animatedSections]);

  return (
    <div>
      <Header
        aboutRef={sectionRefs.aboutMe}
        resumeRef={sectionRefs.resume}
        portfolioRef={sectionRefs.projects}
        blogRef={sectionRefs.blog}
        contactRef={sectionRefs.contact}
      />
      <div className="test">
        <Main />
      </div>
      <div ref={sectionRefs.aboutMe} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <AboutMe
          birthday="28/04/2001"
          phone="21375123"
          email="sleimiala@gmail.com"
          nationality="Tunisia"
          languages="English, French, Arabic"
          freelance="Available"
        />
      </div>
      <div ref={sectionRefs.services} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Services />
      </div>
      <div ref={sectionRefs.skills} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Skills />
      </div>
      <div ref={sectionRefs.resume} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Resume />
      </div>
      <div ref={sectionRefs.technologies} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Technologies />
      </div>
      <div ref={sectionRefs.projects} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Projects />
      </div>
      <div ref={sectionRefs.testimonials} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Testimonials />
      </div>
      <div ref={sectionRefs.blog} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Blog />
      </div>
      <div ref={sectionRefs.contact} style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
