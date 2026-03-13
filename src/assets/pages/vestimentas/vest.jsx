import React from "react";
import '../historia/hist.css';
import hanbok from '../../media/Hanbok.jpg';
import hanbokModerno from '../../media/hanbok-moder.webp';

const Arte = () => {
    return (
        <main>
        <div className="title-artigo-container">
            <section className="title-artigo" id="title-artigo">
                Hanbok - 한복
            </section>
        </div>

       <div className="texto-index-container">
            <article className="texto-index">
                <img src={hanbok} alt="" className="text-imgs-left" id="hanbok-img"/><p>O vestuário tradicional coreano é representado pelo hanbok, um traje que simboliza a identidade, a história e os valores culturais do povo coreano. Utilizado há mais de dois mil anos, o hanbok se destaca por suas linhas fluidas, ausência de bolsos, cores vibrantes e grande variedade de formas e detalhes. Sua estrutura básica inclui o jeogori (jaqueta curta), a chima (saia longa para mulheres), o baji (calça para homens) e o durumagi (sobretudo), além de faixas e, em alguns casos, acessórios como chapéus, bolsas ou sapatos especiais.</p><img src={hanbokModerno} alt="" className="text-imgs-right" id="hanbok-moderno-img"/>

                <p>O significado das cores e formas no hanbok está relacionado a elementos da natureza, status social, idade e ocasião. Cores mais vivas e detalhes elaborados eram reservados à nobreza, enquanto plebeus vestiam roupas de algodão, frequentemente brancas, o que rendeu ao povo coreano o apelido de “povo das roupas brancas”. O uso predominante do branco representa pureza, resiliência e, historicamente, foi forma de resistência durante a ocupação japonesa.</p>

                <p>No decorrer das dinastias, especialmente Goryeo e Joseon, o hanbok se adaptou a influências externas, mas manteve suas características únicas. Durante a Dinastia Joseon, o traje foi refinado, passou a cobrir mais o corpo, refletindo os valores neoconfucionistas de modéstia e respeito. Era usado tanto no cotidiano quanto em cerimônias, festas e rituais familiares. Os hanboks de crianças se destacam pelas cores e detalhes festivos usados em aniversários importantes, como o Baek-il e o Doljanchi.</p>

                <p>Hoje, o hanbok é reservado para ocasiões especiais — como aniversários, casamentos, feriados (Chuseok e Seollal) ou visitas a palácios históricos. Muitas famílias mantêm a tradição de vestir o hanbok nessas datas para celebrar a ancestralidade. O renascimento do hanbok moderno trouxe releituras criativas, com tecidos, cortes e estampas adaptados ao cotidiano, tornando-se símbolo de orgulho nacional e inspiração para a moda contemporânea na Coreia do Sul.</p>

                <p>Essa fusão de tradição e modernidade pode ser vista em desfiles, séries de TV, videoclipes de K-pop e festivais culturais, onde o hanbok representa não apenas uma roupa, mas a própria essência da cultura coreana.</p>
            </article>
        </div>
    </main>
    );
};

export default Arte;