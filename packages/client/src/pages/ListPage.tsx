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
}

type Action =
  | { type: "SET_DATA"; payload: Dog[] }
  | { type: "SET_LOADING"; payload: boolean };

const initialState: State = {
  data: [],
  isLoading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default function ListPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading } = state;

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("/dog")
      .then((res) => {
        dispatch({ type: "SET_DATA", payload: res.data });
        dispatch({ type: "SET_LOADING", payload: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <SimpleGrid
          p={8}
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {data &&
            data.map((dog) => {
              return <CardItem dog={dog} />;
            })}
        </SimpleGrid>
      )}
    </div>
  );
}
