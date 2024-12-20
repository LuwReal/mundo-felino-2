import React from 'react';
import style from './Sobre.module.css';
function Sobre() {

  const conquistas = [
    { id: 1, nome: "Conquista Em Andamento", imagem: "img.png" },
    { id: 2, nome: "Conquista Em Andamento", imagem: "img.png" },
    { id: 3, nome: "Conquista Em Andamento", imagem: "img.png" },
    { id: 4, nome: "Conquista Em Andamento", imagem: "img.png" },
  ];


  return (
    <div className={style.container}>
      <div className={style.containerSobre}>
        <h1 className={style.sobreTitulos}>Sobre o Blog</h1>
        <p className={style.sobreParagrafo}>Bem-vindo ao <b>Mundo dos Felinos 2!</b> Nosso blog é dedicado a todos que compartilham o amor e a curiosidade pelos gatos. Aqui, exploramos o fascinante universo dos felinos, trazendo conteúdos sobre curiosidades, comportamento, e muito mais.
          Nosso objetivo é informar e entreter os amantes de gatos, criando um espaço onde você possa aprender mais sobre esses incríveis companheiros. Sinta-se à vontade para explorar nossas postagens e descobrir tudo o que o Mundo dos Felinos 2 tem a oferecer para você e seu amigo de quatro patas!</p>
        <h2 className={style.sobreSubTitulos}>Sobre os Criadores</h2>
        <div className={style.containerPerfil}>
            <img
              className={style.perfilImage}
              src="link_da_imagem_do_criador.jpg"
              alt="Foto do Criador"
            />
            <div className={style.perfilInfor}>
              <h3 className={style.perfilName}>Lucas Barbosa de Souza</h3>
              <p className={style.sobreParagrafo}>
                Lucas Barbosa de Souza (Luweral Queteres) é o criador deste blog, com paixão por tecnologia e inovação. Ele tem experiência em desenvolvimento web e sempre busca compartilhar conhecimentos sobre as últimas tendências da indústria. Além de ser entusiasta de React, também adora aprender novas tecnologias e compartilhar ideias com a comunidade.
              </p>
                <div className={style.container2}>
                    <p>Redes Sociais:</p>
                    <a href='https://www.instagram.com/diverteck/profilecard/?igsh=Z3NtMXJ3NHcxZ2M4' target="_blank" rel="noopener noreferrer"><img className={style.logoRedesSocial} src='./img/instagremLogo.jpg' alt='Logo Instagram'/></a>
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
