import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const [userNombre, setUserNombre] = useState(() => {
    const savedUserNombre = localStorage.getItem("userNombre");
    return savedUserNombre || "";
  });

  const [logeado, setLogeado] = useState(() => {
    const saved = localStorage.getItem("logeado");
    return saved === "true";
  });

  const getUser = (value) => {
    setUserNombre(value);
  };

  const getUserId = (value) => {
    setUserId(value);
  };

  const handleLogear = (status) => {
    setLogeado(status);
    localStorage.setItem("logeado", status);
  };

  const handleLogout =()=>{
    setUser(null)
    setUserId(null)
    setUserNombre("");

    localStorage.removeItem("user")
    localStorage.removeItem("userNombre")
    localStorage.removeItem("logeado")

    handleLogear(false)
  }

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userNombre", userNombre);
  }, [userNombre]);

  return (
    <UserContext.Provider
      value={{
        userNombre,
        setUserNombre,
        user,
        getUser,
        logeado,
        handleLogear,
        userId,
        getUserId,
        handleLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};