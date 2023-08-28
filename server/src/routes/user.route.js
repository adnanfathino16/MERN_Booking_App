import { Router } from "express";
import { registerUser, loginUser, getUser, logoutUser } from "../controllers/user.controller.js";

export const UserRouter = Router();

UserRouter.post("/register", registerUser);
UserRouter.post("/login", loginUser);
UserRouter.post("/logout", logoutUser);
UserRouter.get("/profile", getUser);
