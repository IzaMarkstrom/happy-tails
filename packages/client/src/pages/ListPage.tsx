import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dog } from "@happy-tails/shared";
import CardItem from "../components/CardItem";
import { SimpleGrid } from "@chakra-ui/react";

export default function ListPage() {
  axios.defaults.baseURL =
    process.env.REACT_APP_TODO_API || "http://localhost:4000/api";

  const [data, setData] = useState<Dog[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("/dog")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
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
