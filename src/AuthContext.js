import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";
import { useSearchParams } from "react-router-dom";

const context = createContext();

function AuthContextProvider({ children }) {
  const [cardData, setCardData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [group, setGroup] = useState(searchParams.get("groupBy") || "status");
  const [order, setOrder] = useState("priority");

  const fetchApi = useCallback(() => {
    const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCardData(data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <context.Provider
      value={{
        cardData,
        group,
        setGroup,
        order,
        setOrder,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </context.Provider>
  );
}

export const useAuthProvider = () => useContext(context);
export { AuthContextProvider, context };
