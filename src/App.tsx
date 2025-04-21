import {Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genres } from './hook/useGenres';
import { useState } from 'react';

export default function App() {
  const[selektedGenre, setSelectedGenre] = useState<Genres | null>(null);
  return <Grid templateAreas={{
    base : `"nav" "main"`,
    lg : `"nav nav" "aside main"`
  }}
  templateColumns={{
    base : '1fr',
    lg : '200px 1fr'
  }}>
    <GridItem area='nav' bg=''>
      <Nav/>
    </GridItem>
    <Show above='lg'>
    <GridItem area='aside'paddingX={5} >
      <GenreList onSelectedGenre = {(genre) => setSelectedGenre(genre)}/>
    </GridItem>
    </Show>
    <GridItem area='main' >
    <GameGrid selectedGenre = {selektedGenre}/>
    </GridItem>
  </Grid>

}

