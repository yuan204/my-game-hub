import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres';
import { getCropImageUrl } from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void,
  selectGenre: Genres | null
}

const GenreList = ({ onSelectGenre, selectGenre }: Props) => {
  const { data, isLoading, err } = useGenres()
  if (err) return null
  if (isLoading) return <Spinner />
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCropImageUrl(genre.image_background)}
              borderRadius={8}
              objectFit="cover"
            />
            <Button fontWeight={selectGenre?.id === genre.id ? 'bold': 'normal' } textAlign="left" whiteSpace="normal" variant="link" onClick={() => onSelectGenre(genre)} fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
