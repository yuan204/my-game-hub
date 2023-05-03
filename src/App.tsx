// 1. import `ChakraProvider` component
import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genres } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import { GameQuery } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  function setSelectGenre(genres: Genres): void {
    setGameQuery((prev) => ({ ...prev, genres }));
  }

  function setSelectPlatform(platform: Platform | null): void {
    setGameQuery((prev) => ({ ...prev, platform}))
  }

   function setSelectOrdering(ordering:string): void {
     setGameQuery((prev) => ({ ...prev, ordering }));
   }
  
   function onSearch(search: string): void {
     setGameQuery((prev) => ({ ...prev, search }));
   }
  

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" padding="10px">
        <NavBar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
          <GenreList
            onSelectGenre={setSelectGenre}
            selectGenre={gameQuery.genres}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <Flex marginBottom="10px">
          <Box>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={setSelectPlatform}
            />
          </Box>
          <Box px={5}>
            <SortSelector
              selectedSort={gameQuery.ordering}
              onSelectSort={setSelectOrdering}
            />
          </Box>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
