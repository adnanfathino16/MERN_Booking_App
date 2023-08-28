import { createPlaces, getAllDataPlaces, getDataPlaces, getDataPlacesById, updatePlacesService } from "../services/places.service.js";

export const savePlaces = async (req, res) => {
  const { token } = req.cookies;
  const placeDoc = await createPlaces(req.body, token);
  return res.json(placeDoc);
};

export const getPlacesByOwnerId = async (req, res) => {
  const { token } = req.cookies;
  const dataPlacesUser = await getDataPlaces(token);
  return res.json(dataPlacesUser);
};

export const getPlacesByPlacesId = async (req, res) => {
  const { id } = req.params;
  const placeById = await getDataPlacesById(id);
  return res.json(placeById);
};

export const updatePlaces = async (req, res) => {
  const { token } = req.cookies;
  await updatePlacesService(req.body, token);
  return res.json("ok");
};

export const getPlaces = async (req, res) => {
  const allDataPlaces = await getAllDataPlaces();
  return res.json(allDataPlaces);
};
