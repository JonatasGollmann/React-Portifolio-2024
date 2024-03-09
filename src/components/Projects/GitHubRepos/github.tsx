import { useState, useEffect } from "react";
import {
  obtemUsuarioInfo,
  repositoriosGitHub,
} from "../../../requests/githubData";
import Cards from "./card";
import "./github.css";

interface UserData {
  name: string;
  repos: number;
  followers: number;
  // Adicione outras propriedades conforme necessário
}

export default function GitHub() {
  const [dadosRepositorios, setDadosRepositorios] = useState<any>(null);
  const [dadosUsuario, setDadosUsuario] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const repos = await repositoriosGitHub();
      const userInfo = await obtemUsuarioInfo();
      setDadosRepositorios(repos);
      setDadosUsuario(userInfo ?? null);
    }
    fetchData();
  }, []);

  return (
    <div className="projectsContainer">
      <div className="projectsRepos">
        <h2 className="tittle">Meu Github</h2>
        <a
          href="https://github.com/JonatasGollmann?tab=repositories"
          className="tittle"
        >
          Ver mais
        </a>
      </div>
      <div className="repositorios">
        {dadosUsuario && (
          <div className="perfil">
            <a
              href="https://github.com/JonatasGollmann"
              target="_blank"
              className="githubProfile"
            >
              <img
                src="https://avatars.githubusercontent.com/u/86964636?v=4"
                alt=""
              />
              <i className="ri-external-link-line"></i>
            </a>
            <h1 className="nickname">{dadosUsuario.name}</h1>
            <p className="nicknameID">@jonatasgollmann</p>
            <div className="infoAccount">
              <div className="nRepos">
                <h2 className="repositoriosnum">Repositórios</h2>
                <p className="numRepositorios">{dadosUsuario.repos}</p>
              </div>
              <div className="nFollow">
                <h2 className="followersnum">Seguidores</h2>
                <p className="numFollowers">{dadosUsuario.followers}</p>
              </div>
            </div>
          </div>
        )}
        {dadosRepositorios && <Cards repositorios={dadosRepositorios} />}
      </div>
    </div>
  );
}
