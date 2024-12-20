import React from "react";
import { Link } from 'react-router-dom';
import style from './Contato.module.css'

const Contato = () => {
  return (
   <div className={style.contatoContainer}>
        <h1 className={style.tituloContato}>Entre em Contato Conosco</h1>
        <p className={style.paragrafo}>Estamos Aqui Para Ajudar Com Suas Dúvidas e Solicitações</p>
        <h2 className={style.tituloInforma}>Informações</h2>
        <ul className={style.listInforma}>
            <li><b>E-mail</b>: suporte@Exemplo.com</li>
            <li><b>Telefone</b>: (11)98765-4321</li>
            <li><b>Endereço</b>: Rua Exemplo, 123 - São Paulo, SP</li>
            <li><b>Horário de Funcionamento</b>: Segunda a Sexta, das 9h ás 18h</li>
        </ul>
        <h2 className={style.listSocialTitulo}>Rede Sociais Mundo Felino 2</h2>
        <ul className={style.channelList}>
            <li className={style.channelItem + ' ' + style.Youtube}>
                <a href="https://youtube.com/@mundofelino-2?si=Wb0z4qM17zf0x6Le">
                <img
                    src="/img/youtubeLogo.jpg"
                    alt="Imagem do Canal"
                    className={style.channelImage}
                />
                <table className={style.channelTable}>
                <thead>
                    <tr>
                    <th>Plataforma</th>
                    <th>Youtube</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Nome do Canal</td>
                    <td>Mundo Felino 2</td>
                    </tr>
                    <tr>
                    <td>Vídeos</td>
                    <td>57</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>582</td>
                    </tr>
                    <tr>
                    <td>Inscritos</td>
                    <td>35</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>1650</td>
                    </tr>
                </tbody>
                </table>
                </a>
            </li>
            <li className={style.channelItem + ' ' + style.Instagram}>
                <a href="https://www.instagram.com/mundo_felino_2/profilecard/?igsh=MTI0bjV0azFhcHAydA==">
                <img
                    src="/img/instagremLogo.jpg"
                    alt="Imagem do Canal"
                    className={style.channelImage}
                />
                <table className={style.channelTable}>
                <thead>
                    <tr>
                    <th>Plataforma</th>
                    <th>Instagram</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Nome do Instagram</td>
                    <td>Mundo Felino 2</td>
                    </tr>
                    <tr>
                    <td>Vídeos e Post</td>
                    <td>30</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>982</td>
                    </tr>
                    <tr>
                    <td>Seguidores</td>
                    <td>35</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>2050</td>
                    </tr>
                </tbody>
                </table>
                </a>
            </li>
            <li className={style.channelItem + ' ' + style.TikTok}>
                <a href="https://www.tiktok.com/@mundofelino_2?_t=8sIFNmwwaMH&_r=1">
                <img
                    src="/img/tiktokLogo.jpg"
                    alt="Imagem do Canal"
                    className={style.channelImage}
                />
                <table className={style.channelTable}>
                <thead>
                    <tr>
                    <th>Plataforma</th>
                    <th>TikTok</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Nome do TikTok</td>
                    <td>Mundo Felino 2</td>
                    </tr>
                    <tr>
                    <td>Vídeos</td>
                    <td>41</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>1082</td>
                    </tr>
                    <tr>
                    <td>Seguidores</td>
                    <td>50</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>3500</td>
                    </tr>
                </tbody>
                </table>
                </a>
            </li>
            <li className={style.channelItem + ' ' + style.Kwai}>
                <a href="https://k.kwai.com/u/@MundoFelinoBr/omzCvl71"><img
                    src="/img/kwaiLogo.jpg"
                    alt="Imagem do Canal"
                    className={style.channelImage}
                />
                <table className={style.channelTable}>
                <thead>
                    <tr>
                    <th>Plataforma</th>
                    <th>Kwai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Nome do Canal</td>
                    <td>Mundo Felino 2</td>
                    </tr>
                    <tr>
                    <td>Vídeos</td>
                    <td>70</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>2582</td>
                    </tr>
                    <tr>
                    <td>Seguidores</td>
                    <td>101</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>1500</td>
                    </tr>
                </tbody>
                </table>
                </a>
            </li>
        </ul>
        <p>O valor bruto é a soma dos seguintes valores:</p>
        <ul className={style.listSocial}>
            <li>Youtube: Visualizações, Comentários, Curtidas e Inscritos</li>
            <li>Instagram: Visualizações, Comentários e Curtidas</li>
            <li>TikTok: Visualizações, Comentários e Curtidas</li>
            <li>Kwai: Visualizações, Comentários e Curtidas</li>
        </ul>
        <p>
          Para mais informações sobre como protegemos seus dados, leia nossa{" "}
          <Link to="/Politica-E-Privacidades">Politica e Privacidade</Link>
        </p>
   </div>
  );
};

export default Contato;
