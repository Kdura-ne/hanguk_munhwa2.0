import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './hero-section.css';
import videoIndex from '../../media/palace-gyeongbokgung.mp4';
import videoHist from '../../media/korea.mp4';
import videoGastro from '../../media/tteokbokki.mp4';
import videoArte from '../../media/lequedance.mp4';
import videoVest from '../../media/hanbok.mp4';
import videoCeleb from '../../media/lantern.mp4';
import videoEsportes from '../../media/taekwondo.mp4';
import videoQuiz from '../../media/quiz.mp4';

const Hero = () => {

  const location = useLocation();
  const [video, setVideo] = useState(videoIndex);
  const [tituloBR, setTituloBR] = useState('APRENDENDO MAIS SOBRE A CULTURA DA COREIA!!!');
  const [tituloKR, setTituloKR] = useState('한국 문화에 대해 더 알아가기!!!');

  const herosectionChange = () => {
    if (location.pathname === '/') {
      setVideo(videoIndex);
      setTituloBR('APRENDENDO MAIS SOBRE A CULTURA DA COREIA!!!');
      setTituloKR('한국 문화에 대해 더 알아가기!!!');
    } else if (location.pathname === '/hist') {
      setVideo(videoHist);
      setTituloBR('Vamos aprender um pouco mais sobre a história da Coreia.');
      setTituloKR('한국의 역사에 대해 조금 더 알아봅시다.');
    } else if (location.pathname === '/gastro') {
      setVideo(videoGastro);
      setTituloBR('A comida coreana.');
      setTituloKR('한국 음식.');
    } else if (location.pathname === '/arte') {
      setVideo(videoArte);
      setTituloBR('Música, Dança e Artes Visuais e Muito Mais.');
      setTituloKR('음악, 무용, 시각 예술 및 그 이상.');
    } else if (location.pathname === '/vest') {
      setVideo(videoVest);
      setTituloBR('A Elegância do Vestuário Tradicional Coreano.');
      setTituloKR('전통 한복의 우아함.');
    } else if (location.pathname === '/celeb') {
      setVideo(videoCeleb);
      setTituloBR('Raízes históricas, espirituais e culturais.');
      setTituloKR('역사적, 정신적 및 문화적 뿌리.');
    } else if (location.pathname === '/esportes') {
      setVideo(videoEsportes);
      setTituloBR('Patrimônio cultural e Símbolo Nacional, TAEKWONDO!!!');
      setTituloKR('문화유산이자 국가 상징, 태권도!!!');
    } else if (location.pathname === '/quiz') {
      setVideo(videoQuiz);
      setTituloBR('Hora de testar seus conhecimentos!!');
      setTituloKR('지식을 테스트할 시간입니다!!');
    }
  }

  useEffect(() => {
    herosectionChange();
  }, [location]);

  return (
    <div className="wrap">
      <div className="bg-video">
        <video key={video} autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="translucent-box">
        {tituloBR} <br /> {tituloKR}
      </div>
    </div>
  );
};

export default Hero;
