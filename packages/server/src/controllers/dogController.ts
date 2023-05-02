import { Dog } from "@happy-tails/shared";
import {
  loadAllDogs,
  loadSingleDog,
  saveOne,
  deleteOne,
  searchDog,
} from "../models/dog";

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

const saveNewDog = async (dog: Dog): Promise<Dog[]> => {
  await saveOne(dog);
  return loadAllDogs();
};

const deleteDog = async (id: string): Promise<Dog | null> => {
  return deleteOne(id);
};

const getSearchedDog = async (searchTerm: string): Promise<Dog[]> => {
  const searchResult = await searchDog(searchTerm);
  if (!searchResult) {
    throw new Error("No dogs found");
  }
  return searchResult;
};

export { loadDogs, loadDogById, saveNewDog, deleteDog, getSearchedDog };
