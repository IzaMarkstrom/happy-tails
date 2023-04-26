import { Dog } from "@happy-tails/shared";
import { loadAllDogs, loadSingleDog, saveOne, deleteOne } from "../models/dog";

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

export { loadDogs, loadDogById, saveNewDog, deleteDog };
