import style from './Page1.module.css'
import { Helmet } from 'react-helmet-async';

function Page1(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra as 5 raças de gatos mais conhecidas mundialmente e suas características marcantes." />
                <meta property="og:title" content="Raças de Gatos Famosas" />
                <meta property="og:description" content="Descubra as 5 raças de gatos mais conhecidas mundialmente e suas características marcantes." />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>As 5 Raças de Gatos Famosas</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>As 5 Raças de Gatos Mais Famosas do Mundo</h1>
                <p className={style.articleText}>Hoje iremos conhecer uma das raças mais conhecidas de gatos,
                    que são considerados encantadores e conquistam milhões
                    de corações e lares ao redor do mundo os gato. Suas personalidades,
                    aparência fofa "Alguns gatos adoráveis, especialmente os amarelos, podem mostrar um temperamento mais forte às vezes. (rsrsrs)" e seus comportamentos suspeitos,
                    podemos assim dizer, fazem deles companheiros especiais. Deixando de papo furado, aqui estão as cinco raças de gatos mais famosas e amadas globalmente:
                </p>
                <p className={style.articleText}>(Aviso: isso é apenas uma suposição baseada em dados encontrados na internet. Não foi feito nenhum estudo ou projeto de coleta de dados para que fosse realizada tal descoberta.)</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1 - Siamês</h2>
                        <p className={style.articleListText}>
                        O gato siamês é ums dos gatos mais procurados e conhecidos por sua beleza exótica. Há uma discordância sobre as variações dessa raça, pois dizem que temos o siamês "original" e o "pirata". Caso queira saber mais sobre isso, busque por "Saiba a diferença entre gato siamês".
                        Possuem pelagem curta e macia, com tons escuros no rosto, patas e cauda, contrastando com o corpo extremamente claro. Seus olhos azul-claros intensos e suas "vocalizações" distintivas tornam esta raça especialmente memorável.
                        </p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul className={style.articleListText}>
                            <li><u>Sociáveis e falantes</u></li>
                            <li><u>Adoram interagir com humanos</u></li>
                            <li><u>Altamente inteligentes e curiosos</u></li>
                        </ul>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>2 - Maine Coon</h2>
                        <p className={style.articleListText}>
                        Rapaz, pensa em um bicho grande! Considerada uma das maiores raças de gatos do mundo, o Maine Coon é conhecido como o "Gigante Gentil". Eles possuem o que chamamos de "casaco vivo", uma pelagem densa e longa, perfeita para climas frios (mas, se vier para o Brasil, coitado!). Além disso, sua personalidade doce e amigável faz deles excelentes companheiros tanto para crianças quanto para outros animais.
                        </p>
                        <p className={style.articleListText}>
                        Características marcantes:
                        </p>
                        <ul className={style.articleListText}>
                            <li>Porte imponente e robusto</li>
                            <li>Adoram brincar e são muito carinhosos</li>
                            <li>Pelagem que exige escovação regular (rapaz isso não e uma desvantagem?)</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>3 - Persa</h2>
                        <p className={style.articleListText}>Famosos por sua pelagem longa e luxuosa e seus rostos achatados, os gatos persas são ícones de elegância e tranquilidade. Eles são mais relaxados e preferem ambientes calmos, tornando-os ideais para famílias que buscam um animal de estimação mais tranquilo. (Confesso que não sou fã dessa raça, mas quando estou perto de um, lá estou eu fazendo carinho na fofura, rsrsrs!)</p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul className={style.articleListText}>
                            <li>Aparência sofisticada</li>
                            <li>Personalidade calma e afetuosa</li>
                            <li>Necessitam de cuidados frequentes com a pelagem</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>4 - Bengal</h2>
                        <p className={style.articleListText}>
                        Com uma aparência que lembra um gato selvagem, o Bengal é uma raça incrivelmente ativa e cheia de energia. Sua pelagem é manchada ou marmorizada, dando-lhe um visual que remete a leopardos em miniatura. São ideais para pessoas que gostam de animais dinâmicos e brincalhões. Mas cuidado, ter um Bengal é como soltar um furacão na sua casa!
                        </p>
                        <p className={style.articleListText}>
                        Características marcantes:
                        </p>
                        <ul className={style.articleListText}>
                            <li>Energéticos e brincalhões</li>
                            <li>Altamente inteligentes</li>
                            <li>Necessitam de espaço para explorar e brincar (mesma coisa de solta um furação em sua casa)</li>
                        </ul>
                    </li>
                    <li>
                        <h2 className={style.articleListItem}>5 - Ragdoll</h2>
                        <p className={style.articleListText}>
                        Apesar de parecerem com os siameses, os Ragdolls possuem características únicas. Conhecidos como "gatos de pano" devido ao hábito de relaxarem completamente quando são pegos no colo, são extremamente gentis e carinhosos. Possuem pelagem semi-longa e olhos azuis hipnotizantes, sendo perfeitos para famílias que procuram um animal afetuoso.
                        </p>
                        <p className={style.articleListText}>Características marcantes:</p>
                        <ul className={style.articleListText}>
                            <li>Personalidade doce e submissa</li>
                            <li>Adoram companhia humana</li>
                            <li>Fáceis de treinar e adaptáveis</li>
                        </ul>
                    </li>
                </ul>
                <div className={style.articleFooter}>
                    <h3>Qual é a sua raça favorita?</h3>
                    <p>Bem, tanto defeitos quanto desvantagens, todos os gatos possuem suas qualidades, que os tornam especiais. Mas o que importa é o quanto você ama seus felinos. Apesar da forma discreta com que demonstram seu amor, isso não os torna menos especiais. Por isso, ao escolher um gato, considere seu estilo de vida e o tipo de personalidade que melhor se encaixa na sua família.</p>
                </div>
            </article>
        </div>
    )
}
export default Page1