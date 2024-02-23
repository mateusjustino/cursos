import { useEffect, useState } from "react";
import api from "../../services/api";
//https://api.themoviedb.org/3/movie/now_playing?api_key=6876ef12b2f4338d57e35ac8d4f4faf8&language=pt-br
const Home = () => {
  const [filmes, setFilmes] = useState();

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "6876ef12b2f4338d57e35ac8d4f4faf8",
          language: "pt-br",
          page: 1,
        },
      });
      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
