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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { Dog } from "@happy-tails/shared";

export default function CardItem({ dog }: { dog: Dog }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
            <Button
              variant="solid"
              bg="brand.primary"
              color="white"
              onClick={onOpen}
            >
              Mer info
            </Button>
            <Button variant="ghost" color="brand.green">
              Anmäl intresse
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{dog.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Age: {dog.age}</p>
            <p>Adoption price: {dog.adoptionPrice}</p>
            <p>Breed: {dog.breed}</p>
            <p>Gender: {dog.gender}</p>
            <p>Neutered: {dog.neutered}</p>
          </ModalBody>

          <ModalFooter>
            <Button bg="brand.beige" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
