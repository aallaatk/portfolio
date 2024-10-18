import React from 'react';
import Title from '../Components/Title';
import SkillItem from '../Components/SkillItem';

const webSkills = [
  { title: 'HTML5', value: 90 },
  { title: 'CSS3/Scss/Bootstarp', value: 80 },
  { title: 'JavaScript/TypeScript', value: 75 },
  { title: 'ReactJS', value: 85 },
  { title: 'NodeJs/ExpressJs', value: 80 },
  { title: 'MongoDB', value: 80 }
];

function Skills() {
  return (
    <div className='container mt-5'>
      <div className="row mt-5">
        <Title title={"MY SKILLS"} />
      </div>
      <div className="row mt-5">
        <div className="col-sm-6 mt-3" id='skills-data'>
          <h2>All the skills that I have in that field of work are mentioned.</h2>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempora vel doloribus dignissimos, quae ratione doloremque, officiis dolorem explicabo perferendis vitae minus illo mollitia, voluptates nemo? Deleniti eligendi veniam ad!</p>
        </div>
        <div className="col-sm-6 mt-3">
          {webSkills.map(skill => (
            <SkillItem key={skill.title} title={skill.title} value={skill.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
