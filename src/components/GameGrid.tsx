import useGames from '../hook/useGame';
import  {SimpleGrid, Text} from '@chakra-ui/react';
import GameCard from './GameCard';

interface Game {
    id : number;
    name : string
}

interface FetchGamesResponse {
    count : number;
    results : []
}

export default function GameGrid() {

    const {games , error} = useGames()
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing ={10}>
        {
        games.map(game => <GameCard key={game.id} game={game}/>
        )}
    </SimpleGrid>
   </>
  )
}
