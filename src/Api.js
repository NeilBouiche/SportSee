import { useState, useEffect } from "react";
import "../src/mock/mock";

function fetchData(userId, additionalParam) {
  if (process.env.NODE_ENV === "development") {
    return import("./mock/mock").then((data) => data.default);
  } else if (process.env.NODE_ENV === "production") {
    let url = `http://localhost:3000/user/${userId}/${additionalParam}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }
}
const useData = ({ additionalParam }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData(18, additionalParam).then((data) => {
      setUser(data);
      console.log(data.data.sessions);
    });
  }, [additionalParam]);

  return user;
};

export default useData;
