import { createUser, findUserByEmail, findUserById } from "../services/user.service.js";
import { checkPassword, hashing } from "../utils/hashing.js";
import { signJWT, verifyJWT } from "../utils/jwt.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashingPw = hashing(password);
    await createUser({ name, email, password: hashingPw });
    return res.status(201).json({ status: true, statusCode: 201, message: "Success register user" });
  } catch (error) {
    return res.status(422).json({ status: false, statusCode: 422, message: error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    const checkPw = checkPassword(password, user.password);
    if (!checkPw) return res.status(422).json("email atau password salah");

    const accessToken = signJWT({ email: user.email, id: user._id }, { expiresIn: "1d" });
    return res
      .cookie("token", accessToken, {
        maxAge: 3600000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json(user);
  } else {
    return res.status(422).json("email atau password salah");
  }
};

export const logoutUser = (req, res) => {
  res.cookie("token", "").json(true);
};

export const getUser = async (req, res) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const verifyUser = verifyJWT(token);
      const { name, email, _id } = await findUserById(verifyUser.id);
      return res.status(200).json({ name, email, _id });
    } else {
      return res.json(null);
    }
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
