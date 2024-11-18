import About from "./common/aboutSection";
import Contact from "./common/contactSection";
import Landing from "./common/landingSection";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";


function App() {
  return (
    <>
      <div className="flex flex-col font-Gantari ">
        <Header />
        <main className="bg-gradient-to-tr to-white-3 from-white-2">
          <Landing />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
