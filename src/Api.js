import { useState, useEffect } from "react";
import "../src/mock/mock";
import { isApi } from "./conf";

export function fetchData(userId, additionalParam) {
  if (!isApi) {
    return import("./mock/mock").then((data) => data.default);
  } else {
    let url = `http://localhost:3000/user/${userId}/${additionalParam}`;
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error 500: Internal Server Error");
        }
        return res.json();
      })
      .then((data) => data);
  }
}

export function useData({ additionalParam }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(12, additionalParam)
      .then((data) => {
        setUser(data);
        setError(null);
      })
      .catch((error) => {
        setUser(null);
        setError(error.message);
      });
  }, [additionalParam]);

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  return user;
}

export default useData;
