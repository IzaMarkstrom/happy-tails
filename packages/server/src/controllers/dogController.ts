import { Dog } from "@happy-tails/shared";
import { loadAllDogs, loadSingleDog } from "../models/dog";

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

export { loadDogs, loadDogById };
