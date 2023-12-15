import React, { useState, useEffect } from 'react';

import './Skills.css'


function SkillBar({ skill, percentage }) {
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    // Déclenchez l'animation au chargement du composant
    const handleAnimation = () => {
      setWidth(`${percentage}%`);
    };
    handleAnimation();
  }, [percentage]);

  return (
    <div className="skill">
      <div className="skill-name">{skill}</div>
      <div className="skill-bar">
        <div className="skill-percentage" style={{ width }}></div>
      </div>
    </div>
  );
}

function Skills() {
    return (
      <div className="container-skills">
        <div className='titre'>
            <h2 className='titre1'>What I am good at</h2>
            <h1 className='name'>Expertise</h1>
        </div>
        <h3 className='technical-skills'>Software development</h3>
        <div className='skills-bars'>
        <SkillBar skill="C++" percentage={70} />
        <SkillBar skill="Kotlin" percentage={70} />
        <SkillBar skill="Web" percentage={50} />
        </div>
      </div>
    );
}
  
export default Skills;