import React from "react";
import {
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Box,
} from "@chakra-ui/react";

export default function Search({
  searchTerm,
  setSearchTerm,
  onSearchInput,
  onSearchSubmit,
  clearResults,
  handleClick
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  clearResults: () => void;
  handleClick: (path: string) => void;
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      pt="4.5rem"
    >
      <form onSubmit={onSearchSubmit}>
        <InputGroup size="md">
          <Input
            type="text"
            onChange={onSearchInput}
            pr="4.5rem"
            placeholder="Sök efter en hund"
            borderRadius="1px"
          />
          <InputRightElement width="4.5rem">
            <Button
              type="submit"
              color="brand.primary"
              size="md"
              borderRadius="1px"
              onClick={clearResults}
            >
              Sök
            </Button>
            <Button
              color="brand.primary"
              size="md"
              borderRadius="1px"
              onClick={clearResults}
            >
              X
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
      <Box mt={4}>
        <Button 
          mr={2}
          onClick={ () => handleClick(`long-hair`)}
          >
          Långhårig
        </Button>
        <Button 
          mr={2}
          onClick={ () => handleClick(`short-hair`)}
          >
          Korthårig
        </Button>
        <Button 
          mr={2}
          onClick={ () => handleClick(`big-dog`)}
          >
          Stor hund
        </Button>
        <Button 
          mr={2}
          onClick={ () => handleClick(`small-dog`)}
          >
          Liten hund
        </Button>
      </Box>
    </Box>
  );
}
