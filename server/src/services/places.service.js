import placeModel from "../models/place.model.js";
import { verifyJWT } from "../utils/jwt.js";

export const createPlaces = async (data, token) => {
  const { title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price } = data;
  const verifyUser = verifyJWT(token);
  return await placeModel.create({
    owner: verifyUser.id,
    title: title,
    address: address,
    photos: addedPhotos,
    description: description,
    perks: perks,
    extraInfo: extraInfo,
    checkIn: checkIn,
    checkOut: checkOut,
    maxGuests: maxGuests,
    price: price,
  });
};

export const getDataPlaces = async (token) => {
  const verifyUser = verifyJWT(token);
  const { id } = verifyUser;
  return await placeModel.find({ owner: id });
};

export const getDataPlacesById = async (id) => {
  return await placeModel.findById(id);
};

export const updatePlacesService = async (data, token) => {
  const { id, title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price } = data;
  const verifyUser = verifyJWT(token);
  const placeData = await placeModel.findById(id);
  if (verifyUser.id === placeData.owner.toString()) {
    placeData.set({
      title: title,
      address: address,
      photos: addedPhotos,
      description: description,
      perks: perks,
      extraInfo: extraInfo,
      checkIn: checkIn,
      checkOut: checkOut,
      maxGuests: maxGuests,
      price: price,
    });
    await placeData.save();
  }
};

export const getAllDataPlaces = async () => {
  return await placeModel.find();
};
