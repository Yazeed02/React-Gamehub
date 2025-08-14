import type { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCropperImageUrl from '../services/image-url';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCropperImageUrl(game.background_image)} />
      <CardBody minBlockSize={'130px'}>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>
          <Link to={`/games/${game.slug}`}>
            {game.name}
          </Link>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
