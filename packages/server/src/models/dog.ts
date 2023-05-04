import { Dog } from "@happy-tails/shared";
import { Schema, model } from "mongoose";

const DogSchema = new Schema({
  name: String,
  age: Number,
  description: String,
  category: [String],
  gender: String,
  breed: String,
  adoptionPrice: Number,
  neutered: String,
  mainImage: { url: String, alt: String },
});

const DogModel = model<Dog>("Dog", DogSchema);

const loadAllDogs = async (): Promise<Dog[]> => {
  return DogModel.find({}).exec();
};

const loadSingleDog = async (id: string): Promise<Dog | null> => {
  return DogModel.findById(id).exec();
};

const saveOne = async (dog: Dog): Promise<Dog> => {
  const newDog = new DogModel(dog);
  return newDog.save();
};

const deleteOne = async (id: string): Promise<Dog | null> => {
  return DogModel.findByIdAndDelete(id).exec();
};

const searchDog = async (searchTerm: string): Promise<Dog[]> => {
  return DogModel.find({ 
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { category: {$elemMatch: { $eq: searchTerm}}}
    ],
  }).exec();
};

export { loadAllDogs, loadSingleDog, saveOne, deleteOne, searchDog };
