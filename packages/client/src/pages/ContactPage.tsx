import { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can add your own logic here to submit the form data to your backend or send an email
  };

  return (
    <Box bgColor="brand.primary" w="100%" h="100vh">
      <VStack spacing={4} margin="auto" maxWidth="600px" padding="4">
        <Heading as="h1" size="2xl" textAlign="center" color="white">
          Kontakta oss
        </Heading>
        <Box bgColor="white" p={10} borderRadius="10px" width="85%">
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Namn</FormLabel>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Skriv in ditt namn"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Skriv in din email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="message">Meddelande</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Skriv in ditt meddelande"
              />
            </FormControl>
            <Button
              type="submit"
              variant="solid"
              bg="brand.primary"
              color="white"
              mt={4}
            >
              Skicka
            </Button>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}
