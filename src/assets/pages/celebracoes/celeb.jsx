import React from "react";
import '../historia/hist.css'
import seollal from '../../media/seollal.webp';
import chuseok from '../../media/chuseok.png';
import yeondeunhoe from '../../media/yeondeunhoe.jpg';
import jinju from '../../media/jinju.jpg';
import kpop from '../../media/kpop.webp';

const Celebracoes = () => {
    return (
        <main>
        <div className="title-artigo-container">
            <section className="title-artigo">
                Celebrações e Festivais na Coreia do Sul<br/>
            </section>
        </div>

       <div className="texto-index-container">
            <article className="texto-index">
                <p>Os festivais e celebrações coreanos refletem as raízes históricas, espirituais e o dinamismo social do país, unindo tradição e modernidade em momentos de renovação coletiva. O calendário sul-coreano é repleto de datas importantes, que integram desde homenagens ancestrais até eventos culturais urbanos contemporâneos.</p>

                <h1>Festivais Tradicionais Fundamentais</h1>

                <h2>Ano Novo Lunar - 설날</h2>

                <img src={seollal} alt="" className="text-imgs-left" id="seollal-img"/><p>Considerado o mais importante dos festivais coreanos, o Seollal marca o início do ano pelo calendário lunar, geralmente no fim de janeiro ou fevereiro. Nessa época, as famílias se reúnem, vestem o hanbok, homenageiam os ancestrais em rituais (Charye), trocam cumprimentos especiais, jogam jogos tradicionais e degustam pratos típicos como tteokguk (sopa de bolinho de arroz), sinalizando sorte e longevidade.</p>

                <div style={{clear: "both"}}></div>
                <hr/>

                <h2>Dia de Ação de Graças Coreano - 추석</h2>

                <img src={chuseok} alt="" className="text-imgs-left" id="chuseok-img"/><p>Celebrado na lua cheia da colheita (geralmente em setembro), é o maior feriado da Coreia. Além do banquete em família e rituais aos ancestrais, Chuseok inclui o preparo de pratos especiais, como songpyeon (bolinho de arroz). Jogos folclóricos, danças e visitas aos túmulos de familiares fazem parte do espírito de gratidão do festival.</p>

                <div style={{clear: "both"}}></div>
                <hr/>

                <h2>Festival das Lanternas de Lotus - 연등회</h2>

                <img src={yeondeunhoe} alt="" className="text-imgs-left" id="yeondeunhoe-img"/><p>Comemorando o nascimento de Buda (abril ou maio), esse festival transforma ruas e templos com desfiles de milhares de lanternas artesanais. A iluminação simboliza esperança, iluminação espiritual e renovação, reunindo pessoas de diferentes idades e crenças.</p>

                <div style={{clear: "both"}}></div>
                <hr/>

                <h1>Festivais Contemporâneos e Urbanos</h1>

                <h2>Festival de Lanternas de Jinju - 진주 남강 유등 축제</h2>

                <img src={jinju} alt="" className="text-imgs-left" id="jinju-img"/><p>Realizado em outubro na cidade de Jinju, exibe lanternas coloridas navegando pelo rio, shows de luzes, música, dança e eventos culturais, representando uma vibrante celebração do patrimônio coreano.</p>

                <div style={{clear: "both"}}></div>
                <hr/>

                <h2>Festivais de K-Pop, Fireworks e Cultura Pop</h2>

                <img src={kpop} alt="" className="text-imgs-left" id="kpop-img"/><p>Grandes cidades como Seul e Busan promovem festivais anuais de música Pop (K-Pop), fogos de artifício, gastronomia de rua, cinema, arte contemporânea e outros eventos urbanos, reunindo multidões e turistas do mundo inteiro.</p>
            </article>
        </div>
    </main>
    );
};

export default Celebracoes;