import usePlatform, { Platform } from "../hooks/usePlatform";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectPlatform } : Props) => {
  const { data, err } = usePlatform()
  if (err) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name ?? 'Platform'}</MenuButton>
      <MenuList>
        {data?.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
