import fetch from 'node-fetch';


const fetchRequest = (endPoint) => {
  return fetch(endPoint)
    .then(res => res.status < (400 || res.success.total >0) ? res : Promise.reject())
    .then(res => res.status !== (204 || res.success.total >0) ? res.json() : res)
    .catch(err => console.log('Error: ', err))
}

export async function pokemonAPI(name) {
  try {
  const pokemon = await fetchRequest(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  const description = await fetchRequest(`https://pokeapi.co/api/v2/pokemon-species/${name}/`)
  return {
    name: pokemon.name,
    description: description.flavor_text_entries[7].flavor_text,
    sprite: pokemon.sprites.front_default
  }
  } catch (e) {
    console.log(e)
  }

}


export async function shakespearAPI(text) {
  const result = await fetchRequest(`https://api.funtranslations.com/translate/shakespeare.json?text=${text}`)
  return result
}