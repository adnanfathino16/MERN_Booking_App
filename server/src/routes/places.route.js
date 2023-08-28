import { Router } from "express";
import { savePlaces, getPlacesByPlacesId, updatePlaces, getPlacesByOwnerId, getPlaces } from "../controllers/places.controller.js";

export const PlacesRouter = Router();

PlacesRouter.post("/", savePlaces);
PlacesRouter.put("/", updatePlaces);
PlacesRouter.get("/user-places", getPlacesByOwnerId);
PlacesRouter.get("/:id", getPlacesByPlacesId);
PlacesRouter.get("/", getPlaces);
