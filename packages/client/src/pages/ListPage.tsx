import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { Dog } from "@happy-tails/shared";
import CardItem from "../components/CardItem";
import { SimpleGrid, Box, VStack } from "@chakra-ui/react";
import Search from "../components/Search";
import Add from "../components/Add";

const API_ENDPOINT = "http://localhost:4000/api";

interface State {
  data: Dog[];
  isLoading: boolean;
  isError: boolean;
}

type Action =
  | { type: "FETCH_INIT"; payload: boolean }
  | { type: "FETCH_SUCCESS"; payload: Dog[] }
  | { type: "FETCH_FAILURE"; payload: boolean }
  | { type: "CLEAR" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    case "CLEAR":
      return { ...state, isLoading: false, isError: false, data: [] };
    default:
      return state;
  }
};

export default function ListPage() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: true,
    isError: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(`${API_ENDPOINT}/dog/${searchTerm}`);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "FETCH_FAILURE", payload: true });
    }
  };

  const removeItem = (_id: string) => {
    try {
      axios.delete(`${API_ENDPOINT}/dog/${_id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUrl(`${API_ENDPOINT}/dog/search/${searchTerm}`);
  };

  const clearResults = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleSearchCategory = (searchCategory: string) => {
    setUrl(`${API_ENDPOINT}/dog/search/${searchCategory}`);
  };

  return (
    <Box height="100vh">
      <VStack mt="6" spacing="3" justifyContent="center">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchInput={handleSearchInput}
          onSearchSubmit={handleSearchSubmit}
          onClick={clearResults}
          handleSearchCategory={handleSearchCategory}
        />
        <Add />
      </VStack>

      {state.isError && <div>Something went wrong ...</div>}
      {state.isLoading ? (
        <div>Loading ...</div>
      ) : (
        <SimpleGrid
          p={8}
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {state.data &&
            state.data.map((dog) => {
              return (
                <CardItem key={dog._id} dog={dog} removeItem={removeItem} />
              );
            })}
        </SimpleGrid>
      )}
    </Box>
  );
}
