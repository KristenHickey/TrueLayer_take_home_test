import { pokemonAPI, shakespearAPI } from "./PokemonAPI/APIService.js"

export async function getPokemon(req, res) {
  try {
    const name = req.params.name
    const pokemon = await pokemonAPI(name)
   const description = await shakespearAPI(pokemon.description)

    res.status(200)
    res.send({
      ...pokemon,
      description: description.contents.translated
    })
  } catch (error) {
    res.status(500)
  res.send({error})}
}


