import style from './BlogsPage2.module.css'
import Post from './componets/Post'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ProximaPageBlog from './componets/ProximaPageBlog'

function BolgsPage2(){
    let listPostPage2 = ["Page7", "5-gatos-mais-famosos-do-japao", "os-5-ranks-mais-absurdos-dos-gatos", "10-recordes-de-gato-no-guinness-worldrecords",
        "10-recordes-de-gato-no-guinness-world-records", "maine-coon-tudo-sobre-a-maior-raça-de-gato"
    ]

    
    return(

        <div className={style.containerBlog}>
            <Helmet>
                <meta name="description" content="As 5 raças de gatos mais famosas e amadas do mundo" />
                <meta property="og:title" content="Raças de Gatos Famosas" />
                <meta property="og:description" content="Descubra as 5 raças de gatos mais conhecidas mundialmente e suas características marcantes." />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>Blog</title>
            </Helmet>
            <div className={style.conteundoBlogs}>
            {/*Post 1*/}
           <Post     
            Imagem={<img className={style.imgPost} src='/img/blog/page7/5-pragas-que-seu-gato-vai-eliminar-na-sua-casa.jpg' alt="Ilustração das 5 raças de gatos mais famosas: Siamês, Persa, Maine Coon, Bengal e Ragdoll."/>} 
            Titulo={'5 Pragas Que Gato Eliminar na Sua Casa'}
            Paragrafo={'Descubra 5 pragas comuns que seu gato pode eliminar em sua casa de forma natural e eficaz...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[0]}`}>Ver Artigo</Link>}
            />
            {/*Post 2*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page2/5-gatos-mais-famosos-do-japao-historia-curiosidade.jpg' alt="Imagem representativa dos 5 gatos mais famosos do Japão, incluindo suas histórias e curiosidades."/>} 
            Titulo={'5 Gatos Mais Famosos do Japão:'}
            Paragrafo={'Descubra os 5 gatos mais famosos do Japão, símbolos de sorte e cultura, incluindo o Maneki-Neko...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[1]}`}>Ver Artigo</Link>}
            />
            {/*Post 3*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page3/os-5-ranks-mais-absurdos-dos-gatos-em-relacao-a-outros-animais.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Os 5 Ranks Mais Absurdos Dos Gatos'}
            Paragrafo={'Descubra os 5 ranks mais absurdos que os gatos conquistaram, de populares a...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[2]}`}>Ver Artigo</Link>}
            />
            {/*Post 4*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page4/10-recordes-de-gato-no-guinness-world-records.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'10 Gatos no Guinness World...'}
            Paragrafo={'Descubra 10 recordes incríveis de gatos no Guinness World Records, incluindo o gato mais velho...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[3]}`}>Ver Artigo</Link>}
            />
            {/*Post 5*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page5/verdadeiro-gato-siamês.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Descubra o Gato Siamês (Puro)...'}
            Paragrafo={'Saiba tudo sobre o verdadeiro gato Siamês puro! Descubra suas características únicas...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[4]}`}>Ver Artigo</Link>}
            />
            {/*Post 6*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page6/maine-coon-a-maior-raça-de-gato.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Maine Coon: Maior Raça de Gato...'}
            Paragrafo={'Conheça o Maine Coon, a maior raça de gato doméstico! Descubra suas características...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[5]}`}>Ver Artigo</Link>}
            />
            </div>
            <ProximaPageBlog page2={'2px solid #000'}/>
        </div>
    )
}

export default BolgsPage2