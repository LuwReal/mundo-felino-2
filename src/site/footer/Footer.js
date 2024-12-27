import style from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer className={style.container}>
            <div>
                <h5>Mundo Felino 2</h5>
                <ul>
                    <a href="https://youtube.com/@mundofelino-2?si=Wb0z4qM17zf0x6Le"><li>Youtube</li></a>
                    <a href="https://www.instagram.com/mundo_felino_2/profilecard/?igsh=MTI0bjV0azFhcHAydA=="><li>Instagram</li></a>
                    <a href="https://www.tiktok.com/@mundofelino_2?_t=8sIFNmwwaMH&_r=1"><li>TikTok</li></a>
                    <a href="https://k.kwai.com/u/@MundoFelinoBr/omzCvl71"><li>Kwai</li></a>
                </ul>
            </div>
            <div>
                <h5>Lucas Barbosa de Sousa
                    <br></br>(Perfil Profissional)</h5>
                <ul>
                    <li>Portifolio(Em Costrução)</li>
                    <li><a href='https://www.instagram.com/diverteck/profilecard/?igsh=Z3NtMXJ3NHcxZ2M4' target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </div>
            <div>
                <h5>Politicas</h5>
                <ul>
                    <li><Link to="/Politica-E-Privacidades" style={{color: '#fff', textDecoration: 'none'}}>Politica e Privacidade</Link></li>
                    <li><Link to="/Politica-E-Privacidades" style={{color: '#fff', textDecoration: 'none'}}>Cookies</Link></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer