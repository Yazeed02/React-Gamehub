import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import type { Platform } from '../hooks/usePlatforms';

interface PlatformIconListProps {
    platforms: Platform[]
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        apple: FaApple,
        nintendo: SiNintendo,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack gap={3} margin={1}>
            {platforms.map(platform =>
                <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.400' title={platform.name} />
            )}
        </HStack>
    )
}

export default PlatformIconList
