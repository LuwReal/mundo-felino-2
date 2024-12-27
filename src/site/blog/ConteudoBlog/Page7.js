import style from './Page2.module.css'
import Recomendados from '../componets/Recomendados';
import RedeSocial from '../componets/RedeSocial';
import { Helmet } from 'react-helmet-async';

function Page2(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra os 5 gatos mais famosos do Japão, símbolos de sorte e cultura, incluindo o icônico Maneki-Neko e a adorável Hello Kitty. Conheça suas histórias e curiosidades!" />
                <meta property="og:title" content="Raças de Gatos Famosas" />
                <meta property="og:description" content="Descubra os 5 gatos mais famosos do Japão, símbolos de sorte e cultura, incluindo o icônico Maneki-Neko e a adorável Hello Kitty. Conheça suas histórias e curiosidades!" />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>5 Gatos Mais Famosos do Japão</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>5 Gatos Mais Famosos do Japão: História e Curiosidades que Você Precisa Conhecer</h1>
                <p className={style.articleText}>Hoje iremos falar do O Japão é um destino fascinante para os amantes de gatos! Sabia que ele tem uma relação especial com os gatos, que são vistos como símbolos de sorte, prosperidade e companheirismo? Além disso, muitos gatos ganharam fama através da cultura popular, internet e histórias curiosas. Confira abaixo os cinco gatos mais icônicos do Japão:</p>
                <p className={style.articleText}>Nota: isso é apenas uma suposição baseada em dados encontrados na internet. Não foi feito nenhum estudo ou projeto de coleta de dados para que fosse realizada tal descoberta.</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1 - Maneki Neko</h2>
                        <p className={style.articleListText}>Esse aqui dispensa apresentações! Quando falamos em gatos no Japão, é impossível não lembrar do Maneki-Neko, conhecido como o "gato da sorte". Provavelmente, é o gato mais famoso do Japão. Essa figura está presente em diversos lugares, como animes, comércios, restaurantes e lares, sendo usada como amuleto de sorte.</p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul>
                            <li>Representado como uma estátua em diversas cores (branco, dourado, preto, entre outras).</li>
                            <li>Simboliza sorte, riqueza e proteção.</li>
                            <li>Origem associada a lendas populares.</li>
                        </ul>
                        <p><i>Imagem Abaixo Gato Maneki Neko</i></p>
                        <img className={style.articleListImg} src='/img/blog/page7/maneki-neko.jpg' alt="Imagem de Maneki Neko Gato da cultura japonesa que representa a oa sorte" title='Maneki Neko'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>2 - Hello Kitty</h2>
                        <p className={style.articleListText}>Essa também é bastante conhecida no Brasil! Hello Kitty é uma personagem fictícia que se tornou um ícone global. Criada pela empresa Sanrio em 1974, ela representa não apenas a cultura kawaii (fofa) do Japão, mas também uma das maiores influências da indústria pop japonesa no mundo.</p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul>
                            <li>Desenho minimalista com rosto sem expressão.</li>
                            <li>Um dos maiores ícones da cultura pop japonesa.</li>
                            <li>Associada a produtos que vão de brinquedos a aviões decorados.</li>
                        </ul>
                        <p><i>Imagem Abaixo Gato Hello Kitty</i></p>
                        <img className={style.articleListImg} src='/img/blog/page7/hello-kitty.jpg' alt="Personagem da cultura pop do japão Hello Kitty" title='Hello Kitty'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>3 - Tama, a Gata Chefe de Estação</h2>
                        <p className={style.articleListText}>Tama foi uma gata que se tornou famosa por ser nomeada chefe de estação na estação do trem Kishi, na província de Wakayama. Sua presença aumentou o turismo local, e sua história é bastante emocionante. A cidade até concedeu o título de "Kamisama Tama" e criou um mini santuário em sua homenagem. Sua influência continua até hoje.</p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul>
                            <li>Usava um chapéu de chefe de estação</li>
                            <li>Atraía milhares de turistas para a região.</li>
                            <li>Após sua morte, recebeu um santuário em sua homenagem.</li>
                        </ul>
                        <p><i>Imagem Abaixo Gato Tama</i></p>
                        <img className={style.articleListImg} src='/img/blog/page7/tama-a-gata-chefe-de-estacao.jpg' alt="Falecida Gata Tama, conhecida por ser chefe de estação do trem Kishi" title='Tama, a Gata Chefe de Estação'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>4 - Maru, o Gato das Caixas</h2>
                        <p className={style.articleListText}>Maru é um dos gatos mais famosos da internet, conhecido por seu amor incondicional por caixas. Ele até entrou para o Guinness World Records como o animal mais visto do YouTube no canal mugumogu, atingindo 365 milhões de visualizações em 2016. Desde 2008, continua ativo e conquistando fãs.</p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul>
                            <li>Aparência fofa e robusta</li>
                            <li>Protagonista de vídeos virais desde 2008.</li>
                            <li>Adorado por sua personalidade brincalhona.</li>
                        </ul>
                        <p><i>Imagem Abaixo Gato Maru</i></p>
                        <img className={style.articleListImg} src='/img/blog/page7/maru-o-gato-das-caixas.jpg' alt="Maru, o Gato das Caixas, gato influenciado digital" title='Maru, o Gato das Caixas'/>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>5 - Gatos de Gotokuji</h2>
                        <p className={style.articleListText}>Embora não seja um gato real, o templo Gotokuji é um local bastante conhecido pela peculiaridade de ter inúmeras estátuas do Maneki-Neko. É um ótimo lugar para tirar fotos impressionantes e encher os olhos de quem aprecia a cultura japonesa.</p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul>
                            <li>Templo cheio de estátuas de Maneki-Neko.</li>
                            <li>Relacionado à história de sorte e proteção.</li>
                            <li>Destino popular entre turistas e adoradores de gatos.</li>
                        </ul>
                        <p><i>Imagem Abaixo Templo Gotokuji</i></p>
                        <img className={style.articleListImg} src='/img/blog/page7/templo-gotokuji.jpg' alt="Templo de Gotokuji localizado no japão" title='Templo de Gotokuji'/>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                    <RedeSocial />
                </div>
                <div className={style.articleFooter}>
                    <h3>Gatos e a Cultura Japonesa</h3>
                    <p>Esses são apenas alguns dos gatos bastante conhecidos, desempenhando papéis únicos e especiais na cultura japonesa. Seja através da tradição, internet ou representações simbólicas, esses felinos continuam a encantar gerações e a inspirar histórias.</p>
                </div>
            </article>
            <Recomendados />
        </div>
    )
}
export default Page2