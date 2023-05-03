import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../hooks/useGame';

interface Props {
  gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading my={5}>
      {gameQuery.platform?.name} {gameQuery.genres?.name} Games
    </Heading>
  );
};

export default GameHeading;
