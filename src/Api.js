import { useState, useEffect } from "react";
import "../src/mock/mock";
import { isApi } from "./conf";

export function fetchData(userId, additionalParam) {
  if (!isApi) {
    return import("./mock/mock").then((data) => data.default);
  } else {
    let url = `http://localhost:3000/user/${userId}/${additionalParam}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
}
export function useData({ additionalParam }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData(12, additionalParam).then((data) => {
      setUser(data);
    });
  }, [additionalParam]);

  return user;
}

export default useData;
