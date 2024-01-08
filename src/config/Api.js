import axios from "axios";

export const api = "https://jsonplaceholder.typicode.com";

export const getData = async (setUsers) => {
  const response = await axios.get(`${api}/users`);
  // console.log(response);
  console.log(response.data);
  setUsers(response.data);
};

// useEffect(() => {
//   fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "your-api-key",
//       "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       setJoke(data[0].joke);
//       console.log(data);
//     })
//     .catch((error) => console.log(error));
// }, []);

// fetch(`${API}/products`, {
//       method: "POST",
//       body: JSON.stringify(newProduct),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then((res) => res.json())
//       .then(() => navigate("/products"))

//   }
