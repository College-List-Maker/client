import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
export function SearchBar() {
  return (
    <>
      <InputGroup>
        <Input placeholder="Search Colleges" />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
    </>
  );
}
