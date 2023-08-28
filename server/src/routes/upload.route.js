import { Router } from "express";
import { uploadByLink, uploadByLocal } from "../controllers/upload.controller.js";
import { photosMiddleware } from "../middleware/upload.middleware.js";

export const UploadRouter = Router();

UploadRouter.post("/by-link", uploadByLink);
UploadRouter.post("/local", photosMiddleware, uploadByLocal);
