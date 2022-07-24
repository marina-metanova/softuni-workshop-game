const baseURL = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseURL}/data/games`)
        .then(res => res.json())
}