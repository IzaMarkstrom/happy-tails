import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function About() {
  return (
    <Box bgColor="brand.primary" w="100%" h="100vh" p={4} color="white">
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        p={28}
      >
        <Text color="" fontSize="6xl" fontWeight="extrabold">
          Stöd oss
        </Text>
        <Text fontSize="md" pb={18}>
          Happy Tails är en organisation som har funnits sedan 2023. Efter
          pandemin såg vi ett ökat antal hundar som behöver omplaceras. Vår
          uppgift är att hjälpa dessa att hitta nya kärleksfulla hem. Vi gör
          allt för att varje hund ska få det den behöver. Organisationen bedrivs
          ideelt och alla gåvor gör skillnad!{" "}
        </Text>
        <Button color="brand.primary">Skänk en gåva</Button>
      </Box>
    </Box>
  );
}
