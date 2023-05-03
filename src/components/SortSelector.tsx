import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  selectedSort: string;
  onSelectSort: (sort: string) => void;
}
const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const curSort = sortOrders.find((item) => item.value === selectedSort);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {curSort?.label ?? "Revelance"}
      </MenuButton>
      <MenuList>
        {sortOrders?.map((item) => (
          <MenuItem
            key={item.value}
            onClick={() => onSelectSort(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
