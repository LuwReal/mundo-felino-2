import style from './Post.module.css'



function Post({Imagem, Titulo, Paragrafo, Data, SobreMais, teste48}){
    return(
        <div className={style.container}>
           <div className={style.blogContainer}>
                <div className={style.post}>
                    {Imagem}
                    <h2 className={style.postTitle}>{Titulo}</h2>
                    <p className={style.postParagraph}>{Paragrafo}</p>
                    <p className={style.postDate}>{Data}</p>
                    {SobreMais}
                    {teste48}
                </div>
            </div>
        </div>
    )
}
export default Post