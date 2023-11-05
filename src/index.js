import axios from "axios";

const API_KEY = "live_kFx31tabtFTd3FdziqDfhtSK06fkkYdiKTpjfKEkhhIGrzCbxSGu8tfjzNbj1pjR"; // Підставте свій унікальний ключ доступу

axios.defaults.headers.common["x-api-key"] = API_KEY;

// Функція для виконання GET-запиту за колекцією порід
export const fetchBreeds = () => {
  return axios.get("https://api.thecatapi.com/v1/breeds")
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

// Решта коду залишається незмінним.
