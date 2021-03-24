import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="home-page">
      <div className="landing">
        <h1>
          <span className="hi">Oi, eu sou o</span>{' '}
          <span className="name">Antenor Zapata</span>
        </h1>
        <p>Estudante de Desenvolvimento de Software</p>
        <div className="icons">
          <Link
            to={{ pathname: 'https://github.com/AntenorZapata' }}
            target="_blank"
            className="icon-box"
          >
            <FaGithub className="icon github" />
          </Link>
          <Link
            to={{ pathname: 'https://www.linkedin.com/in/antenorzpt/' }}
            target="_blank"
            className="icon-box"
          >
            <FaLinkedin className="icon linkedin" />
          </Link>
          <Link
            to={{ pathname: 'https://www.instagram.com/nokszap/' }}
            target="_blank"
            className="icon-box"
          >
            <FaInstagram className="icon instagram" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
