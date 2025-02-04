import { Helmet } from 'react-helmet-async'
import Recomendados from '../componets/Recomendados'
import Recomendados2 from '../componets/Recomendados2'
import RedeSocial from '../componets/RedeSocial'
import style from './Page9.module.css'

function Page9(){
    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Descubra por que os gatos são essenciais na cultura japonesa, explorando sua presença na mitologia, arte, folclore, economia tradicional e cultura pop do Japão." />
                <meta property="og:title" content="5 Razões Que Tornaram os Gatos Essenciais na Cultura Japonesa" />
                <meta property="og:description" content="Descubra por que os gatos são essenciais na cultura japonesa, explorando sua presença na mitologia, arte, folclore, economia tradicional e cultura pop do Japão." />
                <meta property="og:url" content="https://mundo-felino-2.com.br/Blogs-Page2/5-raz%C3%B5es-que-tornaram-os-gatos-essenciais-na-cultura-japonesa" />
                <title>5 Razões Que Tornaram os Gatos Essenciais na Cultura Japonesa</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>5 Razões Que Tornaram os Gatos Essenciais na Cultura Japonesa</h1>
                <p className={style.articleText}>Você sabia que os gatos são bastante populares no Japão? Isso se deve a diversos fatores, desde a mitologia até a arte moderna. Esses felinos conquistaram um espaço especial no coração do Japão. Pode-se dizer que lá não falta conteúdo para explorar, especialmente para quem é apaixonado por gatos.</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1. Importância na Cultura Tradicional: A Relação com a Seda</h2>
                        <p className={style.articleListText}>Na história do Japão, os gatos tiveram um papel prático e significativo na proteção da produção de seda. Os gatos eram mantidos em vários lugares, como palácios, templos e cidades. Isso se deve à sua importância em proteger os valiosos bichos-da-seda de roedores, ajudando a preservar uma das indústrias mais importantes do país. Essa relação estreita com a seda destaca como os gatos foram integrados à vida cotidiana e à economia tradicional japonesa. Não é por isso que os gatos japoneses dão a impressão de serem "aposentados" por lá.</p>
                    </li>
                
                    <li>
                        <h2 className={style.articleListItem}>2. Presença na Mitologia e Folclore</h2>
                        <p className={style.articleListText}>Na mitologia japonesa, os gatos são frequentemente associados a histórias místicas. Uma das lendas mais conhecidas se baseia na idade de um gato que, ao atingir uma certa idade, vira um "Bakeneko", um gato que pode se transformar em um espírito ou demônio, ou, por lá, o famoso "Youkai". Apesar de assustadoras, essas histórias refletem o respeito que os japoneses têm pelos gatos como seres misteriosos e poderosos. Na minha opinião, essa história foi projetada e contada para crianças como uma forma mais simples de explicar o ciclo da vida, especialmente quando um gato chega ao fim da sua jornada por conta da velhice.</p>
                        <img className={style.articleListImg} src='/img/blog/page9/arte-do-folcore-japones-com-gato.jpg' alt="Pintura do Folclore Japones" title='Pintura do Folclore japones'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>3. Inspiração para Arte e Literatura</h2>
                        <p className={style.articleListText}>Os gatos são temas recorrentes na arte e literatura japonesa. Caso você consuma conteúdo de origem do país, frequentemente verá referências a eles. Desde estampas em roupas e romances modernos, como "Eu Sou um Gato" de Natsume Sõseki, até animes, maid cafés, restaurantes e parques de diversão, os felinos são usados para explorar a relação entre humanos e a natureza, além de simbolizar independência e introspecção.</p>
                        <img className={style.articleListImg} src='/img/blog/page9/livros-de-natsume-soseki.jpg' alt="Livros de Natsume Soseki" title='Livros de Natsume Soseki'/>
                    </li>

                    <li>
                        <h2 className={style.articleListItem}>4. Gatos nas Ilhas e Cidades</h2>
                        <p className={style.articleListText}>O Japão é conhecido por suas "ilhas dos gatos", como Tashirojima e Aoshima. Sim, muito gato mesmo! Já pensou em uma fileira gigante de gatos atrás de você? Nessas ilhas, a população de gatos supera a humana. Essas ilhas são ótimas para conhecer pessoas com o mesmo gosto por gatos, pois elas atraem turistas do mundo inteiro. Além disso, bairros urbanos como Yanaka, em Tóquio, celebram a presença dos gatos com lojas e eventos temáticos.</p>    
                    </li>    

                    <li>
                        <h2 className={style.articleListItem}>5. Influência na Cultura Pop</h2>
                        <p className={style.articleListText}>Personagens felinos, como o icônico Hello Kitty e Jiji, o gato da bruxa Kiki no filme "O Serviço de Entregas da Kiki", entre outros, são exemplos de como os gatos têm uma facilidade de aceitação pela população japonesa. Esses personagens reforçam o papel dos gatos como símbolos de fofura, magia e companheirismo, fazendo parte do termo "Kawaii".</p>
                        <img className={style.articleListImg} src='/img/blog/page9/gatos-do-japao.jpg' alt="Gatos Famosos da Cultura Japonesa" title='Gatos Famosos da Cultura Japonesa'/>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                <RedeSocial link1={"https://mundo-felino-2.com.br/Blogs-Page2/5-raz%C3%B5es-que-tornaram-os-gatos-essenciais-na-cultura-japonesa"} link2={"https://mundo-felino-2.com.br/Blogs-Page2/5-raz%C3%B5es-que-tornaram-os-gatos-essenciais-na-cultura-japonesa"} link3={"https://mundo-felino-2.com.br/Blogs-Page2/5-raz%C3%B5es-que-tornaram-os-gatos-essenciais-na-cultura-japonesa"}/>
                </div>
                <div className={style.articleFooter}>
                    <h3>Conclusão</h3>
                    <p>Isso demonstra que os gatos são mais do que simples animais de estimação no Japão. Eles conquistaram e fazem parte integral da cultura, influenciando a arte, o folclore e até mesmo o comércio. Ao explorar essas conexões, podemos entender melhor por que o Japão tem uma relação tão especial com esses felinos fascinantes.</p> 
                </div>
            </article>
            <div className={style.recomendados}>
                <Recomendados />
            </div>
            <Recomendados2 />
        </div>
    )
}
export default Page9