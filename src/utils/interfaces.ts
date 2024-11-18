export interface ITextosApresentacao {
    id: number;
    text: string;
    extraClasses?: string;
}

export interface IUsuarioGitHub{
    avatar_url: string;
    name: string;
    repo: number;
    login: string;
    url: string;
}

export interface IRepositorioGitHub{
    id: number;
    name: string;
    description: string;
    url: string;
    created_at: string;
}