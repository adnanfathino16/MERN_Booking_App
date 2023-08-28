import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", {
        name,
        email,
        password,
      });
      alert("Registration berhasil. silahkan log in");
    } catch (error) {
      alert("email sudah terdaftar");
    }
  };

  return (
    <div className="mt-4 grow flex items-center justify-center">
      <div id="login">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md" onSubmit={registerUser}>
          <input type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="youremail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="primary" type="submit">
            Register
          </button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
