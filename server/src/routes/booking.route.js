import { Router } from "express";
import { saveBooking, getAllBookings } from "../controllers/booking.controller.js";

export const BookingRouter = Router();

BookingRouter.post("/", saveBooking);
BookingRouter.get("/", getAllBookings);
