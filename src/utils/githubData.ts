import { obtemPerfil, obtemRepositorios } from "./githubApi";
import { IRepositorioGitHub, IUsuarioGitHub } from "./interfaces";

export async function UserData(){
    const usuario = await obtemPerfil();
    if(usuario.ok){
        const userJson = await usuario.json();
        const usuarioGitHub : IUsuarioGitHub = {
            avatar_url: userJson.avatar_url,
            name: userJson.name,
            repo: userJson.public_repos,
            login: userJson.login.toLowerCase(),
            url: userJson.html_url
        }
        return usuarioGitHub;
    }else{
        throw new Error('Erro ao obter dados do usuário.');
    }
}

export async function ReposData(){
    const repositorios = await obtemRepositorios();
    if(repositorios.ok){
        const reposJson = await repositorios.json();
        const repositorioGitHub: IRepositorioGitHub[] = reposJson.map((repo: any) => {
            return{
                id: repo.id,
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                created_at: formataDate(repo.created_at)
            }
        })
        return repositorioGitHub;
    }else{
        throw new Error('Erro ao obter repositórios.');
    }
}

function formataDate(datas: Date){
    const data = new Date(datas); 
    const dia = data.getDate().toString().padStart(2, '0'); 
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = data.getFullYear(); 
    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }