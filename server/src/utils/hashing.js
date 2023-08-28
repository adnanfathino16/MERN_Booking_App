import bcrypt from "bcryptjs";

export const hashing = (password) => {
  return bcrypt.hashSync(password, 10);
};

export const checkPassword = (password, userPassword) => {
  return bcrypt.compareSync(password, userPassword);
};
