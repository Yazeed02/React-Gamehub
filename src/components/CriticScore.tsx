import { Badge } from '@chakra-ui/react';

interface CriticScoreProps {
    score: number;
}
const CriticScore = ({ score }: CriticScoreProps) => {

    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
    return (
        <>
            <Badge fontSize={'14px'} paddingX={2} borderRadius={'4px'} colorScheme={color} title='Critic Score' userSelect={'none'}>{score}</Badge>
        </>
    )
}

export default CriticScore
