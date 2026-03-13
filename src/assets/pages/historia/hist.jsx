import React from "react";
import './hist.css';
import mapa from '../../media/mapacoreia.jpg';
import seulImg from '../../media/seul.jpg';

const Historia = () => {
    return (
        <main>
        <div className="title-artigo-container">
            <section className="title-artigo">
                História da Coreia
            </section>
        </div>

       <div className="texto-index-container">
            <article className="texto-index">
                <p> A história da Coreia do Sul é um exemplo de transformação acelerada, marcada por desafios, superações e uma incrível capacidade de adaptação às mudanças globais. Da divisão no pós-guerra à ascensão como potência tecnológica e cultural, cada etapa revela o espírito resiliente do povo sul-coreano.</p>

                <h1>História da Coreia do Sul</h1>

                <img src={mapa} alt="Imagem do território das duas Coreias" className="text-imgs-left"/> <p> Após o fim da ocupação japonesa e da Segunda Guerra Mundial, a península coreana foi dividida em duas zonas de influência: norte (soviética) e sul (americana). Em 15 de agosto de 1948, foi fundada a República da Coreia (Coreia do Sul), com Syngman Rhee como primeiro presidente. No entanto, apenas dois anos depois, a Coreia do Norte invadiu o sul, iniciando a Guerra da Coreia (1950-1953). O conflito, que teve participação das Nações Unidas, resultou em milhões de mortes e um país devastado, mas consolidou a separação entre as duas Coreias.</p>

                <p> Nas décadas seguintes, a Coreia do Sul enfrentou instabilidades políticas, com governos militares e repressão social. Um dos momentos mais marcantes foi o regime de Park Chung-hee (1961-1979), voltado para o crescimento econômico. Sob seu comando, o país investiu pesado em infraestrutura e indústria, criando as bases do “Milagre do Rio Han”, quando em poucos anos a economia ultrapassou a pobreza extrema e passou a competir internacionalmente, especialmente graças aos conglomerados industriais (chaebols).</p>

                <p> A busca por democracia resultou em grandes manifestações na década de 1980, sendo a Revolta de Gwangju em 1980 um símbolo da luta popular por liberdade e direitos civis. Após muita pressão, veio a abertura democrática, com eleições diretas a partir de 1987 e o fortalecimento das instituições políticas.</p>

                <p> A partir dos anos 1990, a Coreia do Sul vivenciou forte urbanização, universalização da educação, avanços científicos e uma integração cada vez maior à economia global. Seul tornou-se uma metrópole moderna, lar de grandes corporações e cenário de importantes eventos internacionais, como a Olimpíada de 1988 e a Copa do Mundo de 2002.</p>

                <h1>Modernidade e Atualidade</h1>

                <img src={seulImg} alt="Imagem do território das duas Coreias" className="text-imgs-right" id="seul-img"/>
                <p> Hoje, a Coreia do Sul é reconhecida como um exemplo mundial de inovação tecnológica, com setores de ponta em eletrônica, telecomunicações, robótica e automóveis. O país também se destaca na cultura pop global: o fenômeno da Onda Hallyu (K-pop, doramas, cinema), gastronomia moderna e presença digital influenciam jovens do mundo todo.</p>

                <p> A sociedade coreana valoriza o equilíbrio entre tradição e modernidade. Apesar dos avanços, o país enfrenta desafios, como desigualdade social, competitividade intensa na educação e mercado de trabalho, e questões geopolíticas relacionadas à Coreia do Norte.</p>
                
                <p> Hoje, passear por Seul é se deparar com arranha-céus, mercados tradicionais, templos antigos, arte urbana, trens de alta velocidade e um cotidiano repleto de inovações. A Coreia do Sul mostra que é possível transformar crises em oportunidades e se reinventar em poucos anos, tornando-se referência global em desenvolvimento sustentável, tecnologia e cultura contemporânea.</p>

                <p></p>
            </article>
        </div>
    </main>
    );
};

export default Historia;
