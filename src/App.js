import Blogs from './site/blog/Blogs';
import Menu from './site/nav/Menu';
import Produtos from './site/loja/Produtos';
import Sobre from './site/sobre/Sobre';
import Footer from './site/footer/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
/*Pages */
import { Page1, Page2, Page3 } from './site/blog/ConteudoBlog/index'
import './App.css';

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
  

  let BlogConteudos = [<Page1 />, <Page2 />, <Page3 />]
  let TituloBlog = ["as-5-racas-de-gatos-famosas", "5-gatos-mais-famosos-do-japao", "os-5-ranks-mais-absurdos-dos-gatos"]

  return (
    <HelmetProvider>
      <div className="App">
        
        <Router>
          <ScrollToTop />
          <Menu Loja={<Link to="/"><span className="menuNavTitulo">Loja</span></Link>}
          Blog={<Link to="/Blogs"><span className="menuNavTitulo">Blogs</span></Link>}
          Sobre={<Link to="/Sobre"><span className="menuNavTitulo">Sobre</span></Link>}
          />
          <Routes>
            <Route path={`/Blogs/${TituloBlog[0]}`} element={BlogConteudos[0]}/>
            <Route path={`/Blogs/${TituloBlog[1]}`} element={BlogConteudos[1]}/>
            <Route path={`/Blogs/${TituloBlog[2]}`} element={BlogConteudos[2]}/>
            <Route path="/Sobre" element={<Sobre />}/>
            <Route path="/" element={<Produtos />} />
            <Route path="/Blogs" element={<Blogs />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
