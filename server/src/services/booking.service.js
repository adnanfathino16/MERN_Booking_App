import bookingModel from "../models/booking.model.js";
import { verifyJWT } from "../utils/jwt.js";

export const createBooking = async (data, token) => {
  const { place, checkIn, checkOut, numberOfGuests, name, phone, price } = data;
  const verifyUser = verifyJWT(token);
  return await bookingModel.create({
    place,
    user: verifyUser.id,
    checkIn,
    checkOut,
    numberOfGuests,
    name,
    phone,
    price,
  });
};

export const getAllDataBookings = async (token) => {
  const verifyUser = verifyJWT(token);
  return await bookingModel.find({ user: verifyUser.id }).populate("place");
};
