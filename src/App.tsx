import "normalize.css";
import "./App.css";
import Home from "./components/Homepage/home";
import BackgroundAnimate from './components/Background/background'
import About from './components/About/about'
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/footer";

function App() {
  const scrollTo = (elemento: any) =>{
    const element = document.getElementById(elemento);
    if(element){
      element.scrollIntoView(
        { behavior: "smooth"}
      );
    }
  }

  return (
    <div className="app">
      
      <div className="main">
        <Home scrollTo={scrollTo} />
        <About />
        <Projects />
        <Footer />
      </div>
      <BackgroundAnimate />
    </div>
  )
}

export default App;
