import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import type { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const fetchGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
    if (error) return <Text>{error.message}</Text>;
    return (
        <Box padding={5}>
            <InfiniteScroll
                dataLength={fetchGamesCount}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<Spinner />}>
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                    spacing={6}
                >
                    {isLoading &&
                        skeletons.map(skeleton => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))
                    }
                    {data?.pages.map((page, index) =>
                        <React.Fragment key={index}>
                            {page?.results.map(game =>
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>)}
                        </React.Fragment>)}
                </SimpleGrid>
            </InfiniteScroll>
            {/* {hasNextPage && (
                <Button marginY={5} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading...' : "Load More"}
                </Button>
            )} */}
        </Box>
    );
};

export default GameGrid;
