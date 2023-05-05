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

dogRouter.get("/search/:searchTerm", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await getSearchedDog(req.params.searchTerm));
  } catch (error) {
    res.status(500).send("Something went went wrong");
  }
});

interface MulterRequest extends Request {
  file: any;
}

dogRouter.post("/", async (req: Request, res: Response<Dog[]>) => {
  const dog = req.body;
  const imagesMulter = (req as MulterRequest).file;
  try {
    dog.mainImage = {
      url: `http://localhost:4000/${imagesMulter.path}`,
    };
    res.send(await saveNewDog(req.body));
  } catch (e) {
    res.sendStatus(400);
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
