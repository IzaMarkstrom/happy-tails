import React, { useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex minWidth="max-content" alignItems="center" gap="2" p="2">
        <Box p="2">
          <Heading size="lg">
            <a href="/">Happy Tails 🐾</a>
          </Heading>
        </Box>
        <Spacer />
        <Flex
          alignItems="flex-end"
          gap="2"
          display={{ base: "none", md: "flex" }}
        >
          <Button bgColor="white">Hundarna</Button>
          <Button bgColor="white">Om oss</Button>
          <Button bgColor="white">Stöd</Button>
        </Flex>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          aria-label="Open navigation"
          onClick={onToggle}
          display={{ base: "block", md: "none" }}
        />
      </Flex>
      {isOpen && (
        <Box py="4" borderBottomWidth="1px">
          <VStack alignItems="flex-start" spacing="4">
            <Button bgColor="white" w="full">
              Hundarna
            </Button>
            <Button bgColor="white" w="full">
              Om oss
            </Button>
            <Button bgColor="white" w="full">
              Stöd
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
}
