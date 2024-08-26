import {Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

export default function App() {
  return <Grid templateAreas={{
    base : '"nav" "main"',
    lg : '"nav nav" "aside main"'
  }}>
    <GridItem area='nav' bg=''>
      <Nav/>
    </GridItem>
    <Show above='lg'>
    <GridItem area='aside' >
      <GenreList/>
    </GridItem>
    </Show>
    <GridItem area='main' >
    <GameGrid/>
    </GridItem>
  </Grid>

}

