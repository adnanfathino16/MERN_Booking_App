import { Router } from "express";
import { testApi } from "../controllers/test.controller.js";

export const TestRouter = Router();

TestRouter.get("/", testApi);
