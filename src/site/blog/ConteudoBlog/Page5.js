import Recomendados from '../componets/Recomendados'
import Recomendados2 from '../componets/Recomendados2'
import RedeSocial from '../componets/RedeSocial'
import { Helmet } from 'react-helmet-async'
import style from './Page5.module.css'

function Page5(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Saiba tudo sobre o verdadeiro gato Siamês puro! Descubra suas características únicas, curiosidades fascinantes e dicas essenciais de cuidados neste guia completo." />
                <meta property="og:title" content="Descubra o Verdadeiro Gato Siamês (Puro): Guia Completo com Curiosidades e Cuidados!" />
                <meta property="og:description" content="Saiba tudo sobre o verdadeiro gato Siamês puro! Descubra suas características únicas, curiosidades fascinantes e dicas essenciais de cuidados neste guia completo." />
                <meta property="og:url" content="https://mundo-felino-2.com.br/Blogs/10-recordes-de-gato-no-guinness-world-records" />
                <title>10 Recordes de Gato no Guinness World Records</title>
            </Helmet>
            <article className={style.articleContainer}>  
                <h1 className={style.articleTitle}>Descubra o Verdadeiro Gato Siamês (Puro): Guia Completo com Curiosidades e Cuidados!</h1>
                <p className={style.articleText}>O gato siamês é conhecido por sua aparência angelical, com olhos azuis intensos e um corpo esguio, mas não se engane: sua energia e comportamento ativo são tudo, menos angelicais. Talvez "Energia" fosse seu sobrenome! Ele é facilmente identificado por seu corpo esguio, de tamanho médio, com músculos bem definidos e uma cabeça marcadamente triangular. Sua pelagem é curta e sedosa, destacando-se pelos pontos de cor mais escura nas extremidades do corpo (orelhas, patas, cauda e máscara facial). O restante do corpo tem uma cor que aparenta ser cinza, mas é considerada creme ou bege.
                Dentro da raça siamesa, temos variantes, e uma delas é a moderna raça Siamese (o gato Thai).
                Uma das características que é de se admirar são os seus olhos azuis, que, quando se olha profundamente, tornam sua fofura ainda mais penetrante e atraente.
                </p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>Comportamento e Personalidade</h2>
                        <p className={style.articleListText}>Os gatos siameses são conhecidos por sua natureza extremamente sociável e afetuosa. Apesar de seu jeito simples e simpático, eles tendem a buscar a socialização com seus donos com mais frequência do que outras raças, de forma gentil, podendo se tornar muito apegados aos seus donos, buscando constantemente atenção e companhia. Por isso, tendem a miar mais frequentemente, o que se torna uma característica marcante, com miados um pouco mais altos e sonoros do que os dos gatos comuns.</p>
                        <p className={style.articleListText}>Além disso, os siameses são gatos inteligentes. Isso ocorre devido à sua curiosidade, o que faz com que seu desenvolvimento intelectual seja bem desenvolvido. Juntando sua curiosidade e apego, eles se adaptam facilmente a novos ambientes e se envolvem em brincadeiras com seus donos para chamar a atenção.</p>             
                        <img className={style.articleListImg} src='/img/blog/page5/gato-siames-1.jpg' alt="Gato siames olhando diretamente para o visor da camera" title='gato siames'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>Cuidados e Manutenção</h2>
                        <p className={style.articleListText}>Por ser um gato de raça, isso já é motivo para ter um cuidado extra, mas aqui vão algumas dicas: apesar de ter uma pelagem curta, isso não significa que se deva ignorar a sua escovação. Ela deve ser feita pelo menos uma vez por semana, ajudando em várias áreas da saúde do seu felino, além de ser uma terapia para você. Como foi dito, sua personalidade curiosa, intelectual e ativa pede um ambiente enriquecido, com brinquedos e oportunidades para explorar. Manter a estimulação mental é fundamental para evitar comportamentos destrutivos.</p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>Saúde</h2>
                        <p className={style.articleListText}>Os gatos siameses são, em geral, uma raça saudável, mas como todas as raças, podem ser propensos a algumas condições de saúde específicas. Por isso, deve-se ter um cuidado extra, principalmente com problemas respiratórios devido à sua estrutura facial, problemas cardíacos (como a cardiomiopatia hipertrofica) e doenças oculares, como o estrabismo.</p>
                        <p className={style.articleListText}>Nota: as informações são de caráter informativo e não devem ser usadas como orientação. Em caso de dúvida, leve seu animal a um veterinário mais próximo.</p>
                        <img className={style.articleListImg} src='/img/blog/page5/gato-siames-2.jpg' alt="gato siames de tons de cores escura no rosto e corpo meio berge olhando parao visor da camera" title='Gato Siames'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>História</h2>
                        <p className={style.articleListText}>Nessa altura do campeonato, você já deve ter percebido que a estrutura diferente do gato tradicional siamês tem alguma origem. Acredita-se que sua origem seja no Sudoeste Asiático, na Tailândia. Por sua beleza incomum, eram vistos somente na realeza e em templos sagrados. Nesta região, são conhecidos como Diamante-Lua, o que realmente combina com sua aparência. De lá, foram levados à Inglaterra pelos colonizadores em 1884, de onde se espalharam. Em 2007, uma variação desses gatos siameses, conhecida popularmente como Old Style ou Traditional, ganhou reconhecimento pela TICA como uma nova raça à parte, chamada Thai. São conhecidos desde 1330, sendo mencionados em um poema, "Livro de Poemas do Gato", que relata que estavam exclusivamente nas mãos da realeza.</p>
                        <img className={style.articleListImg} src='/img/blog/page5/gato-siames-3.jpg' alt="Mãe gata da raça siames com seus filhotes brincando" title='Mãe Gata e Seus Filhotes'/>
                    </li>
                    
                </ul>
                <div className={style.redesSocial}>
                <RedeSocial link1={"https://mundo-felino-2.com.br/Blogs/10-recordes-de-gato-no-guinness-world-records"} link2={"https://mundo-felino-2.com.br/Blogs/10-recordes-de-gato-no-guinness-world-records"} link3={"https://mundo-felino-2.com.br/Blogs/10-recordes-de-gato-no-guinness-world-records"}/>
                </div>
                <footer className={style.articleFooter}>
                        <h2>Conclusão</h2>
                        <p className={style.articleListText}>O gato siamês é uma escolha popular para famílias e indivíduos que buscam um companheiro leal, amoroso e enérgico. Sua personalidade marcante e aparência única fazem dele um dos felinos mais especiais do mundo, principalmente seu rosto, que transmite um toque de elegância. Com os cuidados adequados, o siamês pode ser um membro adorável e duradouro da família.</p>
                </footer>
            </article>
            <div className={style.recomendados}>
                <Recomendados />
            </div>
            <Recomendados2 />
        </div>
    )
}

export default Page5