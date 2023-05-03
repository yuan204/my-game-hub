import { HStack, Image} from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput, { SearchProps } from './Search';
const NavBar = ({onSearch}: SearchProps) => {
  return (
    <HStack justify="space-between"  >
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch  />
    </HStack>
  );
};

export default NavBar;
