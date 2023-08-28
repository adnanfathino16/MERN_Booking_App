import jwt from "jsonwebtoken";
import CONFIG from "../config/environtment.js";

export const signJWT = (payload, options) => {
  return jwt.sign(payload, CONFIG.jwt_private, {
    ...(options && options),
  });
};

export const verifyJWT = (token) => {
  return jwt.verify(token, CONFIG.jwt_private);
};
