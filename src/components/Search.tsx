import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEventHandler, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

export interface SearchProps {
  onSearch: (query: string) => void;
}
const SearchInput = ({ onSearch }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const onsubmit: FormEventHandler<HTMLElement> = (e) => {
    e.preventDefault();
    if (searchRef.current) onSearch(searchRef.current.value);
  };
  return (
    <form onSubmit={onsubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
      <Input placeholder='Search games...' ref={searchRef}/>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
