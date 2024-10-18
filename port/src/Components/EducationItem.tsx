interface EducationItemProps {
  title: string;
  duration?: string;
  institution: string;
  description: string;
}

function EducationItem({ title, duration, institution, description }: Readonly<EducationItemProps>) {
  return (
    <div className="education-item">
        <h4 style={{color:'#fec544'}}>{title}</h4>
        <p style={{color:'#ffffff92'}}>{duration}</p>
        <p style={{color:'white',fontSize:'1.25em'}}>{institution}</p>
        <p style={{color:'#ffffff92'}} >{description}</p>
    </div>
  );
}

export default EducationItem;
