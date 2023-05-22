import { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData(userId) {
      let url = `http://localhost:3000/user/${userId}/`;
      try {
        let res = await fetch(url);
        let data = await res.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(18);
  }, []);

  return user;
}
