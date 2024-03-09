export async function obtemRepositorios(): Promise<Response>{
    return fetch('https://api.github.com/users/jonatasgollmann/repos?sort=created&per_page=3');
}
export async function obtemLinguagens({ url }: { url: string; }): Promise<Response> {
    return fetch(url);
}
export async function obtemPerful(): Promise<Response> {
    return fetch('https://api.github.com/users/jonatasgollmann')
}