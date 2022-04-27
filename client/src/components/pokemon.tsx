import React from 'react'
import { IPokemon } from '../interfaces'

type PokemonPropsType = {
  pokemon: IPokemon
}

const Pokemon: React.FC<PokemonPropsType> = ({pokemon}) => {
  return (
    <div className="card">
      <div>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.description}</p>
      </div>
      <div>
      <img src={pokemon.sprite} alt={`${pokemon.name}`} className='sprite' ></img>
      </div>
    </div>
  )
}

export default Pokemon