import { useState, useEffect } from "react";
import "../src/mock/mock";

export function fetchData(userId, additionalParam) {
  if (process.env.NODE_ENV === "development") {
    return import("./mock/mock").then((data) => data.default);
  } else if (process.env.NODE_ENV === "production") {
    let url = `http://localhost:3000/user/${userId}/${additionalParam}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
}
export function useData({ additionalParam }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData(18, additionalParam).then((data) => {
      setUser(data);
    });
  }, [additionalParam]);

  return user;
}

export default useData;
