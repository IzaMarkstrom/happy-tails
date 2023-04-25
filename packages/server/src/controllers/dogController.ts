import { Dog } from "@happy-tails/shared";
import { loadAllDogs, loadSingleDog, saveDog } from "../models/dog";

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
  await saveDog(dog);
  return loadAllDogs();
};

export { loadDogs, loadDogById, saveNewDog };
