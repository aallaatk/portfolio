import { useEffect, useState } from 'react';
import Title from '../Components/Title';
import EducationItem from '../Components/EducationItem';

function Resume() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        if (window.pageYOffset >= sectionTop - 50) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container mt-5' id='resume'>
        <div className="row">
            <Title title={"RESUME"} />
        </div>
        <div className="row mt-5">
            <div className="col-sm-6 mt-3">
                <div className="d-flex align-items-center section" id="education">
                    <i className="fa-solid fa-school" style={{color:'#fec544', fontSize:'35px', marginRight: '25px'}}></i>
                    <h2 style={{color:'white'}}>Education</h2>
                </div>
                <div className="experience mt-4">
                <div className="education-bar mt-4">
                <EducationItem 
                      title={'Master in E-Business'} 
                      duration={'Current'} 
                      institution={'ESEN'} 
                      description={'National license diploma in e-business at ESEN (Higher School of Digital Economy, University of Manouba, Tunis, Tunisia)'} 
                    />
                    <EducationItem 
                      title={'License in E-Business'} 
                      duration={'2020-2024'} 
                      institution={'ESEN'} 
                      description={'National license diploma in e-business at ESEN (Higher School of Digital Economy, University of Manouba, Tunis, Tunisia)'} 
                    />
                    <EducationItem 
                      title={'Bachelor of Computer Science'} 
                      duration={'2019-2020'} 
                      institution={'Lycee Hamida Bakir'} 
                      description={'Completed a Bachelor of Computer Science at Lycee Hamida Bakir, gaining foundational knowledge in computer science and related disciplines.'} 
                    />
                </div>
                </div>
            </div>
            <div className="col-sm-6 mt-3">
                <div className="d-flex align-items-center section" id="certifications">
                    <i className="fa-solid fa-award" style={{color:'#fec544', fontSize:'35px', marginRight: '25px'}}></i>
                    <h2 style={{color:'white'}}>Certifications</h2>
                </div>
                <div className="education mt-4">
                      <div className="education-bar mt-4">
                    <EducationItem 
                      title="The Fundamentals of Digital Marketing" 
                      institution="by Google Digital Garage" 
                      description="An introductory course on digital marketing strategies and tools."
                    />
                    <EducationItem 
                      title="Introduction to Data Studio" 
                      institution="by Google Analytics Academy" 
                      description="A beginner's guide to creating and managing data visualizations in Google Data Studio."
                    />
                    <EducationItem 
                      title="Google Analytics for Beginners" 
                      institution="by Google Analytics Academy" 
                      description="A foundational course on understanding and utilizing Google Analytics for tracking and analyzing website traffic."
                    />
                    <EducationItem 
                      title="Advanced Google Analytics" 
                      institution="by Google Analytics Academy" 
                      description="An advanced course on leveraging Google Analytics for deeper insights and data-driven decision making."
                    />
                </div>
                </div>
            </div>
        </div>
        <div className="sidebar">
            <div className={`dot ${activeSection === 'education' ? 'active' : ''}`}></div>
            <div className={`dot ${activeSection === 'certifications' ? 'active' : ''}`}></div>
        </div>
    </div>
  );
}

export default Resume;
