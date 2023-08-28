import { useContext, useState } from "react";
import { UserContext } from "../redux/UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacePage from "./PlacePage";
import AccountNav from "../components/AccountNav";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);

  const logout = async () => {
    await axios.post("/user/logout");
    setRedirect("/");
    setUser(null);
  };

  // loading muncul karena fetching data user membutuhkan waktu dan state default dari ready adalah false dan berubah menjadi true ketika fetching datanya selesai. ketika sudah menjadi true maka merender component halaman ini
  if (!ready) {
    return "Loading...";
  }

  // ditambahkan ready karena ketika halamannya ini di render dan perlu fetching data profile memerlukan waktu. jadi ketika di feching ready sudah stand by true dan harus true dua2nya supaya navigate ke halaman login. ketika user ada setelah mengambil datanya yang memerlukan waktu maka tidak navigate ke halama login. ketika tidak ada maka menjadi true dari ready dan true dari !user makan navigate ke halama login
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav />
      <div className="text-center max-w-lg mx-auto">
        Logged in as {user.name} ({user.email}) <br />
        <button className="primary max-w-sm mt-2" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
