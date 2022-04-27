const base = process.env.REACT_APP_SERVERURL!

const fetchRequest = (endPoint?: string) => {
  return fetch(base+ endPoint)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(error => {return {error: error}})

}

export function getPokemon(pokemon:string) {
  return fetchRequest(`/pokemon/${pokemon}`)
}