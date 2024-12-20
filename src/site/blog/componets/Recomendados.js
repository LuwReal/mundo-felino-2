import style from './Recomendados.module.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Recomendados(){

    const [style2, setStyle] = useState({
        position: 'static',
        transform: 'translateY(0)',  
        transition: 'transform 0.3s ease, position 0.3s ease', 
      });
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 300) {
            setStyle({
              position: 'fixed',
              transform: 'translateY(49%)', 
            });
          } else {
            setStyle({
              position: 'static',
              transform: 'translateY(0)', 
            });
          }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const navigate = useNavigate();
      let listPost = ["as-5-racas-de-gatos-famosas", "5-gatos-mais-famosos-do-japao", "os-5-ranks-mais-absurdos-dos-gatos"]
      function link(a){
        navigate(`/Blogs/${listPost[(a)]}`)
      }
    
    return(
        <div className={style.container}>
            <ul className={style.blogList} style={style2}>
                <li className={style.blogItem} onClick={() => {link(0)}}>
                    <img className={style.blogImage} src='/img/blog/page1/as-5-raças-de-gatos-mais-famosas-do-mundo.jpg' alt="Ilustração das 5 raças de gatos mais famosas: Siamês, Persa, Maine Coon, Bengal e Ragdoll."/>
                    <div className={style.blogContent}>
                        <h3>As 5 Raças de Gatos Mais Famosas:</h3>
                        <p>Já pensou quais são as raça mais procuradas?</p>
                        <a href="https://exemplo1.com" target="_blank" rel="noopener noreferrer">
                            Visite o Blog
                        </a>
                    </div>
                </li>
                <li className={style.blogItem} onClick={() => {link(1)}}>
                    <img className={style.blogImage} src='/img/blog/page2/5-gatos-mais-famosos-do-japao-historia-curiosidade.jpg' alt="Imagem representativa dos 5 gatos mais famosos do Japão, incluindo suas histórias e curiosidades."/>
                    <div className={style.blogContent}>
                        <h3>5 Gatos Mais Famosos do Japão:</h3>
                        <p>Aprenda mais sobre os gato e a cultura japonesa</p>
                        <a href="https://exemplo2.com" target="_blank" rel="noopener noreferrer">
                            Visite o Blog
                        </a>
                    </div>
                </li>
                <li className={style.blogItem} onClick={() => {link(2)}}>
                    <img className={style.blogImage} src='/img/blog/page3/os-5-ranks-mais-absurdos-dos-gatos-em-relacao-a-outros-animais.jpg' alt="Imagem representativa dos 5 ranks mais absurdos dos gatos em relação a outros animais."/>
                    <div className={style.blogContent}>
                        <h3>Os 5 Ranks Mais Absurdos Dos Gatos</h3>
                        <p>Gatos e suas conquistas no reino animal</p>
                        <a href="https://exemplo3.com" target="_blank" rel="noopener noreferrer">
                            Visite o Blog
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Recomendados