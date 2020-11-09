export function getpersonages() {
    return fetch('http://localhost:3001/character')
    .then(reponse => reponse.json());
}

export function getpersonage(id) {
    return fetch('http://localhost:3001/character/' + id)
    .then(reponse => reponse.json());
}
