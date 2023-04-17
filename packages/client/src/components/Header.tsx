import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="100vh"
      p={4}
      color="white"
      backgroundAttachment="fixed"
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        py={12}
      >
        <Text color="white" fontSize="6xl" fontWeight="extrabold">
          Hundar söker hem
        </Text>
        <Button color="#baa4a6">Adoptera hund</Button>
      </Box>
    </Box>
  );
}
