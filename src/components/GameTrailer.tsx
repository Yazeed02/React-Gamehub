import { Spinner } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
    const { data: trailers, isLoading, error } = useTrailers(gameId);

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        throw error;
    }

    const first = trailers?.results[0];
    return first ? (
        <video src={first.data.max || first.data[480]}
            poster={first.preview}
            controls={true}
        />
    ) : null;
}

export default GameTrailer
