import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Header';
import Home from './Component/Home';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import FirstSection from './Component/FirstSection';
import Connect from './Component/Connect';
import NewDate from './Component/NewDate';
import Footer from './Component/Footer';


function App() {
  
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <FirstSection />
      <Connect />
      <NewDate />
      <Footer />
    </>
  );
}

export default App;
