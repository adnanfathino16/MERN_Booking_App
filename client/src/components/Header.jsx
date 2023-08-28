// icons
import { PiPaperPlane } from "react-icons/pi";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../redux/UserContext";
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="flex justify-between">
      {/* logo start */}
      <Link to={"/"} className="flex items-center gap-1">
        <PiPaperPlane className="w-8 h-8" />
        <span className="font-bold text-xl">adnbng</span>
      </Link>
      {/* logo end */}

      {/* search start */}
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className="bg-primary text-white p-1 rounded-full">
          <BiSearch />
        </button>
      </div>
      {/* search end */}

      {/* user start */}
      <div className="flex gap-2 border border-gray-300 rounded-full py-2 px-4 items-center">
        <Link to={user ? "/account" : "/login"}>
          <RxHamburgerMenu className="h-5 w-5" />
        </Link>
        <FaUserCircle className="h-6 w-6 text-gray-400" />
        {!!user && <div>{user.name}</div>}
      </div>
      {/* user end */}
    </header>
  );
};

export default Header;
