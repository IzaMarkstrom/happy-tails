import { Dog } from '@happy-tails/shared';
import { Schema, model } from 'mongoose';

const DogSchema = new Schema({
    name: String,
    age: Number,
    description: String,
    category: [String],
    gender: String,
    breed: String,
    adoptionPrice: Number,
    neutered: String,
    mainImage: { url: String, alt: String }
});

const DogModel = model<Dog>('Dog', DogSchema);

const loadAllDogs = async (): Promise<Dog[]> => {
    return await DogModel.find({}). exec();
  };

export { loadAllDogs };