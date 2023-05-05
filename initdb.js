console.log("db script starting");
const db = new Mongo().getDB("happyTails");

const products = db.createCollection("dogs", { capped: false });
console.log("Created collection of dogs.");

db.dogs.insertMany([
  {
    name: "Jack",
    age: 4,
    description:
      "Jack är en vänlig och tillgiven hund som älskar att gosa och vara runt sin familj. Han är bra med barn och andra husdjur, och han tycker om långa promenader och leker apport i parken.",
    category: ["big-dog", "short-hair"],
    gender: "Hane",
    breed: "German Shepherd",
    adoptionPrice: 120000,
    neutered: "Nej",
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
      "Cassie är en smart och energisk hund som älskar att lära sig och utforska. Hon behöver en aktiv ägare som kan ge henne mycket motion och mental stimulans och hon trivs med utmaningar och nya upplevelser.",
    category: ["small-dog", "long-hair"],
    gender: "Hona",
    breed: "Pomeranian mix",
    adoptionPrice: 9000,
    neutered: "Ja",
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
      "Bella är en lojal och beskyddande hund som tar sitt jobb på allvar. Hon är mycket intelligent och lätt att träna. Hon behöver en erfaren ägare som kan ge henne den vägledning och struktur hon längtar efter.",
    category: ["small-dog", "short-hair"],
    gender: "Hona",
    breed: "Jack Russel mix",
    adoptionPrice: 8000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1532275672750-588761c76ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Jack Russel with stick in mouth",
    },
    __v: 0
  },
  {
    name: "Buddy",
    age: 2,
    description: "Buddy är en vänlig, energisk och tillgiven hund som älskar att leka med människor och andra hundar.",
    category: ["big-dog", "short-hair"],
    gender: "Hane",
    breed: "Golden Retriever",
    adoptionPrice: 80000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Golden Retriever sitting in the grass",
    },
    __v: 0
  },
  {
    name: "Lola",
    age: 3,
    description: "Lola är en söt och snäll hund som älskar att gosa och vara bland människor. Hon är bra med barn och andra husdjur.",
    category: ["small-dog", "short-hair"],
    gender: "Hona",
    breed: "Maltese",
    adoptionPrice: 60000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1621878135994-8b56a55d4af5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Little white dog lying on the grass",
    },
    __v: 0
  },
  {
    name: "Rocky",
    age: 5,
    description: "Rocky är en lojal och skyddande hund som älskar att vara runt sin familj. Han behöver daglig träning och mental stimulans.",
    category: ["big-dog", "short-hair"],
    gender: "Hane",
    breed: "Rottweiler",
    adoptionPrice: 100000,
    neutered: "Ja",
    mainImage: {
      url: "https://images.unsplash.com/photo-1662673965936-b8a2fb96c768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Rottweialer staring into the camera",
    },
    __v: 0
  },
  {
    name: "Lucy",
    age: 1,
    description: "Lucy är en energisk och lekfull hund som älskar att springa och leka apport. Hon är bra med barn och andra hundar.",
    category: ["big-dog", "short-hair"],
    gender: "Hona",
    breed: "Labrador Retriever",
    adoptionPrice: 90000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Labrador Retriever lying in the grass",
    },
    __v: 0
  },
  {
    name: "Simba",
    age: 6,
    description: "Simba är en lugn och mild hund som älskar att koppla av och vara runt människor. Han är bra med barn och andra husdjur.",
    category: ["small-dog", "long-hair"],
    gender: "Hane",
    breed: "Cocker Spaniel",
    adoptionPrice: 70000,
    neutered: "Ja",
    mainImage: {
      url: "https://images.unsplash.com/photo-1612389258858-b1da33e68ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Cocker Spaniel sitting down",
    },
    __v: 0
  },
  {
    name: "Rufus",
    age: 2,
    description: "Rufus är en lekfull och vänlig hund som älskar att vara runt människor. Han behöver daglig träning och mental stimulans.",
    category: ["big-dog", "short-hair"],
    gender: "Hane",
    breed: "Bulldog",
    adoptionPrice: 9000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1580460718511-77ab83d4c1b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      alt: "Bulldog stting dowm",
    },
    __v: 0
  },
  {
    name: "Luna",
    age: 4,
    description: "Luna är en intelligent och lojal hund som älskar att vara runt sin familj. Hon är bra med barn och andra husdjur.",
    category: ["big-dog", "long-hair"],
    gender: "Hona",
    breed: "Australian Shepherd",
    adoptionPrice: 110000,
    neutered: "Ja",
    mainImage: {
      url: "https://images.unsplash.com/photo-1558754921-8af27a809c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Australian Shepherd sitting down looking to the side",
    },
    __v: 0,
  },
  {
    name: "Max",
    age: 3,
    description: "Max är en energisk och intelligent hund som älskar att lära och leka. Han behöver en aktiv och erfaren ägare.",
    category: ["big-dog", "short-hair"],
    gender: "Hane",
    breed: "Belgian Malinois",
    adoptionPrice: 130000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1581614061245-05764a727edc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Belgian Malinois sitting down",
    },
    __v: 0
  },
  {
    name: "Daisy",
    age: 1,
    description: "Daisy är en mild och tillgiven hund som älskar att gosa och vara runt människor. Hon är bra med barn och andra husdjur.",
    category: ["small-dog", "long-hair"],
    gender: "Hona",
    breed: "Shih Tzu",
    adoptionPrice: 7000, 
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1589210043112-d4835d91b37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Dog sitting down with tounge out",
    },
    __v: 0
  },
  {
    name: "Diesel",
    age: 1,
    description: "Diesel är en stark och muskulös hund som älskar att träna och leka. Han behöver en erfaren ägare och en säker gård.",
    category: ["big-dog", "short-hair"],
    gender: "Hane",
    breed: "American Staffordshire Terrier",
    adoptionPrice: 7000,
    neutered: "Ja",
    mainImage: {
      url: "https://images.unsplash.com/photo-1616422684383-13b852ffcf7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      alt: "Dog sitting in front of grafiti wall",
    },
    __v: 0
  },
  {
    name: "Zoe",
    age: 2,
    description: "Zoe är en vänlig och tillgiven hund som älskar att vara runt människor. Hon är bra med barn och andra husdjur.",
    category: ["big-dog", "short-hair"],
    gender: "Hona",
    breed: "Boxer",
    adoptionPrice: 10000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1594118319842-b72837a0ecea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      alt: "Boxer dog sitting and staring right into the camera",
    },
    __v: 0
  },
  {
    name: "Bailey",
    age: 3,
    description: "Bailey är en lekfull och energisk hund som älskar att springa och leka apport. Hon är bra med barn och andra hundar.",
    category: ["big-dog", "short-hair"],
    gender: "Hona",
    breed: "Labrador Retriever",
    adoptionPrice: 120000,
    neutered: "Nej",
    mainImage: {
      url: "https://images.unsplash.com/photo-1602941953280-ea523175bcfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=442&q=80",
      alt: "Black dog staring into camera",
    },
    __v: 0
  },
  
]);

console.log("init db completed");
