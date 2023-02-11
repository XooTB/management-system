import { useState } from "react";
import { useAuthContext } from "./useAuth";
import { useAtom } from "jotai";
import { latestOrderAtom } from "../atoms/orderAtom";

export const useAddOrder = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();
  const { user } = useAuthContext();

  const [latestOrder, setLatestOrder] = useAtom(latestOrderAtom);

  const add = async (orderDetails, shippingDetails) => {
    setIsLoading(true);
    setError(null);

    const userToken = user.token;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/order/new`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ orderDetails, shippingDetails }),
        }
      );

      const json = await response.json();

      // if there was an Error.
      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      // if the Order was added successfully!
      if (response.ok) {
        setLatestOrder(json);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { add, isLoading, error };
};
