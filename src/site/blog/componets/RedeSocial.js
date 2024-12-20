import style from './RedeSocial.module.css'
import {  FacebookShareButton, WhatsappShareButton, RedditShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, RedditIcon, } from 'react-share';

function RedeSocial(link1, link2, link3){

    const titulo = 'Ola Word!!'


    return(
        <div className={style.container}>
            <p>Compartilhe!!! Com seus Amigos:   </p>
            <div className={style.botoes}>
                < FacebookShareButton url={link1} title={titulo}>
                <FacebookIcon size={36} round/>
                </FacebookShareButton>
                <WhatsappShareButton url={link2}>
                    <WhatsappIcon size={36} round/>
                </WhatsappShareButton>
                <RedditShareButton url={link3}>
                    <RedditIcon size={36} round/>
                </RedditShareButton>
            </div>
        </div>
    )
}

export default RedeSocial