import React from "react";
import {
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Stack,
} from "@chakra-ui/react";

export default function Search({
  onSearchInput,
  onSearchSubmit,
  onClick,
  handleSearchCategory,
}: {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: () => void;
  handleSearchCategory: (searchCategory: string) => void;
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
      <Stack direction="row" spacing={4} align="center" pt="2">
        <Button size="xs" onClick={() => handleSearchCategory("big%20dog")}>
          Stor
        </Button>
        <Button size="xs" onClick={() => handleSearchCategory("small%20dog")}>
          Liten
        </Button>
        <Button size="xs" onClick={() => handleSearchCategory("long%20hair")}>
          Långhårig
        </Button>
        <Button size="xs" onClick={() => handleSearchCategory("short%20hair")}>
          Korthårig
        </Button>
      </Stack>
    </Box>
  );
}
