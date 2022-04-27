import React, { useState } from 'react'

type SearchPropsType = {
  searchPokemon: (arg0: string)=> Promise<void>
}

const Search:React.FC<SearchPropsType> = ({searchPokemon}) => {
  const [text, setText] = useState<string>('')

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('')
    searchPokemon((e.target as HTMLInputElement).value)
  }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <input role="search" type="text" value={text} onChange={handleChange }onKeyUp={handleSubmit} placeholder='SEARCH HERE' className='search' ></input>
  )
}

export default Search