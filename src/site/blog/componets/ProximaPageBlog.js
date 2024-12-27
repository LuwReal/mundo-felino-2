import style from './ProximaPageBlog.module.css'
import { Link } from 'react-router-dom'
function ProximaPageBlog({page1, page2, page3, page4}){

    return(
        <div className={style.container}>
            <nav className={style.containerConteudo}>
                <Link to="/Blogs" className={style.botaoProximaPage} style={{border: page1 ,}}>1</Link>
                <Link to="/Blogs-Page2" className={style.botaoProximaPage} style={{border: page2 ,}}>2</Link>
                <Link to="/Blogs-Page3" className={style.botaoProximaPage} style={{border: page3 ,}}>3</Link>
                <Link to="/Blogs-Page4" className={style.botaoProximaPage} style={{border: page4 ,}}>4</Link>
            </nav>  
        </div>
    )
}

export default ProximaPageBlog