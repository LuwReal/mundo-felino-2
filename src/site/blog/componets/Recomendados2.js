import style from './Recomendados2.module.css'
import { useNavigate } from 'react-router-dom';
import ProximaPageBlog from './ProximaPageBlog';

function Recomendados(){

      const navigate = useNavigate();
      let listPost = ["os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato", "5-pragas-que-seu-gato-vai-eliminar-na-sua-casa", "maine-coon-tudo-sobre-a-maior-raça-de-gato"]
      function link(a){
        navigate(`/Blogs/${listPost[(a)]}`)
      }
    
    return(
        <div className={style.container}>
            <ul className={style.blogList}>
                <li className={style.blogItem} onClick={() => {link(0)}}>
                    <img className={style.blogImage} src='/img/blog/page1/alimentos-perigosos.jpg' alt="Ilustração das 5 raças de gatos mais famosas: Siamês, Persa, Maine Coon, Bengal e Ragdoll."/>
                    <div className={style.blogContent}>
                        <h3>Os 10 Alimentos Perigosos para Gatos</h3>
                        <p>Descubra os 10 alimentos mais perigosos para gatos, os...</p>
                        <p><span className={style.stylesP}>Visite o Blog</span></p>
                    </div>
                </li>
                <li className={style.blogItem} onClick={() => {link(1)}}>
                    <img className={style.blogImage} src='/img/blog/page2/pragas-gatos.jpg' alt="Imagem representativa dos 5 gatos mais famosos do Japão, incluindo suas histórias e curiosidades."/>
                    <div className={style.blogContent}>
                        <h3>5 Pragas Que Gato Eliminar na Sua Casa</h3>
                        <p>Descubra 5 pragas comuns que seu gato pode eliminar...</p>
                        <p><span className={style.stylesP}>Visite o Blog</span></p>
                    </div>
                </li>
                <li className={style.blogItem} onClick={() => {link(2)}}>
                    <img className={style.blogImage} src='/img/blog/page6/maine-coon.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>
                    <div className={style.blogContent}>
                        <h3>Maine Coon: Maior Raça de Gato...</h3>
                        <p>Conheça o Maine Coon, a maior raça de gato...</p>
                        <p><span className={style.stylesP}>Visite o Blog</span></p>
                    </div>
                </li>
            </ul>
            <div className={style.ProximaPage}>
                <ProximaPageBlog />
            </div>
        </div>
    )
}
export default Recomendados