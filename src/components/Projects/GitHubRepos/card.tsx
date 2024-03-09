export default function Cards({ repositorios }: { repositorios: any }) {
  //console.log("Entrou" + repositorios)

  return repositorios.map((repos: any, index: number) => {
    const linguagens = Object.keys(repos.linguagens);

    return (
      <div key={index} className="reposItems">
        <a href={repos.url} target="_blank" className="projectOpen">
          <i className="ri-github-fill"></i>
          <div className="projectNameDate">
            <h2 className="projectName">{repos.name}</h2>
            <p className="projectDate">{repos.update}</p>
          </div>
        </a>
        <p className="projectDescription">{repos.description}</p>
        <div className="projectLinguagens">
          {linguagens.map((linguagem: string, index: number) => (
            <p key={index} className="projectLinguagem">
              {linguagem}
            </p>
          ))}
        </div>
      </div>
    );
  });
}
