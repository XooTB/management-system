import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used within a AuthContext Provider");
  }

  return context;
};
