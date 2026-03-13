import React from "react";
import '../historia/hist.css';
import taekwondo from '../../media/taekwondo.jpg';
import arco from '../../media/arco.jpg';
import golf from '../../media/golf.jpg';

const Esportes = () => {
    return (
        <main>
            <div class="title-artigo-container">
                <section class="title-artigo">
                    Taekwondo - 태권도<br />
                </section>
            </div>

            <div class="texto-index-container">
                <article class="texto-index">
                    <img src={taekwondo} alt="" class="text-imgs-left" id="taekwondo-img" /><p>A arte marcial mais emblemática da Coreia é o Taekwondo, símbolo nacional e patrimônio cultural reconhecido mundialmente. Sua origem remonta a práticas marciais antigas, como o taekkyeon e o soo bahk do, ambas desenvolvidas para defesa pessoal, disciplina militar e fortalecimento físico. O Taekwondo moderno foi sistematizado em meados do século XX após o fim da ocupação japonesa, integrando valores tradicionais e técnicas de diferentes escolas coreanas e estrangeiras. O nome significa “caminho dos pés e das mãos” e a modalidade é notável pelos chutes altos, rápidos, formas coreografadas (poomsae), defesa pessoal e filosofia de respeito.</p>

                    <p>O desenvolvimento do Taekwondo acompanhou a reconstrução nacional coreana do pós-guerra, tornando-se parte dos currículos escolares, obrigatório no serviço militar e orgulho esportivo. O General Choi Hong Hi foi fundamental na padronização do estilo, que hoje é praticado por milhões em todos os continentes. O Taekwondo foi incluído como esporte olímpico nos Jogos de Sydney 2000 e, desde então, atletas coreanos despontam em campeonatos mundiais.</p>

                    <div style={{ clear: "both" }}></div>
                    <br /><br />

                    <img src={arco} alt="" class="text-imgs-right" id="arco-img" /><p>Além do Taekwondo, a Coreia preserva e valoriza outros esportes tradicionais:</p>
                    <ul>
                        <li><strong>Taekkyeon</strong>: antiga arte marcial baseada em movimentos circulares e defensivos, reconhecida como patrimônio cultural.</li>
                        <li><strong>Ssireum</strong>: luta tradicional semelhante ao sumô, praticada em festivais e eventos rurais desde as dinastias antigas.</li>
                        <li><strong>Baduk</strong>: jogo de estratégia conhecido internacionalmente como Go.</li>
                        <li><strong>Tiro com arco</strong> e <strong>equitação</strong>: esportes que remetem à formação dos guerreiros na história coreana.</li>
                    </ul>

                    <div style={{ clear: "both" }}></div>
                    <br /><br />

                    <img src={golf} alt="" class="text-imgs-right" id="golf-img" /><p>Entre os esportes modernos, a Coreia do Sul tornou-se destaque em áreas como:</p>
                    <ul>
                        <li><strong>Beisebol</strong>: extremamente popular desde os anos 1980, possui ligas profissionais e grande audiência.</li>
                        <li><strong>Futebol</strong>: com a K League, Copa do Mundo de 2002 e grandes atletas reconhecidos internacionalmente.</li>
                        <li><strong>Tênis de mesa, badminton, natação</strong> e <strong>patinação no gelo</strong>: modalidades em que a Coreia figura entre as principais potências asiáticas e mundiais.</li>
                        <li><strong>Golfe</strong>: cada vez mais popular, especialmente entre as mulheres, com atletas coreanas conquistando títulos internacionais.</li>
                    </ul>

                    <div style={{ clear: "both" }}></div>
                    <br /><br />

                    <p>O esporte ocupa importante papel social, promovendo bem-estar, disciplina e integração, sendo celebrado tanto nos grandes estádios de Seul quanto nas praças de pequenas cidades do interior.</p>
                </article>
            </div>
        </main>
    );
};

export default Esportes;