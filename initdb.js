console.log("db script starting");
const db = new Mongo().getDB("happyTails");

const products = db.createCollection("dogs", { capped: false });
console.log("Created collection of dogs.");

db.dogs.insertMany([
  {
    name: "Jack",
    age: 4,
    description:
      "Jack is a friendly and affectionate dog who loves to cuddle and be around his family. He is good with kids and other pets, and he enjoys long walks and playing fetch in the park.",
    category: ["big dog", "long hair"],
    gender: "male",
    breed: "German Shepherd",
    adoptionPrice: 120000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80",
      alt: "German Shepherd staring into camera",
    },
    __v: 0,
    // slug: "cute-german-sherpherd",
  },
  {
    name: "Cassie",
    age: 4,
    description:
      "Cassie is a smart and energetic dog who loves to learn and explore. She needs an active owner who can give her plenty of exercise and mental stimulation, and she thrives on challenges and new experiences.",
    category: ["small dog", "long hair"],
    gender: "Female",
    breed: "Pomeranian mix",
    adoptionPrice: 9000,
    neutered: "Yes",
    mainImage: {
      url: "https://images.unsplash.com/photo-1630766786510-85bc1c6f18d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      alt: "Pomeranian in the grass",
    },
    __v: 0
  },
  {
    name: "Bella",
    age: 2,
    description:
      "Bella is a loyal and protective dog who takes her job seriously. She is highly intelligent and easily trainable, and she will stop at nothing to keep her family safe. She needs an experienced owner who can provide her with the guidance and structure she craves.",
    category: ["small dog", "long hair"],
    gender: "Female",
    breed: "Jack Russel mix",
    adoptionPrice: 8000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1532275672750-588761c76ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Jack Russel with stick in mouth",
    },
    __v: 0
  },
  {
    name: "Buddy",
    age: 2,
    description: "Buddy is a friendly, energetic and affectionate dog who loves playing with people and other dogs.",
    category: ["medium dog", "long hair"],
    gender: "male",
    breed: "Golden Retriever",
    adoptionPrice: 80000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Golden Retriever sitting in the grass",
    },
    __v: 0
  },
  {
    name: "Lola",
    age: 3,
    description: "Lola is a sweet and gentle dog who loves to cuddle and be around people. She is good with kids and other pets.",
    category: ["small dog", "medium hair"],
    gender: "female",
    breed: "Maltese",
    adoptionPrice: 60000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1621878135994-8b56a55d4af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Little white dog lying on the grass",
    },
    __v: 0
  },
  {
    name: "Rocky",
    age: 5,
    description: "Rocky is a loyal and protective dog who loves to be around his family. He needs daily exercise and mental stimulation.",
    category: ["big dog", "short hair"],
    gender: "male",
    breed: "Rottweiler",
    adoptionPrice: 100000,
    neutered: "Yes",
    mainImage: {
      url: "https://images.unsplash.com/photo-1662673965936-b8a2fb96c768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Rottweialer staring into the camera",
    },
    __v: 0
  },
  {
    name: "Lucy",
    age: 1,
    description: "Lucy is an energetic and playful dog who loves to run and play fetch. She is good with kids and other dogs.",
    category: ["medium dog", "short hair"],
    gender: "female",
    breed: "Labrador Retriever",
    adoptionPrice: 90000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Labrador Retriever lying in the grass",
    },
    __v: 0
  },
  {
    name: "Simba",
    age: 6,
    description: "Simba is a calm and gentle dog who loves to relax and be around people. He is good with kids and other pets.",
    category: ["medium dog", "medium hair"],
    gender: "male",
    breed: "Cocker Spaniel",
    adoptionPrice: 70000,
    neutered: "Yes",
    mainImage: {
      url: "https://images.unsplash.com/photo-1612389258858-b1da33e68ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Cocker Spaniel sitting down",
    },
    __v: 0
  },
  {
    name: "Rufus",
    age: 2,
    description: "Rufus is a playful and friendly dog who loves to be around people. He needs daily exercise and mental stimulation.",
    category: ["big dog", "short hair"],
    gender: "male",
    breed: "Bulldog",
    adoptionPrice: 9000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1580460718511-77ab83d4c1b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      alt: "Bulldog stting dowm",
    },
    __v: 0
  },
  {
    name: "Luna",
    age: 4,
    description: "Luna is an intelligent and loyal dog who loves to be around her family. She is good with kids and other pets.",
    category: ["medium dog", "long hair"],
    gender: "female",
    breed: "Australian Shepherd",
    adoptionPrice: 110000,
    neutered: "Yes",
    mainImage: {
      url: "https://images.unsplash.com/photo-1558754921-8af27a809c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Australian Shepherd sitting down looking to the side",
    },
    __v: 0,
  },
  {
    name: "Max",
    age: 3,
    description: "Max is a high-energy and intelligent dog who loves to learn and play. He needs an active and experienced owner.",
    category: ["medium dog", "short hair"],
    gender: "male",
    breed: "Belgian Malinois",
    adoptionPrice: 130000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1581614061245-05764a727edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Belgian Malinois sitting down",
    },
    __v: 0
  },
  {
    name: "Daisy",
    age: 1,
    description: "Daisy is a gentle and affectionate dog who loves to cuddle and be around people. She is good with kids and other pets.",
    category: ["small dog", "medium hair"],
    gender: "female",
    breed: "Shih Tzu",
    adoptionPrice: 7000, 
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1589210043112-d4835d91b37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Dog sitting down with tounge out",
    },
    __v: 0
  },
  {
    name: "Diesel",
    age: 1,
    description: "Diesel is a strong and muscular dog who loves to exercise and play. He needs an experienced owner and a secure yard.",
    category: ["big dog", "short hair"],
    gender: "male",
    breed: "American Staffordshire Terrier",
    adoptionPrice: 7000,
    neutered: "Yes",
    mainImage: {
      url: "https://images.unsplash.com/photo-1616422684383-13b852ffcf7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Dog sitting in front of grafiti wall",
    },
    __v: 0
  },
  {
    name: "Zoe",
    age: 2,
    description: "Zoe is a friendly and affectionate dog who loves to be around people. She is good with kids and other pets.",
    category: ["medium dog", "short hair"],
    gender: "female",
    breed: "Boxer",
    adoptionPrice: 10000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1594118319842-b72837a0ecea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      alt: "Boxer dog sitting and staring right into the camera",
    },
    __v: 0
  },
  {
    name: "Bailey",
    age: 3,
    description: "Bailey is a playful and energetic dog who loves to run and play fetch. She is good with kids and other dogs.",
    category: ["medium dog", "short hair"],
    gender: "female",
    breed: "Labrador Retriever",
    adoptionPrice: 120000,
    neutered: "No",
    mainImage: {
      url: "https://images.unsplash.com/photo-1602941953280-ea523175bcfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
      alt: "Black dog staring into camera",
    },
    __v: 0
  },
  
]);

console.log("init db completed");
