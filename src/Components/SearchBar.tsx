import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface SearchBarInt {
  placeholder?: string;
  dark?: boolean;
}

export function SearchBar({ placeholder, dark }: SearchBarInt) {
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
      <InputGroup onSubmit={handleSubmit} zIndex={2}>
        <Input
          bg={"#202020"}
          border={"0px"}
          ref={RRef}
          placeholder={placeholder || "Search Colleges"}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          color={"#ffffff"}
          _placeholder={{ color: "#666666" }}
        />
        <InputRightElement
          as="button"
          onClick={handleSubmit}
          children={<SearchIcon />}
          color={"#666666"}
        />
      </InputGroup>
    </>
  );
}
