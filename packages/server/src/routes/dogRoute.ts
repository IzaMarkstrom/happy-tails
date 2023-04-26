import { Dog } from "@happy-tails/shared";
import express, { Request, Response } from "express";
import { loadDogs, loadDogById } from "../controllers/dogController";
import { saveDog } from "../models/dog";

const dogRouter = express.Router();

dogRouter.get("/", async (req: Request, res: Response) => {
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

dogRouter.post("/", async (req: Request, res: Response) => {
  try {
    const dog = req.body;
    res.status(200).send(await saveDog(dog));
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

export default dogRouter;
