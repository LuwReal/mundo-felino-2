import { Helmet } from 'react-helmet-async'
import Recomendados from '../componets/Recomendados'
import RedeSocial from '../componets/RedeSocial'
import style from './Page10.module.css'

function Page10(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra tudo sobre o gato Bengal, uma raça exótica que combina aparência selvagem, personalidade carinhosa e inteligência. Saiba mais sobre sua origem, cuidados e curiosidades!" />
                <meta property="og:title" content="Gato Bengal: O Exótico Gato que Encanta com sua Beleza Selvagem" />
                <meta property="og:description" content="Descubra tudo sobre o gato Bengal, uma raça exótica que combina aparência selvagem, personalidade carinhosa e inteligência. Saiba mais sobre sua origem, cuidados e curiosidades!" />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>Gato Bengal: com sua Beleza Selvagem</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>Gato Bengal: O Exótico Gato que Encanta com sua Beleza Selvagem</h1>
                <p className={style.articleText}>O gato Bengal, também conhecido como Bengalês, é uma das raças mais fascinantes e exóticas do mundo felino. Sua aparência selvagem combina com uma personalidade carinhosa e energética. Parece até que pegaram um leopardo e o diminuíram de tamanho! Essa característica torna a raça uma escolha popular entre os amantes de gatos. Se você tem planos de ter filhos, recomendo o Bengal, pois ele já pode preparar sua mente para o cuidado e dedicação. Vamos explorar mais sobre essa raça única e descobrir o que a torna tão especial.</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1. Origem e História</h2>
                        <p className={style.articleListText}>O gato Bengal tem uma história relativamente recente, surgindo na década de 1960, nos Estados Unidos. Não é de se espantar, afinal, um gato com essas características só poderia ter sido idealizado por meio de cruzamentos muito específicos. A raça é o resultado da união entre gatos domésticos e o leopardo-asiático (Prionailurus bengalensis), um felino selvagem de pequeno porte encontrado na Ásia.</p>
                        <p className={style.articleListText}>A ideia por trás do cruzamento era criar um gato com a aparência selvagem de um leopardo, mas com o temperamento amigável e sociável de um gato doméstico. O nome “Bengal” foi inspirado no nome científico do leopardo-asiático, destacando a herança selvagem da raça. Esse cruzamento foi reconhecido por várias associações internacionais de felinos e, desde então, o Bengal tem sido mantido como um gato doméstico com aparência exótica.</p>
                        <img className={style.articleListImg} src='/img/blog/page10/filhotes-de-gato-da-raça-bengal.jpg' alt="Filhotes de gato da raça bengal reunido" title='Filhotes de Bengal'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>2. Aparência e Características</h2>
                        <p className={style.articleListText}>Os Bengals são conhecidos por seu pelo curto, macio e brilhante, que muitas vezes apresenta um efeito de brilho chamado “glitter”. Suas marcações podem ser de dois tipos principais:</p>
                        <dl className={style.articleList2}>
                            <dt>Rosetas: </dt>
                            <dd>Parecem manchas de leopardo, criando um padrão único em cada gato.</dd>
                            <dt>Listras ou manchas: </dt>
                            <dd>Distribuídas de forma irregular, conferindo um visual selvagem.</dd>
                            <dt>As cores da pelagem mais comuns incluem:</dt>
                            <dd>Marrom</dd>
                            <dd>Neve</dd>
                            <dd>Prata</dd>
                        </dl>
                        <img className={style.articleListImg} src='/img/blog/page10/gato-bengal-de-cor-escura.jpg' alt="Gato da Raça Bengal de cores e tons mais escuros" title='Gato bengal'/>
                        <p className={style.articleListText}>Com um corpo atlético e musculoso, os Bengals são gatos de tamanho médio a grande, pesando entre 4 e 8 quilos. Além da aparência exótica, seus olhos, que podem ser verdes, dourados ou azuis, complementam sua beleza e deixam qualquer amante de gatos encantado.</p>
                    </li>
                    
                    <li>
                        <h2 className={style.articleListItem}>Temperamento e Personalidade</h2>
                        <p className={style.articleListText}>Além de sua aparência selvagem, o Bengal é conhecido por seu temperamento afetuoso e sociável. Aqui estão algumas de suas características:</p>
                        <dl className={style.articleList2}>
                            <dt>Brincalhões:</dt>
                            <dd>Amam jogos interativos e brinquedos que desafiem sua mente.</dd>
                            <dt>Curiosos:</dt>
                            <dd>Gostam de explorar o ambiente e são capazes até de aprender a abrir portas e gavetas.</dd>
                            <dt>Sociáveis:</dt>
                            <dd>Se dão bem com crianças e outros animais, desde que a convivência seja introduzida de forma adequada.</dd>
                            <dt>Vocais:</dt>
                            <dd>Comunicam seus desejos e emoções com miados únicos e ronronados.</dd>
                        </dl>
                        <img className={style.articleListImg} src='/img/blog/page10/gato-da-raça-bengal.jpg' alt="Gato da Raça Bengal após derruba ponte de planta" title='Gato Bengal'/>
                    </li>
                    
                    <li>
                        <h2 className={style.articleListItem}>Cuidados Necessários</h2>
                        <p className={style.articleListText}>Embora não exijam cuidados muito diferentes de outros gatos, os Bengals precisam de atenção especial devido à sua energia e inteligência:</p>
                        <dl className={style.articleList2}>
                            <dt>Exercício e Estimulação: </dt>
                            <dd>Forneça brinquedos interativos e espaços para escalada, como arranhadores e prateleiras.</dd>
                            <dt>Cuidados com a pelagem: </dt>
                            <dd>Uma escovação semanal é suficiente para manter o pelo saudável e brilhante.</dd>
                            <dt>Saúde:</dt>
                            <dd>Visitas regulares ao veterinário são essenciais para garantir a saúde e prevenir doenças comuns.</dd>
                        </dl>
                    </li>
                    
                    <li>
                        <h2 className={style.articleListItem}>É o Gato Certo para Você?</h2>
                        <p className={style.articleListText}>Adotar um Bengal significa se comprometer com uma raça que requer tempo, dedicação e carinho. Eles são ideais para famílias ativas que podem oferecer um ambiente enriquecedor e muito amor. Se você busca um companheiro que combine beleza, inteligência e energia, o Bengal pode ser a escolha perfeita.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>Curiosidades Sobre o Bengal</h2>
                        <ul className={style.articleList}>
                            <li>Alguns Bengals adoram água e podem tentar brincar na torneira ou na banheira.</li>
                            <li>São uma das poucas raças que podem ser treinadas para passear na coleira.</li>
                            <li>Devido à sua origem, possuem imunidade natural a algumas doenças felinas.</li>
                        </ul>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                    <RedeSocial />
                </div>
                <div className={style.articleFooter }>
                    <h3>Conclusão</h3>
                    <p>O gato Bengal é uma verdadeira obra de arte da natureza e da seleção felina. Com sua aparência selvagem e coração doméstico, eles conquistam cada vez mais espaço nos lares e corações ao redor do mundo. E se você juntar um Bengal com um gato de rua? Bom, você terá... dois gatos!</p>
                </div>
            </article>
            <Recomendados />
        </div>
    )
}
export default Page10