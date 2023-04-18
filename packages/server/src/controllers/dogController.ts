import { Dog } from "@happy-tails/shared";
import { loadAllDogs } from "../models/dog";

const loadDogs = async (): Promise<Dog[]> => {
    return await loadAllDogs();
}

export { loadDogs };