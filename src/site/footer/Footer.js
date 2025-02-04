import style from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className={style.container}>
            <div>
                <><b>Mundo Felino 2</b></>
                <ul>
                    <li><a href="https://youtube.com/@mundofelino-2?si=Wb0z4qM17zf0x6Le" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                    <li><a href="https://www.tiktok.com/@mundofelino_2?_t=8sIFNmwwaMH&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                    <li><a href="https://k.kwai.com/u/@MundoFelinoBr/omzCvl71" target="_blank" rel="noopener noreferrer">Kwai</a></li>
                </ul>
            </div>
            <div>
                <><b>Lucas Barbosa de Sousa
                    <br></br>(Perfil Profissional)</b></>
                <ul>
                    <li><a href='https://portfolio-luwreal.vercel.app/' target='_blank' rel='noopener noreferrer'>PortFólio</a></li>
                    <li><a href='https://www.instagram.com/diverteck/profilecard/?igsh=Z3NtMXJ3NHcxZ2M4' target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div>
                <><b>Politicas</b></>
                <ul>
                    <li><Link to="/politica-e-privacidades" style={{color: '#fff', textDecoration: 'none'}}>Politica e Privacidade</Link></li>
                    <li><Link to="/politica-e-privacidades" style={{color: '#fff', textDecoration: 'none'}}>Cookies</Link></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer