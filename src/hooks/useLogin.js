import { useAuthContext } from "./useAuth";
import { useState } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      // console.log(import.meta.env.VITE_API_URL);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`, // Login Endpoint
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }
      if (response.ok) {
        dispatch({ type: "LOGIN", payload: json });
        localStorage.setItem("user", JSON.stringify(json));
        isLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { isLoading, error, login };
};
