import React from "react";
import '../historia/hist.css';
import kimchi from '../../media/kimchi.jpg';
import bulgogi from '../../media/bulgogi.jpg';
import bibimbap from '../../media/bibimbap.jpg';
import tteokbokki from '../../media/tteokbokki.jpg';
import gimbap from '../../media/gimbap.webp';
import frango from '../../media/frango.jpg';


const Gastronomia = () => {
    return (
        <main>
            <div className="title-artigo-container">
                <section className="title-artigo">
                    Culinária Coreana
                </section>
            </div>

            <div className="texto-index-container">
                <article className="texto-index">

                    <img src={frango} alt="" className="text-imgs-right" /> <p>A culinária coreana é uma expressão viva da cultura e história da Coreia do Sul, celebrando a conexão entre tradição e modernidade. Muito mais do que apenas alimentação, os pratos coreanos reforçam laços familiares, bem-estar físico e demonstram a importância do compartilhamento à mesa.</p>

                    <p>A comida está no centro das celebrações, rituais e festividades coreanas, refletindo valores e crenças ancestrais. Os sul-coreanos dão grande valor à diversidade de sabores, à técnica de fermentação e ao equilíbrio entre cores e ingredientes frescos. A tradição do respeito às estações, ao uso de ingredientes locais e aos princípios da Medicina Asiática mostram como a alimentação é considerada como forma de cuidado com a saúde.</p>

                    <p>A mesa típica é composta por vários pratos chamados banchan, servidos junto ao arroz, em pequenas quantidades, promovendo a troca, convívio e variedade. A identidade coreana está presente em cada ingrediente e preparação, e os rituais à mesa preservam a cultura milenar ao mesmo tempo em que se adaptam à vida moderna.</p>

                    <h1>Pratos Típicos da Culinária Coreana</h1>

                    <h2>Kimchi - 김치</h2>

                    <img src={kimchi} alt="" className="text-imgs-food" id="kimchi-img" /> <p>O kimchi é o alimento mais emblemático da Coreia, símbolo de identidade nacional e presença indispensável em qualquer refeição. Preparado tipicamente com acelga, rabanete ou outros vegetais, o kimchi passa por um processo de fermentação envolvendo pimenta vermelha, alho, gengibre, cebola, cebolinha e, muitas vezes, frutos do mar ou pasta de peixe. Originado há mais de dois mil anos, seu preparo varia entre famílias e regiões, resultando em centenas de tipos. Rico em fibras, vitaminas e probióticos, além de um sabor picante e intenso, o kimchi é considerado fonte de saúde e longevidade na Coreia, tendo inclusive reconhecimento como patrimônio cultural imaterial da humanidade.</p>

                    <div style={{ clear: 'both' }}></div>
                    <hr />

                    <h2>Bulgogi - 불고기</h2>

                    <img src={bulgogi} alt="" className="text-imgs-food" id="bulgogi-img" /> <p>Bulgogi significa “carne de fogo” e é feito com fatias finíssimas de carne bovina marinadas em molho de soja, açúcar, óleo de gergelim, alho, pimenta, pera asiática ralada (para maciez) e vegetais. Tradicionalmente grelhado, mas também pode ser preparado à frigideira, o bulgogi ganha sabor adocicado e aroma defumado. É servido com arroz, folhas de alface para embrulhar a carne, kimchi e acompanhamentos (banchan). Geralmente consumido em refeições festivas ou encontros familiares. É uma das carnes coreanas mais apreciadas internacionalmente pela maciez e combinação de temperos.</p>

                    <div style={{ clear: 'both' }}></div>
                    <hr />

                    <h2>Bibimbap - 비빔밥</h2>

                    <img src={bibimbap} alt="" className="text-imgs-food" id="bibimbap-img" /> <p>Bibimbap significa literalmente “arroz misturado” e sua história remonta à Dinastia Joseon, sendo tradicionalmente associado à harmonia, já que todos os ingredientes são misturados antes do consumo. O prato consiste em uma tigela de arroz coberta por uma variedade colorida de legumes (como espinafre, broto de feijão, cenoura, abobrinha, cogumelo), fatias de carne (normalmente bovina marinada em temperos orientais), ovo frito ou cru, e gochujang (pasta de pimenta coreana). Os ingredientes são dispostos separadamente para realçar as cores e, ao misturar tudo, os sabores e texturas se complementam. O bibimbap pode ser servido em uma tigela de pedra quente (dolsot), que deixa o arroz crocante no fundo, ou em versões vegetarianas, com tofu substituindo a proteína animal. É um prato balanceado, muito consumido no cotidiano, em datas comemorativas e amplamente popular nos restaurantes internacionais.</p>

                    <div style={{ clear: 'both' }}></div>
                    <hr />

                    <h2>Tteokbokki - 떡볶이</h2>

                    <img src={tteokbokki} alt="" className="text-imgs-food" id="tteokbokki-img" /> <p>Popular especialmente como comida de rua, o tteokbokki é composto por bolinhos de arroz cilindricos chamados tteok, cozidos em molho apimentado à base de gochujang, açúcar, alho e caldo de peixe ou frango. Muitas receitas incorporam ovos cozidos, bolinhos de peixe (odeng), cebolinha e pedaços de repolho. Sua textura macia e o molho picante-doce conquistam jovens e adultos, sendo consumido em feiras, mercados e festas noturnas. O prato representa o lado descontraído e inovador da culinária coreana.</p>

                    <div style={{ clear: 'both' }}></div>
                    <hr />

                    <h2>Gimbap - 김밥</h2>

                    <img src={gimbap} alt="" className="text-imgs-food" id="gimbap-img" /> <p>O gimbap lembra visualmente o sushi japonês, mas tem identidade própria. O arroz temperado é recheado com vários ingredientes - cenoura, espinafre, pepino, omelete, carne ou peixe, presunto – enrolado em folhas de alga marinha (gim) e fatiado em rolinhos. Utilizado em piqueniques, almoços rápidos ou viagens, é prático de transportar e consumir. Sua versatilidade permite dezenas de variações adaptadas ao gosto de cada família ou região.</p>

                    <div style={{ clear: 'both' }}></div>
                    <hr />

                    <h2>Frango Frito - 양념치킨</h2>

                    <img src={frango} alt="" className="text-imgs-food" id="frango-img" /> <p>O frango frito coreano tornou-se queridinho do paladar sul-coreano, símbolo da adaptação dos clássicos ocidentais às particularidades locais. Seu diferencial está no preparo duplo da fritura, que resulta em pedaços crocantes por fora e suculentos por dentro. Variações clássicas incluem o molho adocicado e picante, feito com pimenta coreana, shoyu, alho, mel ou açúcar e gergelim. Após fritar, o frango é envolto nesse molho brilhante e aromático, formando um “laqueado” que equilibra perfeitamente picância, acidez e doçura.​ É apreciado em encontros informais, bares e festas, normalmente acompanhado por saladas, pickles e cerveja ou soju — uma experiência social que conquistou não só a Coreia do Sul, mas o mundo.</p>

                </article>
            </div>
        </main>
    );
};

export default Gastronomia;