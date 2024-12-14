import style from './Produtos.module.css'
function Produtos(){
    return(
        <div>
                <section className={style.categoryCard}>
                    <div className={style.categoryCard}>
                        <img src="roupas.jpg" alt="Roupas" />
                        <h3>Roupas</h3>
                        <p>Descubra a nova coleção de roupas.</p>
                        <button>Ver Produtos</button>
                    </div>
                    <div className={style.categoryCard}>
                        <img src="acessorios.jpg" alt="Acessórios" />
                        <h3>Acessórios</h3>
                        <p>Explore acessórios que complementam o seu estilo.</p>
                        <button>Ver Produtos</button>
                    </div>
                    <div className={style.categoryCard}>
                        <img src="calcados.jpg" alt="Calçados" />
                        <h3>Calçados</h3>
                        <p>Conforto e estilo para seus pés.</p>
                        <button>Ver Produtos</button>
                    </div>
                </section>
        </div>
    )
}
export default Produtos