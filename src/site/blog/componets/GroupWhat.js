import style from './GroupWhat.module.css'

function GroupWhat(){
    return(
        <div className={style.whatsapp_container}>
            <h2>Junte-se ao nosso grupo do WhatsApp!</h2>
            <p>Participe para ficar por dentro de todas as novidades e interagir com a nossa comunidade.</p>
            <a
                href="https://chat.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className={style.whatsapp_btn}
            >
                Entrar no grupo
            </a>
        </div>
    )
}

export default GroupWhat