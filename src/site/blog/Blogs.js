import style from './Blogs.module.css'
import Post from './componets/Post'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

function Blogs(){

    let listPost = ["as-5-racas-de-gatos-famosas", "5-gatos-mais-famosos-do-japao", "os-5-ranks-mais-absurdos-dos-gatos", "Rota4"]

    
    return(
        <div className={style.containerBlog}>
            <Helmet>
                <meta name="description" content="As 5 raças de gatos mais famosas e amadas do mundo" />
                <meta property="og:title" content="Raças de Gatos Famosas" />
                <meta property="og:description" content="Descubra as 5 raças de gatos mais conhecidas mundialmente e suas características marcantes." />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>Blog</title>
            </Helmet>
            {/*Post 1*/}
           <Post     
            Imagem={<img className={style.imgPost} src='/img/blog/page1/as-5-raças-de-gatos-mais-famosas-do-mundo.jpg' alt="Ilustração das 5 raças de gatos mais famosas: Siamês, Persa, Maine Coon, Bengal e Ragdoll."/>} 
            Titulo={'As 5 Raças de Gatos Mais Famosas:'}
            Paragrafo={'Descubra as 5 raças de gatos mais conhecidas mundialmente e suas características marcantes.'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[0]}`}>Ver Artigo</Link>}
            />
            {/*Post 2*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page2/5-gatos-mais-famosos-do-japao-historia-curiosidade.jpg' alt="Imagem representativa dos 5 gatos mais famosos do Japão, incluindo suas histórias e curiosidades."/>} 
            Titulo={'5 Gatos Mais Famosos do Japão:'}
            Paragrafo={'Descubra os 5 gatos mais famosos do Japão, símbolos de sorte e cultura, incluindo o Maneki-Neko...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[1]}`}>Ver Artigo</Link>}
            />
            {/*Post 3*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page3/os-5-ranks-mais-absurdos-dos-gatos-em-relacao-a-outros-animais.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Os 5 Ranks Mais Absurdos Dos Gatos'}
            Paragrafo={'Descubra os 5 ranks mais absurdos que os gatos conquistaram, de populares a...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[2]}`}>Ver Artigo</Link>}
            />
            {/*Post 4*/}
            <Post 
            Imagem={"https://via.placeholder.com/800x400"} 
            Titulo={'Page4'}
            Paragrafo={'Rota para a pagina 4'} 
            Data={'Publicado em: 10 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[3]}`}>Ver Artigo</Link>}
            />
            {/*Post 5*/}
            <Post 
            Imagem={"https://via.placeholder.com/800x400"} 
            Titulo={'Título do Post 1'}
            Paragrafo={'Este é um pequeno parágrafo para descrever o conteúdo do post 1.'} 
            Data={'Publicado em: 10 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[2]}`}>Ver Artigo</Link>}
            />
            {/*Post 6*/}
            <Post 
            Imagem={"https://via.placeholder.com/800x400"} 
            Titulo={'Título do Post 1'}
            Paragrafo={'Este é um pequeno parágrafo para descrever o conteúdo do post 1.'} 
            Data={'Publicado em: 10 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[2]}`}>Ver Artigo</Link>}
            />
        </div>
    )
}
export default Blogs