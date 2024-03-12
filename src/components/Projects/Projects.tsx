import GitHub from "./GitHubRepos/github";
import LogoBrickNix from "../../assets/brickNixLogo.png";
import BackgroundBricknix from '../../assets/BrickNixImage.png'
import "./Projects.css";

export default function Projects() {
  return (
    <div className="projectContainer" id="#projetos">
      <GitHub />
      <div className="projects">
        <h2 className="tittle">Projetos</h2>
        <div className="project">
          <div className="bricknix">
            
            <img src={BackgroundBricknix} className='bricknixImage' alt="" />
            <img src={LogoBrickNix} className="bricknixLogo" alt="" />
            <a href="https://www.bricknix.com" className="bricknixLink">Conheça o BrickNix</a>
          </div>
          <div className="ecofresh">
            <h1>EcoFresh Solutions</h1>
            <p>Projeto ficticio. Em construção...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
