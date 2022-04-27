import Content from "../components/content";
import React from 'react';
import { fireEvent, render, screen, act} from '@testing-library/react';
import * as ApiServices from '../APIService/APIservice'


const mockData =  {
    name: "Charizard",
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  }

describe("Tests for pokedex", () => {

  it('Searching should call the API', async () => {
    const apiCAll = jest.spyOn(ApiServices, 'getPokemon').mockResolvedValueOnce(mockData)
    render(<Content />)
    const search = screen.getByRole("search")
    search.focus()
    fireEvent.keyUp(search, {key: 'Enter', code: 'Enter'})
    await act(() => expect(apiCAll).toHaveBeenCalledTimes(1))
  })

  it('Should render pokemons name, description, and sprite if API successful', async () => {
    jest.spyOn(ApiServices, 'getPokemon').mockResolvedValueOnce(mockData)
    render(<Content />)
    const search = screen.getByRole("search")
    search.focus()
    fireEvent.keyUp(search, {key: 'Enter', code: 'Enter'})
    const name = await screen.findByText(mockData.name)
    const description = await screen.findByText(mockData.description)
    const sprite = await screen.findByAltText(mockData.name)
    expect(sprite).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('Should render try again if there is error from API', async () => {
    jest.spyOn(ApiServices, 'getPokemon').mockResolvedValueOnce({error: 'error'})
 render(<Content />)
    const search = screen.getByRole("search")
    search.focus()
    fireEvent.keyUp(search, {key: 'Enter', code: 'Enter'})
    const tryAgain = await screen.findByText('Try again...')
    expect(tryAgain).toBeInTheDocument()
  })

   it('Should render searching once enter is hit on search', async () => {
    jest.spyOn(ApiServices, 'getPokemon').mockResolvedValueOnce({error: 'error'})
    render(<Content />)
    const search = screen.getByRole("search")
    search.focus()
    fireEvent.keyUp(search, {key: 'Enter', code: 'Enter'})
    const searching = screen.getByText('Searching...')
    await act(()=>expect(searching).toBeInTheDocument())
  })
})
