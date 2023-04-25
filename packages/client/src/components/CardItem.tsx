import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Dog } from "@happy-tails/shared";

export default function CardItem({ dog }: { dog: Dog }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={dog.mainImage?.url}
          alt={dog.mainImage?.alt}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{dog.name}</Heading>
          <Text>{dog.description}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" bg="brand.primary" color="white">
            Mer info
          </Button>
          <Button variant="ghost" color="brand.green">
            Anmäl intresse
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
