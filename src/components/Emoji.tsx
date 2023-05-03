import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/meh.webp";

interface Props {
  rating: number
}
const Emoji = ({ rating }: Props) => {
  if(rating < 3) return null
  const ratingMap: Record<number, ImageProps> = {
    3: { src: meh, boxSize: "25px" },
    4: { src: bullsEye, boxSize: "25px" },
    5: { src: thumbsUp, boxSize: "35px" },
  };
  return <Image {...ratingMap[rating]} />;
};

export default Emoji;
