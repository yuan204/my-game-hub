import useData from "./useData";
import { Genres } from "./useGenres";
import { Platform } from "./usePlatform";



export interface ParentPlatform {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: ParentPlatform[];
  rating_top: number;
}

export interface GameQuery {
  genres: Genres | null;
  platform: Platform | null;
  ordering: string;
  search: string;
}

export default function useGame(gameQuery: GameQuery) {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genres?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search
      },
    },
    [gameQuery]
  );
}
