
import './App.css';
import Navbar from './components/Navbar/nav';
import Home from './components/Home/home';
import Skills from './components/skill/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Project from './components/project/project';
import About from './components/About/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
