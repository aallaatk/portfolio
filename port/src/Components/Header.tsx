import React, { RefObject, useState, useEffect } from 'react';
import logo from '../assets/logo.png';

interface HeaderProps {
  aboutRef: RefObject<HTMLDivElement>;
  resumeRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  blogRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ aboutRef, resumeRef, portfolioRef, blogRef, contactRef }) => {
  const [activeLink, setActiveLink] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const scrollToSection = (ref: RefObject<HTMLDivElement>, linkName: string) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(linkName);
  
    // Collapse the navbar menu on mobile after navigation
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse = document.querySelector('.navbar-collapse') as HTMLElement;
  
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Simulates toggler click to close menu
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
    <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? 'scrolled' : ''} p-2`}>
      <div className="container">
        <img src={logo} className="navbar-brand" style={{ width: "50px", height: "5Opx" }} alt="logo" /> 
        <p className='h1' style={{ color: 'white' }}>
          <span style={{ color: '#fec544' }}>A</span>la
        </p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-3">
            <li className="nav-item me-4">
              <button 
                className={`nav-link btn btn-link ${activeLink === 'about' ? 'active-link' : ''}`} 
                onClick={() => scrollToSection(aboutRef, 'about')}
              >
                ABOUT
              </button>
            </li>
            <li className="nav-item me-4">
              <button 
                className={`nav-link btn btn-link ${activeLink === 'resume' ? 'active-link' : ''}`} 
                onClick={() => scrollToSection(resumeRef, 'resume')}
              >
                RESUME
              </button>
            </li>
            <li className="nav-item me-4">
              <button 
                className={`nav-link btn btn-link ${activeLink === 'portfolio' ? 'active-link' : ''}`} 
                onClick={() => scrollToSection(portfolioRef, 'portfolio')}
              >
                PORTFOLIO
              </button>
            </li>
            <li className="nav-item me-4">
              <button 
                className={`nav-link btn btn-link ${activeLink === 'blog' ? 'active-link' : ''}`} 
                onClick={() => scrollToSection(blogRef, 'blog')}
              >
                BLOG
              </button>
            </li>
            <li className="nav-item me-4">
              <button 
                className={`nav-link btn btn-link ${activeLink === 'contact' ? 'active-link' : ''}`} 
                onClick={() => scrollToSection(contactRef, 'contact')}
              >
                CONTACT
              </button>
            </li>
            <li className='nav-link me-4'>
              |
            </li>
            <li className='nav-link me-4'>
              <i className={`fa-solid fa-phone ${activeLink === 'contact' ? 'active-link' : ''}`}></i> 
              <span className={`ms-2 ${activeLink === 'contact' ? 'active-link' : ''}`}> 
                +216 21 375 123
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
  );
};

export default Header;
