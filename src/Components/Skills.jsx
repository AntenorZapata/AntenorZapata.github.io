import React from 'react';
import {
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiPython,
  DiLinux,
  DiNodejs,
  DiSass,
  DiMongodb,
  DiJava,
  DiMysql
} from 'react-icons/di';
import { SiTypescript, SiRedux } from 'react-icons/si'

function Skills() {
  return (
    <div className="skill-section">
      <div className="skill">
        <span className="hr-bar">Javascript</span>
        <DiJsBadge className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">TypeScript</span>
        <SiTypescript className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">React</span>
        <DiReact className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">Redux</span>
        <SiRedux className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">NodeJS</span>
        <DiNodejs className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">MongoDB</span>
        <DiMongodb className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">MySQL</span>
        <DiMysql className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">HTML</span>
        <DiHtml5 className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">CSS</span>
        <DiCss3 className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">Python</span>
        <DiPython className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">Java</span>
        <DiJava className="icon" />
      </div>

      <div className="skill">
        <span className="hr-bar">Sass</span>
        <DiSass className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">Git</span>
        <DiGit className="icon" />
      </div>
      <div className="skill">
        <span className="hr-bar">Linux</span>
        <DiLinux className="icon" />
      </div>
    </div>
  );
}

export default Skills;
