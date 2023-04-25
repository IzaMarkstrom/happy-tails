import React, { useState } from "react";
import "./App.css";
import { Dog } from "@happy-tails/shared";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ListPage from "./ListPage";

function App() {
  const [dog, setDog] = useState<Dog>({
    id: "1",
    name: "Hugo",
    age: 2,
    description: "A good boy who needs a forever home",
    category: ["small dog", "short hair"],
    gender: "Male",
    breed: "Jack Russel",
    adoptionPrice: 6500,
    neutered: "No",
  });

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <ListPage />
    </div>
  );
}

export default App;
