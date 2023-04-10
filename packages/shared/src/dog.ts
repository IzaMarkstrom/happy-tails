export interface Dog {
  id: string;
  name: string;
  age: number;
  description: string;
  category: string[];
  gender: string;
  breed: string;
  adoptionPrice: number;
  neutered: string;
  mainImage?: { url: string; alt: string };
}
