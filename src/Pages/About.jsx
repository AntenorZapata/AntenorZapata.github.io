import React from 'react';
import Title from '../Components/Title';
import Info from '../Components/Info';
import Skills from '../Components/Skills';

function About() {
  return (
    <div>
      <div className="about-page infos">
        <Title text={'SOBRE MIM'} shadow={'SOBRE MIM'} />
        <Info />
        <Title
          text={'O QUE ESTOU APRENDENDO'}
          shadow={'O QUE ESTOU APRENDENDO'}
        />
        <Skills />
      </div>
    </div>
  );
}

export default About;
