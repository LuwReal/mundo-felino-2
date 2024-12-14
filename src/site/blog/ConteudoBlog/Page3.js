import style from './Page1.module.css'

function Page1(){
    return(
        <div className={style.teste}>
            <section>
                <article>
                    <p>Os gatos são animais incríveis, conhecidos por sua elegância, independência e habilidades de caça. Aqui estão algumas curiosidades fascinantes sobre esses felinos:</p>

                    <ul>
                        <li>Os gatos domésticos compartilham 95,6% de seu DNA com tigres.</li>
                        <li>Gatos podem dormir até 16 horas por dia para economizar energia.</li>
                        <li>A habilidade de "ronronar" é um dos traços mais únicos dos gatos.</li>
                    </ul>

                   <p>Agora, confira algumas imagens adoráveis de gatos:</p>

                    <div>
                        <img src="https://placekitten.com/300/200" alt="Gato fofo 1"/>
                        <img src="https://placekitten.com/301/200" alt="Gato fofo 2"/>
                        <img src="https://placekitten.com/302/200" alt="Gato fofo 3"/>
                    </div>
                 </article>
             </section>
        </div>
    )
}
export default Page1