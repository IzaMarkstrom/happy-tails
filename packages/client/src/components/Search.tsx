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
  onClick,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
}) {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
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
              onClick={onClick}
            >
              Sök
            </Button>
            <Button
              color="brand.primary"
              size="md"
              borderRadius="1px"
              onClick={onClick}
            >
              X
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
}
