import "dotenv/config";

const CONFIG = {
  db: process.env.DB,
  jwt_private: process.env.JWT_PRIVATE,
};

export default CONFIG;
