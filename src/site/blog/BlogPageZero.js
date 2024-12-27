import ProximaPageBlog from "./componets/ProximaPageBlog"

function PageBlogZero(){
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ProximaPageBlog />
            <img src="./img/nãoaConteudo.jpg" alt="Não a Conteudo"/>
            <ProximaPageBlog />
        </div>
    )
}
export default PageBlogZero