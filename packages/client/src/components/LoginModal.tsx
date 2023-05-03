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
    InputGroup,
    InputRightElement,
    Text,
    BreadcrumbItem,
    BreadcrumbLink
  } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useEffect, useState, useContext } from "react";
//   import UserContext from "../context/UserContext";
  
  export default function LoginModal() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorText, setErrorText] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  
    // const { setUser } = useContext(UserContext);
  
    const baseURL: string =
      process.env.REACT_APP_BASE_URL || "http://localhost:4000";
  
    const token = localStorage.getItem("jwt");
  
    useEffect(() => {
      axios
        .get(`${baseURL}/api/user/getuser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLoggedIn(true);
        //   setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
          setIsLoggedIn(false);
        });
    }, []);
  
    const handleLogin = async (e: { preventDefault: () => void }) => {
      e.preventDefault();
  
      await axios
        .post(`${baseURL}/api/user/login`, {
          password: password,
          email: email,
        })
        .then((response: any) => {
          const token = response.data;
          localStorage.setItem("jwt", token);
          onClose();
          window.location.reload();
        })
        .catch((e: any) => {
          setErrorText(e.response.data);
        });
    };
  
    return (
      <>
        {!isLoggedIn && (
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink onClick={onOpen}>Admin</BreadcrumbLink>
            </BreadcrumbItem>
        )}
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent color="white" bgColor="gray.500">
            <ModalHeader fontSize="3xl" textAlign="center" pt={8}>
              Enbart till för administratörer av denna hemsida.
            </ModalHeader>
            <ModalHeader fontSize="xl" textAlign="center">
              Logga in som Administratör.
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {errorText && (
                <Text fontSize="19px" color="red">
                  {errorText}
                </Text>
              )}
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  focusBorderColor="white"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Lösenord</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    focusBorderColor="white"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      colorScheme="white"
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? "Göm" : "Visa"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </ModalBody>
  
            <ModalFooter color="black">
              <Button
                variant="solid" 
                bg="brand.primary" 
                color="white"
                mr={3}
                onClick={handleLogin}
              >
                Logga in
              </Button>
              <Button bgColor="gray.300" color="white" onClick={onClose}>
                Avbryt
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  