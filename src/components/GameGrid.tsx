import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { GameQuery } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
  gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, err, isLoading } = useGame(gameQuery);
  const skeletons = Array(10).fill(0);
  if(err) return <Text>{err}</Text>
  return (
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={5}
        paddingY="10px"
      >
        {isLoading &&
          skeletons.map((_, index) => (
            <GameCardContainer key={index}>
              {" "}
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {!isLoading &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard {...game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
  );
};

export default GameGrid;
