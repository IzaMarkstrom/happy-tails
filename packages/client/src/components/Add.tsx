import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Add() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [adoptionPrice, setAdoptionPrice] = useState<number>(0);
  const [neutered, setNeutered] = useState<string>("");
  const [mainImage, setMainImage] = useState<File | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(UserContext);

  const baseURL: string =
    process.env.REACT_APP_BASE_URL || "http://localhost:4000";

  const addNewDog = () => {
    axios
      .post(
        `${baseURL}/api/dog`,
        {
          name,
          age,
          description,
          category,
          gender,
          breed,
          adoptionPrice,
          neutered,
          mainImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    await addNewDog();
    onClose();
    window.location.reload();
  };

  return (
    <>
      {user && (
        <Button>
          <Link onClick={onOpen}>Lägg till</Link>
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bgColor="whiteAlpha.500" />
        <ModalContent color="blackAlpha.900" bgColor="gray.300">
          <ModalHeader fontSize="xl" textAlign="center" pt={8}>
            Lägg till ny hund
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Namn</FormLabel>
              <Input
                focusBorderColor="white"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ålder</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setAge(e.target.value as any)}
                value={age}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Beskrivning</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Kategori</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setCategory([e.target.value])}
                value={category}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Kön</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ras</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setBreed(e.target.value)}
                value={breed}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Adoptionspris</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setAdoptionPrice(e.target.value as any)}
                value={adoptionPrice}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Kastrerad</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                onChange={(e) => setNeutered(e.target.value)}
                value={neutered}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Bild</FormLabel>
              <Input
                pr="4.5rem"
                focusBorderColor="white"
                type="file"
                onChange={(e) => setMainImage(e.target.files![0])}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter color="black">
            <Button
              variant="solid"
              bg="brand.primary"
              color="white"
              mr={3}
              type="submit"
              onClick={handleSubmit}
            >
              Lägg till
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
