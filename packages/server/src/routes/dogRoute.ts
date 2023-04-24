import { Dog } from "@happy-tails/shared";
import express, { Request, Response } from "express";
import { loadDogs, loadDogById } from "../controllers/dogController";

const dogRouter = express.Router();

dogRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadDogs());
  } catch (error) {
    res.status(500).send("Something went went wrong getting products");
  }
});

//get dog by id
dogRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await loadDogById(req.params.id));
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

export default dogRouter;
