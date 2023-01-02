import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface SearchBarInt {
  placeholder?: string;
}

export function SearchBar({ placeholder }: SearchBarInt) {
  const [input, setInput] = useState("");
  const handleInputChange = (e: any) => setInput(e.target.value);
  const handleKeyPress = (e: any) => e.key === "Enter" && handleSubmit();

  function handleSubmit() {
    if (input.length) {
      window.location.hash = `#explore-college?college=${input}`;
    }
  }

  const RRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <InputGroup onSubmit={handleSubmit}>
        <Input
          ref={RRef}
          placeholder={placeholder || "Search Colleges"}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <InputRightElement
          as="button"
          onClick={handleSubmit}
          children={<SearchIcon />}
        />
      </InputGroup>
    </>
  );
}
