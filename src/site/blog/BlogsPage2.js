import style from './BlogsPage2.module.css'
import Post from './componets/Post'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ProximaPageBlog from './componets/ProximaPageBlog'

function BolgsPage2(){
    let listPostPage2 = ["5-gatos-mais-famosos-do-japao", "5-provas-que-os-reflexos-do-gato-demonstram-sua-superioridade", "5-razões-que-tornaram-os-gatos-essenciais-na-cultura-japonesa", "gato-bengal-o-exotico-gato-que-encanta-com-sua-beleza-selvagem",
    "5-motivos-por-que-os-gatos-são-melhores-que-os-cães", "as-5-racas-de-gatos-famosas" 
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
            <ProximaPageBlog page2={'2px solid #000'}/>
            <div className={style.conteundoBlogs}>
            {/*Post 1*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page7/5-gatos-mais-famosos-do-japao-historia-curiosidade.jpg' alt="Imagem representativa dos 5 gatos mais famosos do Japão, incluindo suas histórias e curiosidades."/>} 
            Titulo={'5 Gatos Mais Famosos do Japão:'}
            Paragrafo={'Descubra os 5 gatos mais famosos do Japão, símbolos de sorte e cultura, incluindo o Maneki-Neko...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[0]}`}>Ver Artigo</Link>}
            />
            {/*Post 2*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page8/5-provas-que-os-reflexos-do-gato-demonstram-sua-superioridade.jpg' alt="Imagem representativa dos 5 gatos mais famosos do Japão, incluindo suas histórias e curiosidades."/>} 
            Titulo={'5 Provas Que Gatos Tem Os Reflexos...'}
            Paragrafo={'Descubra 5 provas incríveis que mostram como os reflexos dos gatos os tornam seres...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[1]}`}>Ver Artigo</Link>}
            />
            {/*Post 3*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page9/gato-da-cultura-japonesa.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Gatos na Cultura Japonesa'}
            Paragrafo={'Descubra por que os gatos são essenciais na cultura japonesa, explorando sua...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[2]}`}>Ver Artigo</Link>}
            />
            {/*Post 4*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page10/gato-bengal.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Gato Bengal: com sua Beleza Selvagem'}
            Paragrafo={'Descubra tudo sobre o gato Bengal, uma raça exótica que combina aparência selvagem...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[3]}`}>Ver Artigo</Link>}
            />
            {/*Post 5*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page11/gato-e-cachorro.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'5 Motivos: Gatos Melhores que os...'}
            Paragrafo={'Descubra 5 motivos incríveis que provam por que os gatos são melhores que os cães...'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[4]}`}>Ver Artigo</Link>}
            />
            {/*Post 6*/}
            <Post     
            Imagem={<img className={style.imgPost} src='/img/blog/page12/as-5-raças-de-gatos-mais-famosas-do-mundo.jpg' alt="Ilustração das 5 raças de gatos mais famosas: Siamês, Persa, Maine Coon, Bengal e Ragdoll."/>} 
            Titulo={'As 5 Raças de Gatos Mais Famosas:'}
            Paragrafo={'Descubra as 5 raças de gatos mais conhecidas mundialmente e suas características marcantes.'} 
            Data={'Publicado em: 22 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs-Page2/${listPostPage2[5]}`}>Ver Artigo</Link>}
            />
            </div>
            <ProximaPageBlog page2={'2px solid #000'}/>
        </div>
    )
}

export default BolgsPage2