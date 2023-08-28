import userModel from "../models/user.model.js";

export const createUser = async (payload) => {
  return await userModel.create(payload);
};

export const findUserByEmail = async (email) => {
  return await userModel.findOne({ email });
};

export const findUserById = async (id) => {
  return await userModel.findById(id);
};
