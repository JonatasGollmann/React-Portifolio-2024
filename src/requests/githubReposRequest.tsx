export async function obtemRepositorios(){
    return fetch('https://api.github.com/users/jonatasgollmann/repos?sort=created&per_page=3');
}
export async function obtemLinguagens(url : string) {
    return fetch(url);
}
export async function obtemPerful() {
    return fetch('https://api.github.com/users/jonatasgollmann')
}