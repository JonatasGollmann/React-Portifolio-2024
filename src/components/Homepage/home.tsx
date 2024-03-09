import "./home.css";
import Header from "../Header/header";
import IconSVG from "../../assets/icon.svg";

export default function Home({scrollTo}:{scrollTo:any}) {
  return (
    <div className="startContainer">
      <Header Icone={IconSVG} scrollTo={scrollTo}/>

      <div className="homeContainer">
        <h2 className="welcomeTittle tittle">
          Bem-vindos <br></br> ao meu portifólio
        </h2>

        <div className="nameContainer">
          <h1 className="tittleName">
            Jonatas<br></br>Gollmann
          </h1>
          <h2 className="descName tittle">Front-end Developer</h2>
        </div>

        <div className="descriptionContainer">
          <div className="socialContainer">
            <div className="socialItem">
              <a href="https://github.com/JonatasGollmann" target="_blank" className="socialLink">
                <i className="ri-github-line"></i>
              </a>
              <h3 className="midiaName">GitHub</h3>
            </div>
            <div className="socialItem">
              <a href="https://www.linkedin.com/in/jonatas-gollmann/" target="_blank" className="socialLink">
                <i className="ri-linkedin-line"></i>
              </a>
              <h3 className="midiaName">LinkedIn</h3>
            </div>
            <div className="socialItem">
              <a href="mailto:jonatasgollmann@gmail.com" className="socialLink">
                <i className="ri-mail-line"></i>
              </a>
              <h3 className="midiaName">Email</h3>
            </div>
          </div>
          <h3 className="description">
            Jonatas é um desenvolvedor front-end, designer de experiencia do
            usuário e um apaixonado por fotografia. <br></br>A paixão pela
            tecnologia permite desenvolver ferramentas e interfaces criativas,
            funcionais e otimizadas.
          </h3>
        </div>
      </div>
    </div>
  );
}
