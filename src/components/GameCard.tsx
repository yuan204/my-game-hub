import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCropImageUrl } from "../services/image-url";
import Emoji from "./Emoji";

const GameCard = (game: Game) => {
  return (
    <Card>
      <Image src={getCropImageUrl(game.background_image)} />
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" mb={3}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
