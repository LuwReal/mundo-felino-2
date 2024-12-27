import Menu from './site/nav/Menu';
import Blogs from './site/blog/Blogs';
import BlogsPage2 from './site/blog/BlogsPage2';
import BlogPageZero from './site/blog/BlogPageZero';
import Produtos from './site/loja/Produtos';
import Sobre from './site/sobre/Sobre';
import Contato from './site/Contato/Contato';
import Footer from './site/footer/Footer';
import PoliticaEPrivacidade from './site/PoliticaEPrivacidade/PoliticaEPrivacidade';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
/*Pages */
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8, Page9, Page10, Page11, Page12 } from './site/blog/ConteudoBlog/index'
import './App.css';


function App() {


  function ScrollToTop() {
    const location = useLocation(); 
    useEffect(() => {
      if (TituloBlog.some(blog => location.pathname === `/Blogs/${blog}`) || TituloBlogPage2.some(blog => location.pathname === `/Blogs-Page2/${blog}`)){
        window.scrollTo(0, 280);
      }else{
        window.scrollTo(0, 0);
      }
      
    }, [location]);
    return null;
  }
 

  /*BlogPage1 */
  let BlogConteudos = [ <Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />]
  let TituloBlog = [ "os-10-alimentos-mais-perigosos-para-gatos-proteja-o-seu-gato", "5-pragas-que-seu-gato-vai-eliminar-na-sua-casa", "os-5-ranks-mais-absurdos-dos-gatos", "10-recordes-de-gato-no-guinness-worldrecords",
    "10-recordes-de-gato-no-guinness-world-records", "maine-coon-tudo-sobre-a-maior-raca-de-gato"
  ]
  /*BlogPage2 */
  let BlogConteudosPage2 = [<Page7 />, <Page8 />, <Page9 />, <Page10 />, <Page11 />,<Page12 />]
  let TituloBlogPage2 = ["5-gatos-mais-famosos-do-japao" , "5-provas-que-os-reflexos-do-gato-demonstram-sua-superioridade", "5-razões-que-tornaram-os-gatos-essenciais-na-cultura-japonesa", "gato-bengal-o-exotico-gato-que-encanta-com-sua-beleza-selvagem",
    "5-motivos-por-que-os-gatos-são-melhores-que-os-cães","as-5-racas-de-gatos-famosas"
  ]



  return (
    <HelmetProvider>
      <div className="App">
        
        <Router>
          <ScrollToTop />
          <Menu Loja={<Link to="/loja"><span className="menuNavTitulo">Loja</span></Link>}
          Blog={<Link to="/Blogs"><span className="menuNavTitulo">Blogs</span></Link>}
          Sobre={<Link to="/Sobre"><span className="menuNavTitulo">Sobre</span></Link>}
          Contato={<Link to="/Contato"><span className="menuNavTitulo">Contato</span></Link>}
          />
          <Routes>
            {/*Page1*/}
            <Route path={`/Blogs/${TituloBlog[0]}`} element={BlogConteudos[0]}/>
            <Route path={`/Blogs/${TituloBlog[1]}`} element={BlogConteudos[1]}/>
            <Route path={`/Blogs/${TituloBlog[2]}`} element={BlogConteudos[2]}/>
            <Route path={`/Blogs/${TituloBlog[3]}`} element={BlogConteudos[3]}/>
            <Route path={`/Blogs/${TituloBlog[4]}`} element={BlogConteudos[4]}/>
            <Route path={`/Blogs/${TituloBlog[5]}`} element={BlogConteudos[5]}/>
            {/*Page2*/}
            <Route path={`/Blogs-Page2/${TituloBlogPage2[0]}`} element={BlogConteudosPage2[0]}/>
            <Route path={`/Blogs-Page2/${TituloBlogPage2[1]}`} element={BlogConteudosPage2[1]}/>
            <Route path={`/Blogs-Page2/${TituloBlogPage2[2]}`} element={BlogConteudosPage2[2]}/>
            <Route path={`/Blogs-Page2/${TituloBlogPage2[3]}`} element={BlogConteudosPage2[3]}/>
            <Route path={`/Blogs-Page2/${TituloBlogPage2[4]}`} element={BlogConteudosPage2[4]}/>
            <Route path={`/Blogs-Page2/${TituloBlogPage2[5]}`} element={BlogConteudosPage2[5]}/>


            <Route path="/Sobre" element={<Sobre />}/>
            <Route path="/loja" element={<Produtos />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Blogs-Page2" element={<BlogsPage2 />} />
            <Route path="/Blogs-Page3" element={<BlogPageZero />} />
            <Route path="/Blogs-Page4" element={<BlogPageZero />} />
            <Route path="/Contato" element={<Contato />} />
            <Route path="/Politica-E-Privacidades" element={<PoliticaEPrivacidade />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
    
    
  );
}

export default App;
