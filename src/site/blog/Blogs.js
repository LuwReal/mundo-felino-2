import style from './Blogs.module.css'
import Post from './componets/Post'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import ProximaPageBlog from './componets/ProximaPageBlog';

function Blogs(){

    let listPost = ["os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato", "5-pragas-que-seu-gato-vai-eliminar-na-sua-casa" , "os-5-ranks-mais-absurdos-dos-gatos", "10-recordes-de-gato-no-guinness-worldrecords",
        "10-recordes-de-gato-no-guinness-world-records", "maine-coon-tudo-sobre-a-maior-raca-de-gato"
    ]

    
    return(
        <div className={style.containerBlog}>
            <Helmet>
                <meta name="description" content="Blogs de Curiosidade de Gatos" />
                <meta property="og:title" content="Blog Mundo Felino 2" />
                <meta property="og:description" content="Blog Mundo Felino 2 Curiosidades" />
                <meta property="og:url" content="https://mundo-felino-2.com.br/Blogs" />
                <title>Mundo Felino 2</title>
            </Helmet>
            <div className={style.conteundoBlogs}>
            {/*Post 1*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page1/alimentos-perigosos.jpg' alt="Imagem Represetativa alimentos mais perigosos para gatos"/>} 
            Titulo={'Os 10 Alimentos Perigosos para Gatos'}
            Paragrafo={'Descubra os 10 alimentos mais perigosos para gatos, os riscos que oferecem à saúde...'} 
            Data={'Publicado em: 03 de Janeiro de 2025'}
            SobreMais={<Link to={`/Blogs/${listPost[0]}`}>Ver Artigo</Link>}
            />
            {/*Post 2*/}
            <Post     
            Imagem={<img className={style.imgPost} src='/img/blog/page2/pragas-gatos.jpg' alt="imagem pragas comuns que seu gato pode eliminar"/>} 
            Titulo={'5 Pragas Que Gato Eliminar na Sua Casa'}
            Paragrafo={'Descubra 5 pragas comuns que seu gato pode eliminar em sua casa de forma natural e eficaz...'} 
            Data={'Publicado em: 03 de Janeiro de 2025'}
            SobreMais={<Link to={`/Blogs/${listPost[1]}`}>Ver Artigo</Link>}
            />
            {/*Post 3*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page3/os-5-ranks-mais-absurdos-dos-gatos-em-relacao-a-outros-animais.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>} 
            Titulo={'Os 5 Ranks Mais Absurdos Dos Gatos'}
            Paragrafo={'Descubra os 5 ranks mais absurdos que os gatos conquistaram, de populares a...'} 
            Data={'Publicado em: 03 de Janeiro de 2025'}
            SobreMais={<Link to={`/Blogs/${listPost[2]}`}>Ver Artigo</Link>}
            />
            {/*Post 4*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page4/10-recordes-de-gato-no-guinness-world-records.jpg' alt="Imagem representativa dos 10 recordes incríveis de gatos no Guinness World Records"/>} 
            Titulo={'10 Gatos no Guinness World...'}
            Paragrafo={'Descubra 10 recordes incríveis de gatos no Guinness World Records, incluindo o gato mais velho...'} 
            Data={'Publicado em: 03 de Janeiro de 2025'}
            SobreMais={<Link to={`/Blogs/${listPost[3]}`}>Ver Artigo</Link>}
            />
            {/*Post 5*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page5/verdadeiro-gato.jpg' alt="Imagem representativa o verdadeiro gato Siamês puro!."/>} 
            Titulo={'Descubra o Gato Siamês (Puro)...'}
            Paragrafo={'Saiba tudo sobre o verdadeiro gato Siamês puro! Descubra suas características únicas...'} 
            Data={'Publicado em: 03 de Janeiro de 2025'}
            SobreMais={<Link to={`/Blogs/${listPost[4]}`}>Ver Artigo</Link>}
            />
            {/*Post 6*/}
            <Post 
            Imagem={<img className={style.imgPost} src='/img/blog/page6/maine-coon.jpg' alt="Imagem representativa Maine Coon, a maior raça de gato doméstico!."/>} 
            Titulo={'Maine Coon: Maior Raça de Gato...'}
            Paragrafo={'Conheça o Maine Coon, a maior raça de gato doméstico! Descubra suas características...'} 
            Data={'Publicado em: 03 de Janeiro de 2025'}
            SobreMais={<Link to={`/Blogs/${listPost[5]}`}>Ver Artigo</Link>}
            />
            </div>
            <ProximaPageBlog page1={'2px solid #000'}/>
        </div>
    )
}
export default Blogs