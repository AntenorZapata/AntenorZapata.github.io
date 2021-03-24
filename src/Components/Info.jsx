import React from 'react';
import image from '../imgs/nokspb.jpeg';

function Info() {
  return (
    <div className="image-section">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="about-info">
        <h4>
          Me chamo<span> Antenor Zapata</span>
        </h4>

        <div className="about-details">
          <div className="story-datails">
            <p className="description">
              Um músico, que se descobriu jornalista e atualmente estuda para se
              tornar programador. Após anos atuando em outras áreas, percebi que
              é com Desenvolvimento de Software que consigo unir o "quem eu sou"
              ao "o que eu gosto": <span> dar vazão à minha curiosidade</span>;{' '}
              <span>
                detectar problemas, encontrar soluções e aprender com elas
              </span>
              ;<span> ser colaborativo no ambiente de trabalho</span>;
              <span> construir coisas que afetam pessoas</span>. Nesta página
              você poderá encontrar projetos, pessoais e profissionais, que
              venho realizando ao longo dessa jornada. Stay tuned! : ]
            </p>
          </div>
        </div>
        <div className="btn">
          <button>DOWNLOAD CV</button>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Info;
