import { Helmet } from 'react-helmet-async'

import style from './Page6.module.css'
import RedeSocial from '../componets/RedeSocial'
import Recomendados from '../componets/Recomendados'

function Page6(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Conheça o Maine Coon, a maior raça de gato doméstico! Descubra suas características, curiosidades e cuidados essenciais neste guia completo." />
                <meta property="og:title" content="Maine Coon: Tudo Sobre a Maior Raça de Gato Doméstico!" />
                <meta property="og:description" content="Conheça o Maine Coon, a maior raça de gato doméstico! Descubra suas características, curiosidades e cuidados essenciais neste guia completo." />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>Maine Coon: Tudo Sobre a Maior Raça de Gato Doméstico!</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>Maine Coon: Tudo Sobre a Maior Raça de Gato Doméstico!</h1>
                <p className={style.articleText}>O Maine Coon é uma raça de gato desejada por muitos pelo seu tamanho e sua personalidade doce. Embora tenha o mesmo tamanho, não se engane: seu reconhecimento oficial remete ao estado norte-americano do Maine, onde era famoso pela sua capacidade de caçar ratos e tolerar rigorosos climas. Sem dúvida, deve ser mencionado o famoso título clichê do Maine Coon: "O Gigante Gentil".</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>Características Físicas</h2>
                        <p className={style.articleListText}>O Maine Coon, apesar de ter esse nome sensacional, possui um corpo imponente, o que faz dele um pet desejado. Os machos podem pesar entre 6 e 11 kg e as fêmeas entre 4,5 e 6,6 kg. Sua altura varia de 25 a 41 cm, e ele pode atingir até 100 cm de comprimento, incluindo a cauda, que pode chegar até 36 cm de comprimento. Não é à toa que a raça ocupa três lugares no Guinness World Records. O Maine Coon tem uma forma retangular e, para atingir seu tamanho máximo, o processo de amadurecimento pode demorar de 1 a 3 anos, o que é diferente de outras raças de gatos, que atingem seu tamanho máximo aos 1 ano. Uma característica marcante dessa raça é que, em alguns gatos, o rosto tem um ar robusto e elegante, o que faz muitos quererem tê-los em casa. Além disso, com todas essas características e seu olhar penetrante, ele é recomendado para climas frios devido à sua pelagem sedosa e espessa.</p>
                        <p className={style.articleListText}><em>Nota:Com seu grande tamanho, suas garras são maiores, então é necessário tomar cuidado na hora da brincadeira (comportamento de gato que não quer brincar).</em></p>
                        <img className={style.articleListImg} src='/img/blog/page6/maine-coon-1.jpg' alt="Gata Alimentando seus Filhotes" title='Gata Com Filhotes'/>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>Comportamento e Temperamento</h2>
                        <p className={style.articleListText}>Com uma personalidade amigável, dócil, meiga e companheira, o Maine Coon é um ótimo animal para se dar bem com outros pets, como gatos de outras raças e cães, desde que o devido cuidado seja tomado. Por isso, ele precisa de atenção, pois é carente de cuidados e necessita de companhia diariamente. A tendência é que tenha um fácil aprendizado, sendo mais simples e fácil ensiná-los a fazer truques. Não se assuste com seu miado, pois é uma peculiaridade, chegando a ser semelhante ao som de um grilo cantando.</p>
                        <img className={style.articleListImg} src='/img/blog/page6/maine-coon-2.jpg' alt="Gata Alimentando seus Filhotes" title='Gata Com Filhotes'/>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>História</h2>
                        <p className={style.articleListText}>O começo da história do Maine Coon é um mistério. Ninguém sabe exatamente onde a raça começou, e há até quem brinque dizendo que o Maine Coon seria um gato fugitivo de uma terra de gigantes. Mas, deixando as brincadeiras de lado, existem diversas teorias sobre o seu surgimento. Algumas especulam que eles seriam uma espécie reservada de Marie Antoinette, a rainha da França, que teria enviado seus felinos para a América antes de sua execução. Outras teorias afirmam que a raça surgiu a partir de um híbrido de gatos de barco com felinos locais. Após os séculos XVI e XVII, um inverno rigoroso na Nova Inglaterra pode ter levado esses gatos a se adaptarem, aumentando seu tamanho e pelagem, um exemplo claro de seleção natural. O nome "Maine Coon" também envolve mistério. Sabemos que "Maine" vem do estado, mas a parte "Coon" foi mantida para dar um charme ao nome e se refere a um mistério que vai desde um capitão de barco até a referência a um cruzamento entre um gato e um guaxinim, o que biologicamente seria impossível. Realmente, esse gato é um mistério.</p>
                        <img className={style.articleListImg} src='/img/blog/page6/maine-coon-3.jpg' alt="Gata Alimentando seus Filhotes" title='Gata Com Filhotes'/>
                    </li>
                    
                </ul>
                <div className={style.redesSocial}>
                     <RedeSocial />
                </div>
                <footer className={style.articleFooter}>
                        <h3>Cuidado</h3>
                        <p>Devido ao seu tamanho, o Maine Coon exige uma alimentação superior à de gatos de tamanhos menores. Portanto, esteja avisado sobre a alimentação dele e ciente de seus custos.</p>
                </footer>
            </article>
            <Recomendados />
        </div>
    )
}

export default Page6