import React from 'react';
import './hero-section.css';
import video from '../../media/palace-gyeongbokgung.mp4';

const Hero = () => {
  return (
    <div className="wrap">
      <div className="bg-video">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
      <div className="translucent-box">
        APRENDENDO MAIS SOBRE A CULTURA DA COREIA!!! <br />
        한국 문화에 대해 더 알아가기!!!
      </div>
    </div>
  );
};

export default Hero;
