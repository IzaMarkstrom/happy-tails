import { Dog } from "@happy-tails/shared";
import express, { Request, Response } from "express";
import { loadDogs } from "../controllers/dogController";

const dogRouter = express.Router();

dogRouter.get("/", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await loadDogs());
    } catch (error) {

    }
});

export default dogRouter;