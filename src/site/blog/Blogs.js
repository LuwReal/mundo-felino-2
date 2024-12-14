import style from './Blogs.module.css'
import Post from './componets/Post'
import { Link } from 'react-router-dom'


function Blogs(){

    let listPost = ["10-Gatos", "Curiosidades", "5-Gatos"]

    
    return(
        <div className={style.containerBlog}>
           <Post 
            Imagem={"https://via.placeholder.com/800x400"} 
            Titulo={'Título do Post 1teste'}
            Paragrafo={'Este é um pequeno parágrafo para descrever o conteúdo do post 1.'} 
            Data={'Publicado em: 10 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[0]}`}>Lojaaaaaaa</Link>}
            />
            <Post 
            Imagem={"https://via.placeholder.com/800x400"} 
            Titulo={'Título do Post 1'}
            Paragrafo={'Este é um pequeno parágrafo para descrever o conteúdo do post 1.'} 
            Data={'Publicado em: 10 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[1]}`}>Lojaaaaaaa</Link>}
            />
            <Post 
            Imagem={"https://via.placeholder.com/800x400"} 
            Titulo={'Título do Post 1'}
            Paragrafo={'Este é um pequeno parágrafo para descrever o conteúdo do post 1.'} 
            Data={'Publicado em: 10 de Dezembro de 2024'}
            SobreMais={<Link to={`/Blogs/${listPost[2]}`}>Lojaaaaaaa</Link>}
            />
        </div>
    )
}
export default Blogs