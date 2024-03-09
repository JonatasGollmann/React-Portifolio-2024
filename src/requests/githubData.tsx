import { obtemLinguagens, obtemPerful, obtemRepositorios } from "./githubReposRequest";

export async function repositoriosGitHub() {
  const conectGitHub = await obtemRepositorios();
  if (conectGitHub.ok) {
    const conectGitHubJson = await conectGitHub.json();
    //console.log(conectGitHubJson);
    const dados = await Promise.all(conectGitHubJson.map( 
        async (dadosRepos : object | any)=>{
        const linguagens = await obtemLinguagens({ url: dadosRepos.languages_url });
        if(linguagens.ok){
            const dadosFormatados = formataData(await linguagens.json(), dadosRepos);
            return dadosFormatados;
        }else{
            throw new Error("Erro a conectar com a API do Github. Function 2");
        }
    }));
    
    return dados;
  } else {
    throw new Error("Erro a conectar com a API do GitHub. Function 1");
  }
}
export async function obtemUsuarioInfo(){
  const conectGitHubInfo = await obtemPerful();
  if(conectGitHubInfo.ok){
    const conectGitHubInfoJson = await conectGitHubInfo.json();
    const dadosUsuario = {
      name: conectGitHubInfoJson.name,
      followers: conectGitHubInfoJson.followers,
      repos: conectGitHubInfoJson.public_repos
    }
    return dadosUsuario;
  }
}
function formataData(linguagens : any, dadosRepos : any){
    const dados = {
        id: dadosRepos.id,
        name: dadosRepos.name,
        description: dadosRepos.description,
        linguagens: linguagens,
        update: formataDate(dadosRepos.updated_at),
        url: dadosRepos.html_url
    }
    return dados;
}

function formataDate(datas: Date){
    const data = new Date(datas); 
    const dia = data.getDate().toString().padStart(2, '0'); 
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = data.getFullYear(); 
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }