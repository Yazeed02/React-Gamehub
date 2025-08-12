import { Button, Heading, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import getCropperImageUrl from "../services/image-url";
import type { Genre } from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                {data?.results.map(genre =>
                    <ListItem key={genre.id} paddingY={'5px'}>
                        <HStack>
                            <Image src={getCropperImageUrl(genre.image_background)} boxSize={'32px'} borderRadius={8} objectFit={'cover'} />
                            <Button whiteSpace={'normal'} textAlign={'start'} fontSize={'lg'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'light'} variant={'link'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </>
    )
}

export default GenreList
