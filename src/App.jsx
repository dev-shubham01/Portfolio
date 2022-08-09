import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import Testimonial from './components/testimonial/Testimionial';
import Contact from './components/contact/Contact'
import './App.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
