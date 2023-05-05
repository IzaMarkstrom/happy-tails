import { Dog } from "@happy-tails/shared";
import express, { Request, Response } from "express";
import {
  loadDogs,
  loadDogById,
  getSearchedDog,
  deleteDog,
  saveNewDog,
} from "../controllers/dogController";

const dogRouter = express.Router();

dogRouter.get("/search", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadDogs());
  } catch (error) {
    res.status(500).send("Something went went wrong getting products");
  }
});

dogRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadDogById(req.params.id));
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

dogRouter.get("/search/:searchTerm", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await getSearchedDog(req.params.searchTerm));
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

dogRouter.post("/", async (req: Request, res: Response) => {
  try {
    const inputDog: Dog = req.body;
    const newDog = await saveNewDog(inputDog);
    console.log(newDog);
    res.status(200).send(newDog);
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

dogRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await deleteDog(req.params.id));
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

export default dogRouter;
