import React from "react";
import { Link } from 'react-router-dom';
import style from './Contato.module.css';
import { Helmet } from "react-helmet-async";

const Contato = () => {
  return (
   <div className={style.contatoContainer}>
        <Helmet>
                <meta name="description" content="Contatos de Mundo Felino 2, caso em dúvida entre em contato" />
                <meta property="og:title" content="Contatos" />
                <meta property="og:description" content="Contatos de Mundo Felino 2, caso em dúvida entre em contato" />
                <meta property="og:url" content="https://mundo-felino-2.com.br/Contato" />
                <title>Contatos</title>
        </Helmet>
        <h1 className={style.tituloContato}>Entre em Contato Conosco</h1>
        <p className={style.paragrafo}>Estamos Aqui Para Ajudar Com Suas Dúvidas e Solicitações</p>
        <h2 className={style.tituloInforma}>Informações</h2>
        <ul className={style.listInforma}>
            <li><b>E-mail</b>: Em Breve</li>
            <li><b>Telefone</b>: Em Breve</li>
            <li><b>Endereço</b>: Em Breve</li>
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
                    <td>50</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>65.000 mil</td>
                    </tr>
                    <tr>
                    <td>Inscritos</td>
                    <td>750</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>70.000 mil</td>
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
                    <td>50</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>2.512 mil</td>
                    </tr>
                    <tr>
                    <td>Seguidores</td>
                    <td>10</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>3.000 mil</td>
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
                    <td>50</td>
                    </tr>
                    <tr>
                    <td>Visualizações</td>
                    <td>27.000 mil</td>
                    </tr>
                    <tr>
                    <td>Seguidores</td>
                    <td>120</td>
                    </tr>
                    <tr>
                    <td>Valores Bruto</td>
                    <td>30.000 mil</td>
                    </tr>
                </tbody>
                </table>
                </a>
            </li>
        </ul>
        <p>O valor bruto é a soma dos seguintes valores:</p>
        <ul className={style.listSocial}>
            <li>Youtube: Visualizações, Comentários, Curtidas e Inscritos</li>
            <li>TikTok: Visualizações, Comentários e Curtidas</li>
            <li>Kwai: Visualizações, Comentários e Curtidas</li>
        </ul>
        <p>
          Para mais informações sobre como protegemos seus dados, leia nossa{" "}
          <Link to="/politica-e-privacidades">Politica e Privacidade</Link>
        </p>
   </div>
  );
};

export default Contato;
