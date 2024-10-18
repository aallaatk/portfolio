import React from 'react';


interface SkillItemProps {
  title: string,
  value: number
}

const SkillItem: React.FC<Readonly<SkillItemProps>> = ({ title, value }) => {
  return (
    <div className="skill-item">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="m-0 skill-title">{title}</p>
        <p className="m-0 skill-value">{value}%</p>
      </div>
      <div className="progress">
        <div 
          className="progress-bar custom-progress-bar" 
          role="progressbar" 
          style={{ width: `${value}%` }}
          aria-valuenow={value} 
          aria-valuemin={0} 
          aria-valuemax={100}
        >
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
