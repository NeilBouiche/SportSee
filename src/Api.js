import { useState, useEffect } from "react";
import "../src/mock/mock";
import { isApi } from "./conf";

export async function fetchData(userId, additionalParam) {
  if (!isApi) {
    const data = await import("./mock/mock");
    return data.default;
  } else {
    try {
      let url = `http://localhost:3000/user/${userId}/${additionalParam}`;
      const res = await fetch(url);
      if (res.status === 500) {
        throw new Error("Internal Server Error");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      document.getElementById("root").innerHTML =
        "Error 500: Internal Server Error";
      console.log("Error 500: Internal Server Error");
    }
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
