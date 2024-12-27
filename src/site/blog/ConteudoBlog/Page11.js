import { Helmet } from 'react-helmet-async'
import Recomendados from '../componets/Recomendados'
import RedeSocial from '../componets/RedeSocial'
import style from './Page11.module.css'


function Page11(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra 5 motivos incríveis que provam por que os gatos são melhores que os cães. Saiba mais sobre independência, higiene, custos e outras vantagens de ter um gato como pet." />
                <meta property="og:title" content="5 Motivos Por Que os Gatos São Melhores que os Cães" />
                <meta property="og:description" content="Descubra 5 motivos incríveis que provam por que os gatos são melhores que os cães. Saiba mais sobre independência, higiene, custos e outras vantagens de ter um gato como pet." />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>5 Motivos Por Que os Gatos São Melhores que os Cães</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>5 Motivos Por Que os Gatos São Melhores que os Cães</h1>
                <p className={style.articleText}>A escolha entre cães e gatos é uma discussão que vem desde a nossa infância. Quando decidimos qual preferimos, muitas vezes isso se baseia em influências ou experiências pessoais. Porém, quando analisamos sem favoritismo, podemos destacar as vantagens de cada espécie, considerando qual se adapta melhor ao futuro dono. Confira abaixo cinco razões que fazem dos felinos os favoritos de muitas pessoas:</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1. Manutenção Baixa</h2>
                        <p className={style.articleListText}>Os gatos exigem menos cuidados devido a suas habilidades naturais, que os tornam menos preocupantes do que cães. Eles são incrivelmente independentes, cuidam da própria higiene com a ajuda de sua língua e podem ficar sozinhos por mais tempo sem desenvolver ansiedade. Além disso, não precisam de passeios diários, o que economiza tempo para os donos.</p>
                        <img className={style.articleListImg} src='/img/blog/page11/gato-se-lipando.jpg' alt="Gato de cor branca e laranja Lipando seus Pelos" title='Gato se Lipando'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>2. Espaço Reduzido</h2>
                        <p className={style.articleListText}>Os gatos se adaptam muito bem a espaços pequenos, como apartamentos, sendo uma ótima opção para quem tem planos de mudança no futuro. Eles não precisam de quintais grandes ou áreas externas para gastar energia. Sua flexibilidade e capacidade de movimentação podem ser compensadas com um espaço cheio de brinquedos, arranhadores, obstáculos, caixas vazias e tapetes</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>3. Menos Barulho</h2>
                        <p className={style.articleListText}>Os gatos são silenciosos. Enquanto os cães podem latir constantemente, incomodando vizinhos ou até mesmo seus donos durante o sono, os gatos comunicam-se com miados suaves, que são menos frequentes e perturbadores. Além disso, suas patas macias e unhas evitam ruídos ao andarem, garantindo maior tranquilidade no ambiente.</p>
                        <img className={style.articleListImg} src='/img/blog/page11/gato-sem-fazer-barulho.jpg' alt="Gato quieto em uma mesa com um livro aberto" title='Gato Quieto'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>4. Controle de Pragas</h2>
                        <p className={style.articleListText}>Como já mencionei aqui no blog Mundo Felino 2, os gatos são caçadores naturais e podem ajudar a prevenir pragas em casa. Mesmo os gatos domésticos desempenham um papel importante no controle de populações de ratos e insetos. Na casa da minha avó, por exemplo, houve uma infestação de ratos, e os gatos foram essenciais para resolver o problema. Sua simples presença já desencoraja muitos desses visitantes indesejados.</p>
                        <img className={style.articleListImg} src='/img/blog/page11/gato-obersevanndo-um-rato.jpg' alt="Gato encarando um rato" title='Gato e Rato'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>5. Custo-Benefício</h2>
                        <p className={style.articleListText}>Ter um gato costuma ser mais econômico. Eles comem menos, não precisam de coleiras ou roupas, e, frequentemente, têm custos veterinários mais baixos, especialmente em comparação com raças de cães que demandam cuidados específicos.</p>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                    <RedeSocial />
                </div>
                <div className={style.articleFooter}>
                    <p>Por essas e outras razões, os gatos conquistam cada vez mais admiradores. No entanto, a escolha entre gatos e cães depende do estilo de vida e das preferências de cada pessoa.</p>
                </div>
            </article>
            <Recomendados />
        </div>
    )
}
export default Page11