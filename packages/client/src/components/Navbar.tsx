import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
        <Box p="2">
          <Heading size="lg">
            <a href="/">Happy Tails 🐾</a>
          </Heading>
        </Box>
        <Spacer />
        <Flex alignItems="flex-end" gap="2">
          <Button bgColor="white">Hundarna</Button>
          <Button bgColor="white">Om oss</Button>
          <Button bgColor="white">Stöd</Button>
        </Flex>
        {/* <Spacer />
        <ButtonGroup gap="2" size="sm">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup> */}
      </Flex>
    </Box>
  );
}
