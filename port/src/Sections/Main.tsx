import React, { useState, useEffect } from 'react';


const Main: React.FC = () => {
  const [displayTextIndex, setDisplayTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayTextIndex((prevIndex) => (prevIndex + 1) % 2); // Cycle between 0 and 1 for web/mobile developer
        setIsAnimating(false);
      }, 500); // Match with the fade-out duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const texts = ['Web Developer', 'Mobile Developer']; // Alternating texts

  return (
    <section className="container-fluid p-3" id="main">
      <div className="row" style={{ display: 'inline-block' }}>
        <p>Hi, I'm <span>A</span>la<span>S</span>leimi</p>
        <div className="ani-container">
          <p className="static-text">Full Stack</p> {/* Displayed statically */}
          <p
            className={`ani-text ${isAnimating ? 'fade-out' : 'show'}`}
            style={{ '--text-length': texts[displayTextIndex].length } as React.CSSProperties} // Dynamic text length
          >
            {texts[displayTextIndex]} {/* Alternating text */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
