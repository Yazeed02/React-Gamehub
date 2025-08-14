import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface GameScreenshotProps {
    gameId: number;
}

const GameScreenshots = ({ gameId }: GameScreenshotProps) => {
    const { data, isLoading, error } = useScreenshots(gameId);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        throw error;
    }
    return (
        <SimpleGrid columns={{
            base: 1, md: 2
        }} spacing={3}>
            {data?.results.map(screenshot =>
                <Image key={screenshot.id} src={screenshot.image} />
            )}
        </SimpleGrid>
    )
}

export default GameScreenshots
