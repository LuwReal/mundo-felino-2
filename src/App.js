import Blogs from './site/blog/Blogs';
import Menu from './site/nav/Menu';
import Produtos from './site/loja/Produtos';
import Sobre from './site/sobre/Sobre';
import Footer from './site/footer/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
/*Pages */
import { Page1, Page2, Page3 } from './site/blog/ConteudoBlog/index'
import './App.css';

function App() {

  let BlogConteudos = [<Page1 />, <Page2 />, <Page3 />]
  let TituloBlog = ["10-Gatos", "Curiosidades", "5-Gatos"]

  return (
    <div className="App">
      
      <Router>
        <Menu Loja={<Link to="/"><span className="menuNavTitulo">Loja</span></Link>} Blog={<Link to="/Blogs"><span className="menuNavTitulo">Blogs</span></Link>} Sobre={<Link to="/Sobre"><span className="menuNavTitulo">Sobre</span></Link>}/>

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
  );
}

export default App;
