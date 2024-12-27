import { Helmet } from 'react-helmet-async'
import Recomendados from '../componets/Recomendados'
import RedeSocial from '../componets/RedeSocial'
import style from './Page7.module.css'

function Page7(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra 5 pragas comuns que seu gato pode eliminar em sua casa de forma natural e eficaz. Mantenha seu lar mais seguro e livre de pestes com a ajuda do seu felino." />
                <meta property="og:title" content="5 Pragas Que Seu Gato Vai Eliminar na Sua Casa" />
                <meta property="og:description" content="Descubra 5 pragas comuns que seu gato pode eliminar em sua casa de forma natural e eficaz. Mantenha seu lar mais seguro e livre de pestes com a ajuda do seu felino." />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>5 Pragas Que Seu Gato Vai Eliminar na Sua Casa</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>5 Pragas Que Seu Gato Vai Eliminar na Sua Casa</h1>
                <p className={style.articleText}>Você sabia que seu gato é mais do que um pet adorável e fofo? Sim, ele realmente é mais do que isso. Apesar de serem domésticos, seus instintos naturais continuam ativos a todo momento, despertando um verdadeiro caçador de pragas, que pode ajudar a manter sua casa livre de pragas. Acredite, eles têm um grande impacto no ecossistema global. Afinal de contas, é registrado que, no mundo, há mais de 600 milhões de gatos domésticos, sem contar os que vivem nas ruas, podendo aumentar facilmente esse número para a casa dos bilhões, o que torna possível a eliminação de bilhões de pragas todos os anos. Confira cinco inimigos que seu amigo felino pode ajudar a controlar em sua casa.</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>Ratos e Camundongos</h2>
                        <p className={style.articleListText}>Os gatos são conhecidos por serem excelentes caçadores de roedores. Como prova disso, temos a história: eles foram bastante influentes na cultura tradicional japonesa, ajudando os fornecedores de seda no Japão antigo. Sem contar que foram injustiçados na Europa, durante a Idade Média, pelo fato de serem associados às bruxas, principalmente os gatos pretos. Eles eram caçados frequentemente, o que levou a um alto crescimento na população de ratos, influenciando na sua propagação. Além disso, o cheiro de gato na casa pode fazer com que os roedores pensem duas vezes antes de se aproximarem.</p> 
                        <img className={style.articleListImg} src='/img/blog/page2/gato-obersevanndo-um-rato.jpg' alt="Gato Obersevando Rato" title='Gato e Rato'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>Baratas</h2>
                        <p className={style.articleListText}>Sim, elas são o inimigo da humanidade que realmente é resistente a nós, pois nem a bomba atômica as derruba, nem o tempo as incomoda. Vivendo das sobras, não nos deixam em paz. A barata, então, quem é a solução? O gato! Apesar de não ser comum eliminarem as baratas, eles gostam de brincar com elas, o que acaba resultando na sua eliminação. Mas fica a dica: o gato que recebe uma alimentação completa e balanceada dificilmente comerá a barata que ele caçou, o gato não pode comer barata, pois as baratas domésticas são responsáveis pela transmissão de diversas doenças, <em>Gato e Barata</em></p>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>Lagartixas</h2>
                        <p className={style.articleListText}>As pequenas lagartixas que aparecem nas paredes <img style={{width: '15rem', height: '15rem', float: 'right', display: 'flex'}}className={style.articleListImg} src='/img/blog/page2/gato-predando-sua-presa.jpg' alt="Gato predando Lagartixa" title='Gato e Lagartixa'/>  ou tetos de sua casa podem se tornar um brinquedo... quero dizer, um alvo para seu gato. Além de caçar, os felinos podem ser bastante persistentes em espantar esses visitantes indesejados.</p>
                    </li>
                
                    <li>
                        <h2 className={style.articleListItem}>Moscas e Mosquitos</h2>
                        <p className={style.articleListText}>Talvez a solução definitiva contra os insetos voadores da sua casa não seja o gato caçador, mas ele certamente vai ajudá-lo. Assim, ele poderá treinar seus reflexos e instintos naturais, brincando... caçando esses pequenos incômodos.</p>
                    </li>
                
                    <li>
                        <h2 className={style.articleListItem}>Aranhas</h2>
                        <p className={style.articleListText}>Essa dica serve para qualquer praga que citei acima. Caso você tenha desenvolvido fobia de aranhas no passado e qualquer coisinha em relação a elas te deixe em um estado de pavor, uma das coisas que pode te ajudar é ter um gato em casa. Eles podem acabar sendo um aliado no controle dessas pragas. Muitos gatos se interessam pelo movimento das aranhas e costumam caçá-las rapidamente, ajudando a aliviar sua fobia em relação a esses aracnídeos.</p>
                        <img className={style.articleListImg} src='/img/blog/page2/gato-e-aranha.jpg' alt="Foto Partida ao meio Com Gato do Lado Direito e Arnhado do Esquerdo" title='Gato e Aranha'/>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                     <RedeSocial />
                </div>
                <footer className={style.articleFooter}>
                    <h3>Cuidados Importantes</h3>
                    <p>Embora seja de grande ajuda ter um gato no controle de pragas em sua residência, é importante ficar alerta para garantir que ele esteja saudável e seguro, pois ele ainda continua sendo um animal doméstico:</p>
                    <dl>
                        <dt>Evite exposição a produtos químicos:</dt>
                        <dd>Certifique-se de que sua casa está livre de venenos ou pesticidas que possam afetar seu gato.</dd>
                        <dt>Supervisão e segurança:</dt>
                        <dd>Não dependa completamente do seu gato para controle de pragas. Consulte um profissional para casos mais graves.</dd>
                        <dt>Alimentação adequada:</dt>
                        <dd>Mesmo sendo caçadores naturais, os gatos ainda precisam de uma dieta balanceada para se manterem saudáveis.</dd>
                    </dl>
                    <p>Seu gato não é apenas um animal de estimação; ele também pode ser um guardião silencioso da sua casa. Valorize essas habilidades naturais e aproveite a companhia dele enquanto mantém sua casa protegida!</p>
                </footer>
            </article>
            <Recomendados />
        </div>
    )
}
export default Page7