import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";


export default function HomePage() {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
        }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr "
            }}
        >
            <Show above='lg'>
                <GridItem area={"aside"} paddingX={5} marginY={5}>
                    <GenreList
                    // selectedGenreId={gameQuery.genreId}
                    // onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
                    />
                </GridItem>
            </Show>
            <GridItem area={"main"}>
                <Box paddingLeft={4}>
                    <GameHeading
                    // gameQuery={gameQuery} 
                    />
                    <Flex>
                        <Box marginRight={5}>
                            <PlatformSelector
                            // selectedPlatformId={gameQuery.platformId} 
                            // onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id })}
                            />
                        </Box>
                        <SortSelector
                        // sortOrder={gameQuery.sortOrder} 
                        // onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
                        />
                    </Flex>
                </Box>
                <GameGrid
                // gameQuery={gameQuery}
                />
            </GridItem>
        </Grid>
    )
}
