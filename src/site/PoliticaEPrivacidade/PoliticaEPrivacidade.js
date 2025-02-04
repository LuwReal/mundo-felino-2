import { Helmet } from 'react-helmet-async'
import style from './PoliticaEPrivacidade.module.css'

function PoliticaEPrivacidade(){

    function srcollPoliticaEPrivacidade(){
        window.scrollTo(0, 400)
    }
    const scrollCookies = () =>{
        window.scrollTo(0, 1900)
    }

    return(
        <div className={style.container}>
            <Helmet>
                <meta name="description" content="Política e Privacidade Mundo Felino 2" />
                <meta property="og:title" content="Política e Privacidade Mundo Felino 2" />
                <meta property="og:description" content="Política e Privacidade Mundo Felino 2" />
                <meta property="og:url" content="https://mundo-felino-2.com.br/politica-e-privacidades" />
                <title>Política e Privacidade Mundo Felino 2</title>
            </Helmet>
            <div className={style.sumario}>
                <h4>Sumário</h4>
                <ul>
                    <li onClick={srcollPoliticaEPrivacidade}>Politica e Privacidade</li>
                    <li onClick={scrollCookies}>Cookies</li>
                </ul>
            </div>
            <div>
                <h1>Politica e Privacidade</h1>
                <h2>Base Legal para o Tratamento de Dados</h2>
                <p>Coletamos e tratamos seus dados pessoais com base no consentimento que você nos fornece ao utilizar este site, conforme previsto na Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD). Esse consentimento é utilizado para finalidades específicas, como melhorar sua experiência de navegação, responder às suas solicitações e personalizar o conteúdo exibido.</p>  
            </div>
            <div>
                <h2>Finalidade da Coleta de Dados</h2>
                <p>Nós levamos sua privacidade a sério e queremos que você saiba
                    extamente como seus dados são utilizados. Abaixo, detalhamos os objetivos de cada tipo de coleta:
                </p>
                <dl>
                    <dt>Análise de Navegação:</dt>
                    <dd>Coletamos dados como seu endereço IP e informações do navegador para entender melhor como você acessa nosso site. Esses dados são utilizados para melhorar sua experiência e otimizar o desempenho do nosso site.</dd>
                    <dt>Link para Grupo de WhatsApp:</dt>
                    <dd>Disponibilizamos um link de convite para que você possa ingressar no nosso grupo de WhatsApp, caso tenha interesse. Não coletamos dados pessoais para essa ação. O link é compartilhado de forma transparente, e você é livre para clicar e participar ou não.</dd>
                </dl>
            </div>
            <div>
                <h2>Compartilhamento de Dados com Terceiros</h2>
                <p>Nós prezamos pela sua privacidade e queremos ser transparentes sobre como seus dados são tratados. Compartilhamos alguns dados com parceiros confiáveis para ajudar na operação e melhoria do nosso site. Esses parceiros incluem:</p>
                <dl>
                    <dt>Google Analytics: </dt>
                    <dd>Utilizamos o Google Analytics para analisar padrões de tráfego e comportamento de navegação no site. Isso nos ajuda a entender melhor como você interage com o conteúdo e a melhorar sua experiência.</dd>
                    <dt>Google AdSense:</dt>
                    <dd>Para exibir anúncios personalizados que sejam relevantes para você, o Google AdSense pode usar informações de navegação.</dd>
                </dl>
                <p><b>Importante:</b>Não vendemos nem compartilhamos seus dados com terceiros para fins diferentes dos descritos acima. Seus dados são tratados de forma responsável e com total respeito à sua privacidade.</p>
            </div>
            <div>
                <h2>Direitos do Titular dos Dados</h2>
                <p>A LGPD garante aos usuários diversos direitos, como acesso, correção e exclusão de seus dados. Inclua uma seção sobre esses direitos e como exercê-los. Exemplo:</p>
                <h3>Seus Direitos</h3>
                <p>De acordo com a LGPD, você tem os seguintes direitos sobre seus dados:</p>
                <ul>
                    <li>Revogar seu consentimento a qualquer momento.</li>
                    <li>Solicitar acesso, correção ou exclusão dos seus dados.</li>
                    <li>Confirmar se tratamos suas informações pessoais.</li>
                </ul>
                <p>Para exercer seus direitos, entre em contato pelo e-mail:[SeuEmail@exemplo.com].</p>
            </div>
            <div>
                <h2>Consentimento Explícito</h2>
                <p>Adicione uma seção sobre o consentimento do usuário:</p>
                <h3>Consentimento</h3>
                <p>Ao utilizar nosso site, você concorda com os termos desta Política de Privacidade. Quando solicitado, você terá a opção de aceitar ou rejeitar cookies e a coleta de dados para finalidades específicas.</p>
            </div>
            <div>
                <h2>Encarregado de Proteção de Dados</h2>
                <p>Se você tiver dúvidas sobre como tratamos seus dados ou quiser exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO): E-mail: [SeuEmail@exemplo.com]</p>
            </div>
            <div>
                <h2>Alterações na Política de Privacidade</h2>
                <p>Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações na legislação ou em nossas práticas. A data da última atualização estará sempre indicada no topo da página.</p>
            </div>
            <div style={{borderTop: '3px solid #777'}}>
                <h2 id='cookies'>Política de Cookies</h2>
                <p>Utilizamos cookies para melhorar sua experiência em nosso site. Os cookies são pequenos arquivos armazenados no seu dispositivo que ajudam a personalizar o conteúdo e coletar informações sobre sua navegação. Alguns cookies são essenciais para o funcionamento do site, enquanto outros nos ajudam a entender seu comportamento para melhorar nossos serviços.</p>
                <h3>Tipos de Cookies que Utilizamos</h3>
                <ul>
                    <li><b>Cookies Necessários:</b> Garantem o funcionamento básico do site, como autenticação e segurança.</li>
                    <li><b>Cookies de Análise:</b> Usados para entender como você interage com nosso site e melhorar sua experiência. Exemplo: Google Analytics.</li>
                    <li><b>Cookies de Publicidade:</b> Permitem exibir anúncios relevantes com base em suas preferências. Exemplo: Google AdSense.</li>
                </ul>
                <h3>Gerenciamento de Cookies</h3>
                <p>Você pode aceitar, rejeitar ou gerenciar os cookies diretamente nas configurações do seu navegador ou por meio das opções exibidas no banner de cookies ao acessar nosso site.</p>
            </div>
        </div>
    )
}

export default PoliticaEPrivacidade