import React from "react";
import '../historia/hist.css';
import art from '../../media/art.jpg';
import celadon from '../../media/celadon.JPG';
import gugak from '../../media/gugak.jpg';
import buchaechum from '../../media/buchaechum.jpg';

const Arte = () => {
    return (
        <main>
            <div className="title-artigo-container">
                <section className="title-artigo" id="title-artigo">
                    Arte e Cultura
                </section>
            </div>

            <div className="texto-index-container">
                <article className="texto-index">
                    <img src={art} alt="" className="text-imgs-left" id="arte-img"/><p>As artes visuais, a música e a dança coreana combinam tradições milenares com criatividade contemporânea, destacando-se tanto pela preservação cultural quanto pela influência global. O desenvolvimento histórico dessas expressões revela uma busca constante por equilíbrio, refinamento e representação do espírito coreano (“han”), presente em todas as formas artísticas.</p>

                        <div style={{ clear: 'both' }}></div>

                        <h1>Artes Visuais Coreanas</h1>

                        <img src={celadon} alt="" className="text-imgs-right"/>
                            <p>A tradição das artes visuais na Coreia é marcada pela valorização da natureza, da simplicidade e do simbolismo. Desde os primeiros artefatos neolíticos e pinturas rupestres, passando pela idade do bronze com refinadas cerâmicas, até as dinastias Goryeo (famosa pela cerâmica celadon) e Joseon (destacando-se na pintura de paisagens, caligrafia, biombos e porcelanas brancas). Trabalhos de artistas clássicos, como Shin Saimdang, continuam sendo referência até hoje, inclusive em cédulas de dinheiro. Museus em Seul como o Seoul Museum of Art e o National Museum of Modern and Contemporary Art mostram como artistas contemporâneos dialogam com heranças tradicionais, experimentando novas linguagens e trazendo importantes debates sociais para a arte. O cenário artístico atual é inovador, com feiras internacionais, jovens talentos e espaços colaborativos que colocam a Coreia do Sul como potência global em arte contemporânea.</p>

                            <h1>Música: Tradição e Vanguarda</h1>

                            <img src={gugak} alt="" className="text-imgs-left" id="gugak-img"/> <p>A música coreana se desenvolveu a partir de ritos xamânicos, budistas e das cortes reais, formando o gênero conhecido como gugak (국악), que abrange desde canções folclóricas até a música clássica da corte. “Arirang”, a mais célebre, tornou-se um hino não oficial do país e patrimônio cultural da humanidade. Instrumentos típicos como gayageum (cítara de cordas), janggu (tambor ampulheta) e piri (flauta) caracterizam a sonoridade tradicional, enquanto gêneros como pansori (narrativa musical), samulnori (percussão), e nongak (banda rural festiva) mesclam canto, relato e dança em performances vibrantes.</p>

                                <p>Na vida moderna, o K-pop assumiu destaque global: grupos como BTS, Blackpink e EXO misturam pop, rap, dance e estilos visuais marcantes, simbolizando o poder de exportação da cultura sul-coreana. Outras tendências incluem a fusão de música clássica com elementos eletrônicos e a presença cada vez maior de músicos coreanos em trilhas sonoras de cinema, games e festivais internacionais.</p>

                                <h1>Dança Coreana: Entre o Solo e o Espetáculo</h1>

                                <img src={buchaechum} alt="" className="text-imgs-left" id="buchaechum-img"/><p>A dança tradicional coreana surgiu de ritos religiosos e festas das aldeias, sendo praticada tanto nos palácios (danças de corte) quanto em festivais populares. Destacam-se a Buchaechum (dança dos leques), famosa por sua beleza visual, além das danças com máscaras (talchum), e movimentos inspirados na ligação com a natureza e a terra. A dança tradicional enfatiza fluidez, gestualidade delicada e vestimentas chamadas hanbok, criando cenas que narram histórias ou emoções profundamente enraizadas na vida coreana. As apresentações modernas reinventam essas formas, mesclando ballet, jazz e street dance - especialmente nos palcos do K-pop, onde coreografias precisas e energéticas viraram marca mundial.</p>

                                    <p>O diálogo entre tradição e modernidade, tanto nas artes visuais quanto na música e dança, faz da Coreia do Sul um centro cultural em ascensão, capaz de preservar o passado e inovar para o futuro.</p>
                                </article>
                            </div>
                        </main>
                        );
};

                        export default Arte;