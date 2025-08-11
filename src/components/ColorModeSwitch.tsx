import { 
  Box, 
  IconButton, 
  useColorMode, 
  useColorModeValue 
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { keyframes } from '@emotion/react'

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  
  const bg = useColorModeValue('gray.100', 'gray.700')
  const hoverBg = useColorModeValue('gray.200', 'gray.600')
  const iconColor = useColorModeValue('orange.500', 'yellow.400')
  const shadowColor = useColorModeValue('orange.200', 'yellow.200')

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={
        <Box
          as={colorMode === 'light' ? SunIcon : MoonIcon}
          animation={`${rotateAnimation} 0.5s ease-in-out`}
          color={iconColor}
          boxSize="20px"
        />
      }
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
      bg={bg}
      _hover={{
        bg: hoverBg,
        transform: 'scale(1.1)',
        boxShadow: `0 0 20px ${shadowColor}`,
      }}
      _active={{
        transform: 'scale(0.95)',
      }}
      borderRadius="full"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      position="relative"
      overflow="hidden"
    />
  )
}

export default ColorModeSwitch