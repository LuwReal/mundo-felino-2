import style from './Menu.module.css'
import { useState } from 'react'

function Menu({Loja, Blog, Sobre, Contato, teste}){

    let [ativa, setAtiva] = useState('none')

    function AtivaSubMenu(){
        setAtiva('none')

    }
    function AtivaMenu(){
        setAtiva('block')
    }
    let styleDisplay = {
        display: ativa
    }
    function NaoDesativaMenu(event){
        event.stopPropagation();
    }
/*oi*/
    return(
        <header className={style.container}>
            <div className={style.containerMenu}>
                <img className={style.logoTipoMundoFelino2} src='/img/mundo-felino-2.png' alt='Imagem da Logo do Mundo Felino 2' />
                <div>
                    <h1 className={style.Titulo}>Mundo Felino 2</h1>
                    <nav>
                        <div className={style.divNav}>
                        {Loja}
                        {Blog}
                        {Sobre}
                        {Contato} 
                        </div>
                    </nav>

                </div>
                <div className={style.menuSocial} onClick={AtivaMenu}>
                    <div className={style.span}></div>
                    <div className={style.span}></div>
                    <div className={style.span}></div>
                </div>
            </div>
            <div className={style.subMenu} onClick={AtivaSubMenu} style={styleDisplay}>
                <div className={style.subMenuConteudo} onClick={NaoDesativaMenu} style={{display: 'block',}}>
                    <p>Videos Mais Acessado Do YouTube</p>
                    <a href='https://youtube.com/shorts/Bw4UvMnftZI?si=c-X0P5z_sCXwuWbR' target="_blank" rel="noopener noreferrer">Sinais de que Seu Gato Ama Você!</a><br></br>
                    <a href='https://youtube.com/shorts/ny63vsYuME8?si=RHyqdaIPrVyZS1mC' target="_blank" rel="noopener noreferrer">As Melhores Brincadeiras para Es...</a><br></br>
                    <a href='https://youtube.com/shorts/P0GRo7fRIHk?si=ykfN_cIgc0V-FhSo' target="_blank" rel="noopener noreferrer">Cachorros vs Gatos: Quem Ganha... </a><br></br>
                </div>
            </div>
        </header>
    )
}

export default Menu