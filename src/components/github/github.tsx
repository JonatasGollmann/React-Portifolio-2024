import { useEffect, useState } from "react";
import { ReposData, UserData } from "../../utils/githubData";
import { IRepositorioGitHub, IUsuarioGitHub } from "../../utils/interfaces";
import { ExternalLink } from "lucide-react";
import MainTittle from "../titles/MainTittle";

export function GitHub() {
  const [userGithub, setUserGithub] = useState({} as IUsuarioGitHub);
  const [reposGithub, setReposGithub] = useState([] as IRepositorioGitHub[]);
  useEffect(() => {
    async function getUserData() {
      const user = await UserData();
      const repos = await ReposData();
      if (user) {
        setUserGithub(user);
      }
      if (repos) {
        setReposGithub(repos);
      }
    }
    getUserData();
  }, []);

  return (
    <div className="lg:w-[1000px] flex flex-col justify-center items-center text-light-green-2 gap-4 mb-24 scroll-m-14 max-md:mx-4" id="projects">
      <MainTittle text="GitHub" />
      <div className="flex h-28 justify-between items-center  w-full bg-gradient-to-tr to-green-2 from-green-3 px-8 py-4 rounded-xl shadow-xl max-md:mx-4">
        <a
          href={userGithub.url}
          className="group hover:scale-105 duration-300 hover:bg-green-2 rounded-full border-4 border-light-green-2 border-light-2 transition-all"
        >
          <img
            src={userGithub.avatar_url}
            alt="Github Avatar"
            className="w-24 h-16 object-cover rounded-full group-hover:opacity-50"
          />
        </a>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-lg">{userGithub.name}</h2>
          <h3>@{userGithub.login}</h3>
        </div>
        <div className="max-md:hidden w-24 flex flex-col justify-center items-center">
          <h3>Repositórios</h3>
          <p className="font-bold text-lg">{userGithub.repo}</p>
        </div>
      </div>
      <div className="text-green-1 grid md:grid-cols-3 md:grid-rows-2 gap-4">
        {reposGithub.map((repo: IRepositorioGitHub) => (
          <div
            key={repo.id}
            className="flex flex-col justify-between bg-slate-200 h-[300px] p-4 rounded-xl bg-gradient-to-tr to-light-green-1 from-light-green-2 shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="devicon-github-original text-white-2 text-5xl"></div>
            <div>
              <h2 className="text-lg font-bold text-green-1">{repo.name}</h2>
              <p className="text-sm">{repo.created_at}</p>
            </div>
            <p className="text-sm">{repo.description}</p>
            <a href={repo.url} target="_black" rel="noopener noreferrer" className="ml-auto size-9 flex justify-center items-center rounded-lg hover:bg-green-2 group transition-all">
              <ExternalLink  className="group-hover:text-light-green-1"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
