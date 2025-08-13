import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingX={"10px"} paddingY={"5px"}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
