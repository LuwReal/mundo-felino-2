import style from './Menu.module.css'
import { useState } from 'react'

function Menu({Loja, Blog, Sobre}){

    let [ativa, setAtiva] = useState('none')

    function teste(){
        setAtiva('none')

    }
    function teste28(){
        setAtiva('block')
    }
    let teste23 = {
        display: ativa
    }
    function teste25(event){
        event.stopPropagation();
    }

    return(
        <div className={style.container}>
            <div className={style.containerMenu}>
                <img className={style.logoTipoMundoFelino2} src='./img/Mundo Felino 2.png' alt='Imagem da Logo Mundo Felino 2' />
                <div>
                    <h1 className={style.Titulo}>Mundo Felino 2</h1>
                    <nav>
                        {Loja}
                        {Blog}
                        {Sobre}
                    </nav>
                </div>
                <div className={style.menuSocial} onClick={teste28}>
                    <div className={style.span}></div>
                    <div className={style.span}></div>
                    <div className={style.span}></div>
                </div>
            </div>
            <div className={style.subMenu} onClick={teste} style={teste23}>
                <div className={style.subMenuConteudo} onClick={teste25} style={{display: 'block',}}>
                    <p>Testetestesssetet</p>
                    <p>Testetestetetet</p>
                    <p>Testetestetetet</p>
                    <p>Testetestetetet</p> 
                </div>
                
            </div>
        </div>
    )
}

export default Menu