import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  List,
  ListItem,
  Stack,
  Button,
  Box,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./SearchBar.css";

interface SearchBarInt {
  placeholder?: string;
  dark?: boolean;
  width?: string;
  limit?: number;
}

export function SearchBar({ placeholder, dark, width, limit }: SearchBarInt) {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleFocus = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 150);
  };

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [pastResults, setPastResults] = useState<any[]>([]);

  const useDebounce = (callback: any, delay: number) => {
    const [debouncing, setDebouncing] = useState(false);

    useEffect(() => {
      if (debouncing) {
        const timeout = setTimeout(() => {
          setDebouncing(false);
          callback();
        }, delay);

        return () => {
          clearTimeout(timeout);
        };
      }
    }, [debouncing, callback, delay]);

    return () => {
      setDebouncing(true);
    };
  };

  const debouncedFetchResults = useDebounce(() => fetchResults(query), 200);

  const handleChange = (event: any) => {
    setPastResults(results);
    setIsLoading(true);
    setQuery(event.target.value);
    debouncedFetchResults();
  };

  const fetchResults = async (query: string) => {
    if (query !== "") {
      axios
        .get(`http://localhost:4000/college/search/${query}/${limit || 1}`)
        .then((res) => {
          setResults(res.data);
          setIsLoading(false);
        });
    }
  };

  const RRef = useRef<HTMLInputElement>(null);

  function handleSubmit() {
    if (results.length) {
      window.location.hash = `#explore-college?college=${results[0].UNITID}`;
    }
  }
  function handleResultClick(query: string) {
    window.location.hash = `#explore-college?college=${query}`;
  }

  const showingQueryResults = isActive && (query || results.length);
  function QueryResults() {
    let curResults = isLoading ? pastResults : results;
    if (curResults.length || query === "") {
      return (
        <Box h={0}>
          <List
            bgColor={"#202020"}
            maxH="xs"
            overflow={"scroll"}
            display={isActive ? undefined : "none"}
            borderBottomRadius={"lg"}
          >
            {curResults.map((result: any) => {
              return (
                <ListItem
                  key={result.UNITID}
                  borderBottom={curResults.length && "1px solid #272727"}
                >
                  <Button
                    onClick={() => handleResultClick(result.UNITID)}
                    variant={"searchResult"}
                  >
                    <Skeleton isLoaded={!isLoading}>{result.INSTNM}</Skeleton>
                  </Button>
                </ListItem>
              );
            })}
            {curResults.length > 0 && (
              <Box h={1} borderBottomRadius={"2xl"} bgColor={"#202020"} />
            )}
          </List>
        </Box>
      );
    }
    return (
      <Box h={0}>
        <Button borderBottom={"1px solid #272727"} variant={"searchResult"}>
          <Skeleton isLoaded={!isLoading}>No results for "{query}"</Skeleton>
        </Button>
        <Box h={1} borderBottomRadius={"2xl"} bgColor={"#202020"} />
      </Box>
    );
  }

  return (
    <Stack spacing={0} zIndex={5} w={width || "2xs"}>
      <InputGroup onSubmit={handleSubmit} zIndex={2}>
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          bg={"#202020"}
          border={"0px"}
          color={"#ffffff"}
          ref={RRef}
          placeholder={placeholder || "Search Colleges"}
          _placeholder={{ color: "#666666" }}
          type="text"
          value={query}
          onChange={handleChange}
          borderBottomRadius={showingQueryResults ? "0" : undefined}
        />
        <InputRightElement
          as="button"
          onClick={handleSubmit}
          children={<SearchIcon />}
          color={"#666666"}
        />
      </InputGroup>
      {isActive && <QueryResults />}
    </Stack>
  );
}
