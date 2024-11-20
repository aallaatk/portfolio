import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Main: React.FC = () => {
  // Create a ref to access the DOM element where the typing effect will be applied
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Create an instance of Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [ 'Web Developer', 'Mobile Developer'], // Strings to type out
      typeSpeed: 50,  // Speed of typing
      backSpeed: 30,  // Speed of backspacing
      backDelay: 1500, // Delay before starting to backspace
      startDelay: 500, // Delay before starting to type
      loop: true,      // Whether to loop the typing animation
      showCursor: true, // Whether to display a blinking cursor
    });

    // Cleanup function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="container-fluid p-3" id="main">
      <div className="row">
        <p className="intro-text">
          Hi, I'm <span>A</span>la <span>S</span>leimi <br />
          <span ref={typedElement}></span>
        </p>
      </div>
    </section>
  );
};

export default Main;
