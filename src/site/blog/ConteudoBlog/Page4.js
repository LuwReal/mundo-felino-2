import style from './Page4.module.css'
import Recomendados from '../componets/Recomendados';
import { Helmet } from 'react-helmet-async';
import RedeSocial from '../componets/RedeSocial';


function Page4(){
    return(
        <div className={style.container}>
            
            <Helmet>
                <meta name="description" content="Descubra 10 recordes incríveis de gatos no Guinness World Records, incluindo o gato mais velho, mais longo, mais pesado e muitos outros feitos impressionantes!" />
                <meta property="og:title" content="10 Recordes de Gato Impressionantes no Guinness World Records" />
                <meta property="og:description" content="Descubra 10 recordes incríveis de gatos no Guinness World Records, incluindo o gato mais velho, mais longo, mais pesado e muitos outros feitos impressionantes!" />
                <meta property="og:url" content="https://www.example.com/racas-de-gatos-famosas" />
                <title>10 Recordes de Gato no Guinness World Records</title>
            </Helmet>
            <article className={style.articleContainer}>
                <h1 className={style.articleTitle}>10 Recordes de Gato Impressionantes no Guinness World Records</h1>
                <p className={style.articleText}>Já pensou que esses felinos teriam tanto destaque no Guinness World Records? Isso mesmo, com mais de 10 recordes, desde o maior salto já realizado por um gato até a maior ninhada de gatos já registrada (risos). Nossos companheiros felinos têm protagonizado diversos recordes no Guinness World Records ao longo dos anos. Tenho que dizer: é de impressionar! Não esperava encontrar tantos recordes incríveis. Essas são algumas das curiosidades que veremos hoje. Quem sabe, seu gato poderá superar alguns desses recordes?</p>
                <ul className={style.articleList}>
                    <li>
                        <h2 className={style.articleListItem}>1 - Maior Gato Vivo</h2>
                        <p className={style.articleListText}>O que eu não esperava era encontrar um tigre aqui (sim, tigres são considerados gatos!). O título de maior gato vivo pertence a Hércules, um ligre (híbrido de leão com tigresa) adulto. Hércules mede impressionantes 3,33 metros de comprimento, 1,25 metros de altura no ombro e pesa 418,2 kg.
                            Apesar de ter nascido em cativeiro no Jungle Island, localizado em Miami, Flórida, nos Estados Unidos, não será possível vê-lo (a não ser que você o encontre). Afinal, as últimas informações sobre ele são extremamente limitadas.
                            Mas, caso queira ver um ligre, pode visitar o Myrtle Beach Safari, na Carolina do Sul, EUA. Detalhe: é sempre bom investigar a reputação do local antes de visitá-lo!
                        </p>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>2 - Gato Doméstico Mais Longo de Todos os Tempos</h2>
                    <p className={style.articleListText}>Ele deveria ser chamado de "Bom Gigante", pois, assim como seu tamanho imponente, seu carinho é igualmente grandioso, típico da raça Maine Coon. Mymains Stewart Gilligan, conhecido como Stewie, foi o Maine Coon que alcançou 123 cm de comprimento, estabelecendo o recorde de gato doméstico mais longo de todos os tempos.</p>
                    <img className={style.articleListImg} src='/img/blog/page4/gato-maine-coon-2.jpg' alt="Gato Maine Coon olhando para frente" title='Gato Maine Coon'/>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>3 - Gato Doméstico Mais Longo Atual</h2>
                    <p className={style.articleListText}>Aproveitando o embalo de todos os tempos, por que não descobrir o atual recordista? O detentor do título e recorde de gato doméstico mais longo é Barivel, um Maine Coon da Itália, que mede 120 cm de comprimento.</p>
                    <img className={style.articleListImg} src='/img/blog/page4/maine-coon.jpg' alt="Gato Amarelo da raça Maine Coon obrsevando algo" title='Gato Maine Coon Amarelo'/>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>4 - Gato com a Cauda Mais Longa de Todos os Tempos</h2>
                    <p className={style.articleListText}>Cygnus, um Maine Coon, é reconhecido por ter a cauda mais longa de todos os tempos, medindo 44,66 cm de comprimento.</p>
                    <img className={style.articleListImg} src='/img/blog/page4/maine-coon-rabo-longo.jpg' alt="Gato da raça Maine Coon de cor cinza, deitado no chão" title='Gato Maine Coon Cinza'/>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>5 - Gato Doméstico Mais Alto de Todos os Tempos</h2>
                    <p className={style.articleListText}>Já que estamos falando de comprimento, quem será o gato mais alto do mundo? Arcturus Aldebaran Powers, um Savannah — uma raça de gato que me dá um pouco de medo, como o nome sugere "Savannah" —, mas que não deixa de ser fofo. Ele detém o recorde de gato doméstico mais alto já registrado, medindo impressionantes 48,4 cm de altura. Mas acho que, à medida que ele envelhece, essa altura pode diminuir (risos).</p>
                    <img className={style.articleListImg} src='/img/blog/page4/gato-savannah.jpg' alt="Imagem Representativa do Gato Savannah" title='Iamgem Representativa do Gato Savannah'/>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>6 - Gato Mais Velho Já Registrado</h2>
                    <p className={style.articleListText}>Crème Puff foi uma gata da década de 60, que ganhou fama por ser reconhecida como o gato mais velho do mundo. Ela nasceu em 3 de agosto de 1967 e viveu até 6 de agosto de 2005, alcançando a impressionante idade de 38 anos e 3 dias. Seu feito de longevidade levou o Guinness World Records a registrá-la como o gato mais velho já registrado. Realmente, para um gato, suas 7 vidas foram longas.</p>
                    <dl className={style.articleListText}>
                        <dt>Curiosidades:</dt>
                        <dd>Ela tinha um companheiro que a acompanhava nessa jornada, chamado Gramp, que viveu até os 34 anos.</dd>
                        <dd>Seu dono se chamava Jake Perry (oxi), um proprietário de gatos do Texas.</dd>
                    </dl>
                    <img className={style.articleListImg} src='/img/blog/page4/gato-velho.jpg' alt="Gato de Idade Olhando Para Camera que o Está fotografando" title='Gato Velho'/>                    
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>7 -Gato com o Ronronar Mais Alto Já Registrado</h2>
                    <p className={style.articleListText}>Merlin, um gato do Reino Unido, entrou para os registros ao alcançar um ronronar de 67,8 decibéis, um volume impressionante para um felino. (O texto está correto, sem erros de português.)</p>
                    <img className={style.articleListImg} src='/img/blog/page4/gato-roronar.jpg' alt="Gato de três cores roronando" title='Gato de 3 Cores'/>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>8 -Maior Salto Já Realizado por um Gato</h2>
                    <p className={style.articleListText}>Esse é um gato que não se segura, realmente impressionante e que representa a incrível agilidade dos gatos: Waffle the Warrior Cat, da Califórnia, EUA, com um salto de 2,133 metros. Se for pegar o gato, ele não desvia por baixo, e sim por cima (risos).</p>
                    <img className={style.articleListImg} src='/img/blog/page4/gato-pulando.jpg' alt="Gato Amarelo Pulando" title='Gato Amarelo'/>
                    </li>

                    <p className={style.articleListText}>Esses dois últimos tópicos são de impressionar, sem dúvida. Não é à toa que gatos são considerados um dos pets mais cobiçados do mundo.</p>
                    
                    <li>                
                    <h2 className={style.articleListItem}>9 - Maior Ninhada de Gatos Já Registrada</h2>
                    <p className={style.articleListText}>Uma gata birmanesa chamada Tarawood Antigone deu à luz 19 filhotes em uma única ninhada, um feito extraordinário. Muito incrível! Imagina a casa do inquilino cheia de gatinhos e fofura, miado para todo lado.</p>
                    <img className={style.articleListImg} src='/img/blog/page4/gata-prenha.jpg' alt="Gata Prenha de Gatinhos" title='Gata Prenha'/>
                    </li>

                    <li>
                    <h2 className={style.articleListItem}>10 - Maior Número de Filhotes Gerados por uma Gata</h2>
                    <p className={style.articleListText}>Agora, essa mãe gata se superou e demonstrou que os gatos são realmente impressionantes com seus feitos. Dusty, uma gata do Texas, EUA, teve 420 filhotes ao longo de sua vida, demonstrando uma impressionante capacidade reprodutiva. Dusty faleceu em 2008, mas seu recorde e sua história continuam a ser lembrados até hoje. E pensa que sua descendência já deve ter ultrapassado a casa dos 1.000.</p>
                    <img className={style.articleListImg} src='/img/blog/page4/gata-com-filhote.jpg' alt="Gata Alimentando seus Filhotes" title='Gata Com Filhotes'/>
                    </li>
                </ul>
                <div className={style.redesSocial}>
                    <RedeSocial />
                </div>
                <footer className={style.articleFooter}>
                    <p className={style.articleListText}>Esses recordes não apenas destacam as incríveis habilidades e características dos gatos, mas também mostram como esses animais são verdadeiramente únicos e fascinantes. Seja pela sua destreza, longevidade ou pelos feitos surpreendentes, os gatos continuam a cativar e inspirar pessoas ao redor do mundo.</p>
                </footer>
            </article>
            <Recomendados />
        </div>
    )
}

export default Page4