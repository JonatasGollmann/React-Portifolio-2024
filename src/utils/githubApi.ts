export async function obtemRepositorios(): Promise<Response>{
    return fetch('https://api.github.com/users/jonatasgollmann/repos?sort=created&per_page=6');
}

export async function obtemPerfil(): Promise<Response> {
    return fetch('https://api.github.com/users/jonatasgollmann')
}