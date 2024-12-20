import Menu from './site/nav/Menu';
import Blogs from './site/blog/Blogs';
import Produtos from './site/loja/Produtos';
import Sobre from './site/sobre/Sobre';
import Contato from './site/Contato/Contato';
import Footer from './site/footer/Footer';
import PoliticaEPrivacidade from './site/PoliticaEPrivacidade/PoliticaEPrivacidade';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
/*Pages */
import { Page1, Page2, Page3 } from './site/blog/ConteudoBlog/index'
import './App.css';
import Page4 from './site/blog/ConteudoBlog/Page4';

function App() {


  function ScrollToTop() {
    const location = useLocation(); 
    useEffect(() => {
      if (TituloBlog.some(blog => location.pathname === `/Blogs/${blog}`)){
        window.scrollTo(0, 280);
      }else{
        window.scrollTo(0, 0);
      }
      
    }, [location]);
    return null;
  }
  

  let BlogConteudos = [<Page1 />, <Page2 />, <Page3 />, <Page4 />]
  let TituloBlog = ["as-5-racas-de-gatos-famosas", "5-gatos-mais-famosos-do-japao", "os-5-ranks-mais-absurdos-dos-gatos", "rota4"]
  
  return (
    <HelmetProvider>
      <div className="App">
        
        <Router>
          <ScrollToTop />
          <Menu Loja={<Link to="/"><span className="menuNavTitulo">Loja</span></Link>}
          Blog={<Link to="/Blogs"><span className="menuNavTitulo">Blogs</span></Link>}
          Sobre={<Link to="/Sobre"><span className="menuNavTitulo">Sobre</span></Link>}
          Contato={<Link to="/Contato"><span className="menuNavTitulo">Contato</span></Link>}
          />
          <Routes>
            <Route path={`/Blogs/${TituloBlog[0]}`} element={BlogConteudos[0]}/>
            <Route path={`/Blogs/${TituloBlog[1]}`} element={BlogConteudos[1]}/>
            <Route path={`/Blogs/${TituloBlog[2]}`} element={BlogConteudos[2]}/>
            <Route path={`/Blogs/${TituloBlog[3]}`} element={BlogConteudos[3]}/>
            <Route path="/Sobre" element={<Sobre />}/>
            <Route path="/" element={<Produtos />} />
            <Route path="/Blogs" element={<Blogs />} />
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
