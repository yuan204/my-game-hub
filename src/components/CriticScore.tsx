import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 60 ? 'green': 'red'
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={4}>{score}</Badge>
  );
};

export default CriticScore;
