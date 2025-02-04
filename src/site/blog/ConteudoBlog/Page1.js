import { Helmet } from 'react-helmet-async'
import Recomendados from '../componets/Recomendados'
import Recomendados2 from '../componets/Recomendados2'
import RedeSocial from '../componets/RedeSocial'
import style from './Page1.module.css'

function Page1(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra os 10 alimentos mais perigosos para gatos, os riscos que oferecem à saúde felina e como proteger seu pet. Garanta uma vida longa e saudável ao seu gato com dicas essenciais." />
                <meta property="og:title" content="Os 10 Alimentos Mais Perigosos para Gatos" />
                <meta property="og:description" content="Descubra os 10 alimentos mais perigosos para gatos, os riscos que oferecem à saúde felina e como proteger seu pet. Garanta uma vida longa e saudável ao seu gato com dicas essenciais." />
                <meta property="og:url" content="https://mundo-felino-2.com.br/Blogs/os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato" />
                <title>Os 10 Alimentos Mais Perigosos para Gatos</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>Os 10 Alimentos Mais Perigosos para Gatos: Proteja o Seu Gato</h1>
                <p className={style.articleText}>Manter a alimentação do seu gato saudável é essencial para sua longevidade e bem-estar. Uma das frases de Jake Perry, dono da gata que viveu por muito tempo, registrada no Guinness World Records, Crème Puff, é um exemplo claro disso. Ela alcançou a impressionante idade de 38 anos. Saiba mais... Contudo, muitos alimentos que são inofensivos para seres humanos podem ser extremamente prejudiciais, ou até fatais, para os felinos. Também existem alimentos saudáveis que são recomendados, mas isso é para outro momento. Se você deseja garantir que seu gato se mantenha saudável e feliz, é fundamental saber quais alimentos devem ser evitados. Confira os 10 alimentos mais perigosos para os gatos e como protegê-los.</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1. Chocolate</h2>
                        <p className={style.articleListText}>O chocolate contém teobromina, uma substância altamente tóxica para gatos. Lembro da vez que dei uma bolinha de cereal com chocolate para um pet pequeno, e no outro dia ele havia falecido. Nunca mais dei chocolate para animais. Mesmo pequenas quantidades podem causar vômitos, diarreia, tremores e, em casos graves, danos ao sistema nervoso e até a morte. Mantenha qualquer produto que contenha chocolate fora do alcance do seu gato.</p>
                        <img className={style.articleListImg} src='/img/blog/page1/imagem1.jpg' alt="Trufas de Chocolate em Ordem" title='Trufas de Chocolate'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>2. Cebola e Alho</h2>
                        <p className={style.articleListText}>Cebola e alho, tanto crus quanto cozidos, podem causar danos às células vermelhas do sangue dos gatos, levando a uma condição chamada anemia. O consumo excessivo pode resultar em fraqueza, letargia e problemas respiratórios.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>3. Leite e Produtos Lácteos</h2>
                        <p className={style.articleListText}>Embora possa parecer estranho dizer que leite faz mal para gatos, algo que eles geralmente adoram, a maioria dos felinos é intolerante à lactose, o que pode causar dores abdominais, diarreia e vômitos. Isso mostra a importância de conhecer bem seu gato. Caso não tenha condições de levá-lo ao veterinário, observe o comportamento, as emoções e as fezes após oferecer leite. Mesmo assim, é melhor evitar e optar por alimentos específicos para gatos.</p>
                        <img className={style.articleListImg} src='/img/blog/page1/imagem2.jpg' alt="2 Potes de leite" title='Potes de Leite'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>4. Uvas e Passas</h2>
                        <p className={style.articleListText}>Uvas e passas podem causar insuficiência renal aguda em gatos, embora os motivos exatos ainda não sejam totalmente compreendidos. Mesmo pequenas quantidades podem ser fatais, então nunca ofereça essas frutas ao seu felino.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>5. Álcool</h2>
                        <p className={style.articleListText}>O álcool é altamente tóxico para gatos, podendo causar depressão do sistema nervoso central, dificuldade respiratória e até falência hepática. Mesmo pequenas quantidades de bebidas alcoólicas podem ser perigosas para o seu animal.</p>
                        <img className={style.articleListImg} src='/img/blog/page1/imagem4.jpg' alt="Garrafas de Bebidas alcoolicas" title='Garrafas de Bebidas Alcoolicas'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>6. Xilitol</h2>
                        <p className={style.articleListText}>O xilitol é um adoçante artificial encontrado em muitos produtos como balas, gomas de mascar e alimentos sem açúcar. Para os gatos, o xilitol pode causar uma queda rápida nos níveis de açúcar no sangue, levando a convulsões e falência hepática.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>7. Carnes Cruas ou Mal Cozidas</h2>
                        <p className={style.articleListText}>Embora os gatos sejam carnívoros, carnes cruas ou mal cozidas podem conter bactérias e parasitas que causam intoxicação alimentar, como Salmonella ou E. coli. Afinal, até nós precisamos preparar as carnes para consumo. Se isso não fosse um problema, teríamos vários pratos de carne crua disponíveis no Brasil com frequência.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>8. Ossos de Frango ou Peixe</h2>
                        <p className={style.articleListText}>Os ossos de frango e peixe podem se quebrar facilmente, causando obstruções ou perfurações no trato digestivo dos gatos. Em desenhos animados, vemos personagens comendo peixes e tirando o esqueleto da boca, mas, na realidade, consumir esses ossos quebradiços representa um risco de asfixia. Por isso, é importante evitar dar esses ossos ao seu felino.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>9. Cafeína</h2>
                        <p className={style.articleListText}>Você pode ser um amante do café, mas isso não significa que seu gato também seja. Café, chá e outros produtos com cafeína podem afetar o sistema nervoso e cardiovascular dos gatos. Em gatos enérgicos, como o Bengal, a cafeína pode causar agitação, aumento da frequência cardíaca e até convulsões.</p>
                        <img className={style.articleListImg} src='/img/blog/page1/imagem3.jpg' alt="grão de cafe representado cafeinas" title='grão de café'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>10. Alimentos Gordurosos ou Processados</h2>
                        <p className={style.articleListText}>Comidas ricas em gorduras ou altamente processadas, como fast food e frituras, podem causar obesidade, pancreatite e problemas digestivos nos gatos. Além disso, são ineficazes em fornecer os nutrientes necessários e essenciais para a saúde felina!.</p>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                <RedeSocial link1={"https://mundo-felino-2.com.br/Blogs/os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato"} link2={"https://mundo-felino-2.com.br/Blogs/os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato"} link3={"https://mundo-felino-2.com.br/Blogs/os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato"}/>
                </div>
                <footer className={style.articleFooter}>
                    <div>
                        <h3>Como Proteger Seu Gato</h3>
                        <p>A melhor forma de proteger seu gato é educar-se sobre os alimentos que são seguros e saudáveis para ele. Há alimentos que, de forma moderada, podem ser benéficos para o seu felino. Evite dar-lhe alimentos destinados ao consumo humano e, mesmo ao comprar produtos específicos para gatos, leia os rótulos cuidadosamente. Se suspeitar que seu gato ingeriu algo perigoso em excesso, procure imediatamente a orientação de um veterinário.</p>
                    </div>
                    <div>
                        <h3>Conclusão</h3>
                        <p>A alimentação dos gatos é um fator crucial para sua saúde e bem-estar. Ao manter os alimentos perigosos fora do alcance e oferecer uma dieta balanceada e específica para felinos, você estará garantindo que seu amigo de quatro patas tenha uma vida longa e saudável. Lembre-se: a prevenção é sempre a melhor opção!</p>
                    </div>
                </footer>
            </article>
            <div className={style.recomendados}>
             <Recomendados />
            </div>
            <Recomendados2 />
        </div>
    )
}
export default Page1