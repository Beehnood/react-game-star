import useGames from "../hook/useGame";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: [];
}

export default function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4}} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map(
            game => 
          <GameCardContainer>
            <GameCard key={game.id} game={game}/>
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  );
}
