import React, { useState } from "react";
import Movie from "./Components/Movie";
const axios = require("axios").default;

const App = () => {
  const [Datos, setDatos] = useState([{}]);

  const getDatos = (e) => {
    setDatos([])
    e.preventDefault();
    const Valor = e.target[0].value;
    axios(`http://www.omdbapi.com/?s=${Valor}&plot=full&apikey=db85efbd`)
      .then((result) => {
        result.data.Search.map((value) =>
        setDatos(x => [...x, {
          Title: value.Title,
          Year: value.Year,
          Img: value.Poster,
          Type: value.Type,
          imbdID: value.imdbID,
        }])
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <Movie getDatos={getDatos} Datos={Datos} />
    </>
  );
};

export default App;
