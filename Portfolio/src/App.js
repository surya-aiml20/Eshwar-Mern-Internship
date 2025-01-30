import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';

function App() {
  return (
    <div>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Work/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
        
      </main>
    </div>
  );
}

export default App;
