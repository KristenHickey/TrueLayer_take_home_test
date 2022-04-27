import React, { useState } from 'react'
import { getPokemon } from '../APIService/APIservice'
import { IPokemon } from '../interfaces'
import Pokemon from './pokemon'
import Search from './search'

const Content: React.FC = () => {
  const [pokemon, setPokemon] = useState<null | IPokemon>(null)
  const [error, setError] = useState<boolean>(false)
  const [searching, setSearching] = useState<boolean>(false)

  const searchPokemon = async (searchInput: string):Promise<void> => {
    setSearching(true)
    const result = await getPokemon(searchInput)
    if (result.hasOwnProperty('error')) {
      setSearching(false)
      setError(true)
    } else {
      setSearching(false)
      setError(false)
      setPokemon(result)
    }
  }

  function renderPokemon() : JSX.Element {
    if (searching) {
      return <div className='text'><p >Searching... </p></div>
    }
    if (!error && pokemon !== null) {
      return <Pokemon pokemon={pokemon}/>
    } else if (error ) {
      return <div className='text'><p >No Pokemon found! </p><p >Try again...</p></div>
    }
    else {
      return <></>
    }
  }

  return (
    <div className='content'>
      <Search searchPokemon={searchPokemon}/>
    {renderPokemon()}
    </div>
  )
}

export default Content