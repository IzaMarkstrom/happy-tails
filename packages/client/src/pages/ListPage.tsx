import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { Dog } from "@happy-tails/shared";
import CardItem from "../components/CardItem";
import { SimpleGrid } from "@chakra-ui/react";

axios.defaults.baseURL =
  process.env.REACT_APP_TODO_API || "http://localhost:4000/api";

interface State {
  data: Dog[];
  isLoading: boolean;
  isError: boolean;
}

type Action =
  | { type: "FETCH_INIT"; payload: boolean }
  | { type: "FETCH_SUCCESS"; payload: Dog[] }
  | { type: "FETCH_FAILURE"; payload: boolean };

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
    default:
      return state;
  }
};

export default function ListPage() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    dispatch({ type: "FETCH_INIT", payload: true });
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("/dog")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE", payload: true });
      });
  };

  return (
    <div>
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
              return <CardItem dog={dog} />;
            })}
        </SimpleGrid>
      )}
    </div>
  );
}
