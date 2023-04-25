import React from 'react'
import { Box, FormControl, FormLabel, Input, Text, RadioGroup, HStack, Radio, Button } from "@chakra-ui/react";

export default function ApplicationPage() {
  return (
    <>
    <Box bgColor="brand.primary" w="100%" h="100vh" p={4} color="white">
      <Box 
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          >
            <Box width="70%">
              <Text fontSize="6xl" fontWeight="extrabold" pb={10}>
                Lämna in en ansökan.
              </Text>
              <Text fontSize="md">
              Hej och välkommen till vår ansökningsformulär för adoption av hundar som blivit övergivna efter pandemin. 
              Vi är glada över att du funderar på att ge en hemlös hund en andra chans till ett lyckligt liv. Innan du 
              skickar in din ansökan, vill vi gärna ge dig några tips att tänka på. <br /> <br />
              För det första, se till att du är redo och kapabel att ta hand om en hund. Att ha en hund är ett stort ansvar 
              och kräver tid, pengar och engagemang. Säkerställ att du har tillräckligt med tid för att tillbringa med din 
              nya fyrbenta vän och att du har råd med eventuella veterinärkostnader och andra utgifter.<br /> <br />

              För det andra, tänk noga igenom vilken typ av hund som skulle passa din livsstil. Varje hundras har 
              olika behov och temperament, så se till att välja en som passar din livsstil och personlighet. Om du 
              bor i en lägenhet och inte har tillgång till en trädgård, kanske en mindre hundras är bättre lämpad för dig.<br /> <br />

              För det tredje, se till att alla i ditt hushåll är på samma sida när det gäller beslutet att adoptera 
              en hund. Alla som kommer att dela sitt hem med hunden bör vara medvetna om ansvaret och vad det innebär 
              att ta hand om en hund.<br /> <br />

              Tack för att du överväger att ge en hemlös hund en chans till ett kärleksfullt hem. 
              Vi ser fram emot att höra från dig och hjälpa dig att hitta den perfekta hunden för dig och din familj!
              </Text>
            </Box>
      </Box>
    </Box>
    <Box bgColor="gray.100" w="100%" h="100vh" p={4} color="white">
      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
        <Text color="brand.primary" fontSize="4xl" fontWeight="extrabold" pb={10}>Ansökningsforumlär</Text>
        <Box width="60%">
          <FormControl isRequired>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">Förnamn</FormLabel>
            <Input placeholder='Förnamn' bgColor="whiteAlpha.700" mb={2}/>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">Efternamn</FormLabel>
            <Input placeholder='Efternamn' bgColor="whiteAlpha.700" mb={2}/>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">Telefonnummer</FormLabel>
            <Input placeholder='Telefonnummer' type='number' bgColor="whiteAlpha.700" mb={2}/>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">E-mail</FormLabel>
            <Input placeholder="E-mail" type="email" bgColor="whiteAlpha.700" mb={2}/>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">Gatuadress</FormLabel>
            <Input placeholder='Adress' bgColor="whiteAlpha.700" mb={2}/>
            <FormLabel as="legend" color="brand.primary" fontSize="l" fontWeight="extrabold">Hur bor du/ni?</FormLabel>
            <RadioGroup mb={2}>
              <HStack spacing="24px" bgColor="whiteAlpha.700">
                <Radio value="Hus"><Text color="brand.primary">Hus</Text></Radio>
                <Radio value="Lägenhet"><Text color="brand.primary">Lägenhet</Text></Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">Yrke/Titel</FormLabel>
            <Input placeholder="Yrke/Titel" bgColor="whiteAlpha.700" mb={2}/>
            <FormLabel color="brand.primary" fontSize="l" fontWeight="extrabold">Arbetsplats</FormLabel>
            <Input placeholder="Arbetsplats" bgColor="whiteAlpha.700" mb={2}/>
            <Button colorScheme="blue">Ansök</Button>
        </Box>
      </Box>
    </Box>
      </>
  )
}
