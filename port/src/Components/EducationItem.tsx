import { useState } from "react";

interface EducationItemProps {
  title: string;
  duration?: string;
  institution: string;
  description: string;
}

function EducationItem({ title, duration, institution, description }: Readonly<EducationItemProps>) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="education-item" onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <div className={`dot ${isHovered ? 'hovered' : ''}`}></div>
        <h4 style={{color:'#fec544'}}>{title}</h4>
        <p style={{color:'#ffffff92'}}>{duration}</p>
        <p style={{color:'white',fontSize:'1.25em'}}>{institution}</p>
        <p style={{color:'#ffffff92'}} >{description}</p>
    </div>
  );
}

export default EducationItem;
