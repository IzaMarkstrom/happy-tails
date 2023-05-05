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
          <Heading size="lg" color="brand.dark">
            <a href="/">Happy Tails 🐾</a>
          </Heading>
        </Box>
        <Spacer />
        <Flex
          alignItems="flex-end"
          gap="2"
          display={{ base: "none", md: "flex" }}
        >
          <Button bg="white" color="brand.beige">
            <a href="/dogs">Hundarna</a>
          </Button>
          <Button bg="white" color="brand.beige">
            <a href="/donation">Donation</a>
          </Button>
          <Button bg="white" color="brand.beige">
            Om oss
          </Button>
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
              <a href="/dogs">Hundarna</a>
            </Button>
            <Button bgColor="white" w="full">
              <a href="/donation">Donation</a>
            </Button>
            <Button bgColor="white" w="full">
              Om oss
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
}
