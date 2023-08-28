import { createBooking, getAllDataBookings } from "../services/booking.service.js";

export const saveBooking = async (req, res) => {
  const { token } = req.cookies;
  try {
    const bookingDoc = await createBooking(req.body, token);
    return res.json(bookingDoc);
  } catch (error) {
    return res.json({ error });
  }
};

export const getAllBookings = async (req, res) => {
  const { token } = req.cookies;
  try {
    const bookingDoc = await getAllDataBookings(token);
    return res.json(bookingDoc);
  } catch (error) {
    return res.json({ error });
  }
};
