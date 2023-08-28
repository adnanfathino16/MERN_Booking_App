import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  const getUser = async () => {
    if (!user) {
      await axios
        .get("/user/profile")
        .then((response) => {
          setUser(response.data);
          setReady(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser, ready }}>{children}</UserContext.Provider>
    </>
  );
};
