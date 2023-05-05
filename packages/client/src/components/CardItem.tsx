import React, { useContext } from "react";
import UserContext from "../context/UserContext";
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { Dog } from "@happy-tails/shared";

export default function CardItem({
  dog,
  removeItem,
}: {
  dog: Dog;
  removeItem: Function;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(UserContext);

  const handleDelete = async (_id: string) => {
    console.log("delete", _id);
    await removeItem(dog._id);
  };
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
          <Stack spacing={2} align="center">
            <ButtonGroup spacing="">
              <Button
                variant="solid"
                bg="brand.primary"
                color="white"
                onClick={onOpen}
              >
                Mer info
              </Button>
              <Button variant="ghost" color="brand.green">
                <a href="/application-form">Ansök</a>
              </Button>

              {user && (
                <Popover>
                  <PopoverTrigger>
                    <Button
                      variant="solid"
                      color="brand.green"
                      onClick={() => handleDelete(dog._id)}
                    >
                      Ta bort
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Hunden borttagen</PopoverHeader>
                  </PopoverContent>
                </Popover>
              )}
            </ButtonGroup>
          </Stack>
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
