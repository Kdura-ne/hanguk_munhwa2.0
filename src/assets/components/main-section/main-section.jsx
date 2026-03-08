import React from 'react';
import './main-section.css';

const MainContent = () => {
  return (
    <main>
      <div className="title-artigo-container">
        <section className="title-artigo">Mergulhe na Cultura Coreana</section>
        <section className="title-artigo">한국 문화에 빠져보세요</section>
      </div>

      <div className="texto-index-container">
        <article className="texto-index" id="article-esq">
          <p>A Coreia é um país que encanta o mundo com sua riquíssima tradição e impressionante modernidade, onde valores milenares e tendências contemporâneas convivem em harmonia. Este site foi criado para apresentar a você os muitos lados dessa cultura fascinante, abordando sua história, culinária, expressões artísticas, músicas, esportes, roupas típicas e as celebrações e festivais que dão vida à sociedade coreana.</p>

          <p>Ao navegar pelas páginas, será possível conhecer desde os eventos históricos que moldaram a identidade coreana, passando pelo sabor único de pratos tradicionais, pelas delicadas formas de arte e música que unem passado e presente, pelos esportes que conquistaram relevância mundial, até as belas vestimentas e rituais tradicionais preservados em cada festival. Sejam bem-vindos a essa viagem, onde cada detalhe revela um pouco mais do coração da Coreia do Sul e seu povo hospitaleiro e inovador.</p>
        </article>

        <article class="texto-index" id="article-dir">
          <p>한국은 풍부한 전통과 놀라운 현대성이 조화를 이루며 세계를 매혹하는 나라입니다. 수천 년의 가치와 현대적 트렌드가 공존하는 이곳에서, 이 웹사이트는 한국 문화의 다채로운 면모를 소개합니다. 역사, 음식, 예술적 표현, 음악, 스포츠, 전통 의상, 그리고 한국 사회에 활력을 불어넣는 축제와 행사까지 아우릅니다.</p>

          <p>이 페이지를 둘러보시면 한국인의 정체성을 형성한 역사적 사건부터 전통 요리의 독특한 맛, 과거와 현재를 잇는 섬세한 예술과 음악, 세계적으로 주목받는 스포츠, 그리고 각 축제마다 보존된 아름다운 전통 의상과 의식까지 만나보실 수 있습니다. 한국의 마음과 친절하고 혁신적인 국민을 조금씩 더 드러내는 이 여정에 여러분을 환영합니다.</p>
        </article>
      </div>
    </main>
  );
};

export default MainContent;
