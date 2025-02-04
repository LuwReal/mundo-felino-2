import React from 'react';
import style from './Sobre.module.css';
import { Helmet } from 'react-helmet-async';
function Sobre() {

  const conquistas = [
    { id: 1, nome: "65.000 mil Visualições No Youtube", imagem: "./img/youtubeLogo.jpg" },
    { id: 2, nome: "750 inscritos No Youtube", imagem: "./img/youtubeLogo.jpg" },
    { id: 3, nome: "25.000 mil Visualizações no Kwai", imagem: "./img/kwaiLogo.jpg" },
    { id: 4, nome: "100 Seguidores no Kwai", imagem: "./img/kwaiLogo.jpg" },
    { id: 5, nome: "50 Videos Curtos Postados", imagem: "./img/videopostadoLogo.jpg" },
    { id: 5, nome: "2.512 visualizações No TikTok", imagem: "./img/tiktokLogo.jpg" },
  ];


  return (
    <div className={style.container}>
      <Helmet>
        <meta name="description" content="Conheça mais Sobre o projeto Mundo Felino 2" />
        <meta property="og:title" content="Sobre Mundo Felino 2" />
        <meta property="og:description" content="Conheça mais Sobre o projeto Mundo Felino 2" />
        <meta property="og:url" content="https://mundo-felino-2.com.br/Sobre" />
        <title>Sobre</title>
      </Helmet>
      <div className={style.containerSobre}>
        <h1 className={style.sobreTitulos}>Sobre o Blog</h1>
        <p className={style.sobreParagrafo}>Bem-vindo ao <b>Mundo dos Felinos 2!</b> Nosso blog é dedicado a todos que compartilham o amor e a curiosidade pelos gatos. Aqui, exploramos o fascinante universo dos felinos, trazendo conteúdos sobre curiosidades, comportamento, e muito mais.
          Nosso objetivo é informar e entreter os amantes de gatos, criando um espaço onde você possa aprender mais sobre esses incríveis companheiros. Sinta-se à vontade para explorar nossas postagens e descobrir tudo o que o Mundo dos Felinos 2 tem a oferecer para você e seu amigo de quatro patas!</p>
        <h2 className={style.sobreSubTitulos}>Sobre os Criadores</h2>
        <div className={style.containerPerfil}>
            <img
              className={style.perfilImage}
              src="/img/lucas-luwreal.png"
              alt="Foto do Criador"
            />
            <div className={style.perfilInfor}>
              <h3 className={style.perfilName}>Lucas Barbosa de Souza</h3>
              <p className={style.sobreParagrafo}>
                Lucas Barbosa de Souza (Luweral Queteres) é o criador deste blog, com paixão por tecnologia e inovação. Ele tem experiência em desenvolvimento web e sempre busca compartilhar conhecimentos sobre as últimas tendências da indústria. Além de ser entusiasta de React, também adora aprender novas tecnologias e compartilhar ideias com a comunidade.
              </p>
                <div className={style.container2}>
                    <p>Redes Sociais:</p>
                    <a href='https://www.instagram.com/lucas.luwreal/' target="_blank" rel="noopener noreferrer"><img className={style.logoRedesSocial} src='./img/instagremLogo.jpg' alt='Logo Instagram'/></a>
                    <a href='https://www.kwai.com/@lucas_luwreal' target="_blank" rel="noopener noreferrer"><img className={style.logoRedesSocial} src='./img/kwaiLogo.jpg' alt='Logo kwai'/></a>
                    <a href='https://youtube.com/@lucas_luwreal?si=d6tusDvMCpvwyoPR' target="_blank" rel="noopener noreferrer"><img className={style.logoRedesSocial} src='./img/youtubeLogo.jpg' alt='Logo Youtube'/></a>
                    <a href='https://www.tiktok.com/@luwreal?_t=ZM-8tcYn17qPyg&_r=1' target="_blank" rel="noopener noreferrer"><img className={style.logoRedesSocial} src='./img/tiktokLogo.jpg' alt='Logo TikTok'/></a>
                    <a href='https://github.com/LuwReal' target="_blank" rel="noopener noreferrer"><img className={style.logoRedesSocial} src='./img/githubLogo.jpg' alt='Logo GitHub'/></a>
                </div>
            </div>
        </div>
        <div className={style.sobreMundoFelino}>
          <h2 className={style.sobreSubTitulos}>Sobre o projeto Mundo Felino 2</h2>
          <p className={style.sobreParagrafo}>O Projeto Mundo Felino 2 é um dos primeiros projetos oficiais de Lucas Barbosa de Souza, criado com o objetivo de transformar uma pequena ideia no papel em algo concreto. <img className={style.logoText} src='/img/mundo-felino-2.png' alt='Imagem da Logo do Mundo Felino 2'/>Tudo começou com a gravação de vídeos sobre curiosidades e entretenimento relacionados a gatos.
            Com o passar do tempo e muito empenho, o projeto evoluiu e ganhou reconhecimento, passando a oferecer serviços para grandes plataformas como YouTube, Instagram, TikTok e Kwai.
            Com o desenvolvimento contínuo, surgiu também o blog "Mundo Felino 2", onde compartilhamos curiosidades, listas e diversos conteúdos em formato de texto, mantendo sempre o objetivo de informar e entreter os amantes de gatos.
          </p>
        </div>
      </div>
        <div className={style.conquistasContainer}>
        <h1 className={style.conquistasTitulo}>Conquistas</h1>
        <div className={style.conquistasGrid}>
          {conquistas.map((conquista) => (
            <div key={conquista.id} className={style.conquistaCard}>
              <img
                src={conquista.imagem}
                alt={`Imagem de ${conquista.nome}`}
                className={style.conquistaImagem}
              />
              <p className={style.conquistaNome}>{conquista.nome}</p>
            </div>
          ))}
        </div>
       </div>
    </div>












/*
    <div className={style.sobreContainer}>

      <div className={style.perfilContainer}>
        <h2 className={style.perfilTitle}>Sobre os Criadores</h2>
        <div className={style.perfilCard}>
          <img
            className={style.perfilImage}
            src="link_da_imagem_do_criador.jpg"
            alt="Foto do Criador"
          />
          <div className={style.perfilInfo}>
            <h3 className={style.perfilName}>Luweral Queteres</h3>
            <p className={style.perfilBio}>
              Luweral é o criador deste blog, com paixão por tecnologia e inovação. Ele tem experiência em desenvolvimento web e sempre busca compartilhar conhecimentos sobre as últimas tendências da indústria. Além de ser entusiasta de React, também adora aprender novas tecnologias e compartilhar ideias com a comunidade.
            </p>
          </div>
        </div>
         <ul className={style.perfilContainer}>
        <li className={style.perfilCard}>
          <h2>Sobre o projeto Mundo Felino 2</h2>
          <p className={style.perfilBio}>O Projeto Mundo Felino 2 é um dos primeiros projetos oficiais de Lucas Barbosa de Souza, criado com o objetivo de transformar uma pequena ideia no papel em algo concreto. Tudo começou com a gravação de vídeos sobre curiosidades e entretenimento relacionados a gatos.
            Com o passar do tempo e muito empenho, o projeto evoluiu e ganhou reconhecimento, passando a oferecer serviços para grandes plataformas como YouTube, Instagram, TikTok e Kwai.
            Com o desenvolvimento contínuo, surgiu também o blog "Mundo Felino 2", onde compartilhamos curiosidades, listas e diversos conteúdos em formato de texto, mantendo sempre o objetivo de informar e entreter os amantes de gatos.
          </p>
        </li>
      </ul>
      </div>
      <div className={style.conquistasContainer}>
        <h1 className={style.conquistasTitulo}>Conquistas</h1>
        <div className={style.conquistasGrid}>
          {conquistas.map((conquista) => (
            <div key={conquista.id} className={style.conquistaCard}>
              <img
                src={conquista.imagem}
                alt={`Imagem de ${conquista.nome}`}
                className={style.conquistaImagem}
              />
              <p className={style.conquistaNome}>{conquista.nome}</p>
            </div>
          ))}
        </div>
       </div>
    </div>*/
  );
}

export default Sobre;
