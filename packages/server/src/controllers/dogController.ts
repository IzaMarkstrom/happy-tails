import { Dog } from "@happy-tails/shared";
import { loadAllDogs, loadSingleDog, searchDog } from "../models/dog";

const loadDogs = async (): Promise<Dog[]> => {
  return await loadAllDogs();
};

const loadDogById = async (id: string): Promise<Dog> => {
  const dog = await loadSingleDog(id);
  if (!dog) {
    throw new Error("Dog not found");
  }
  return dog;
};

const getSearchedDog = async (searchTerm: string): Promise<Dog[]> => {
  const searchResult = await searchDog(searchTerm);
  if (!searchResult) {
    throw new Error("No dogs found");
  }
  return searchResult;
};

export { loadDogs, loadDogById, getSearchedDog };
