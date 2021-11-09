import React, { useState } from "react";
import Movie from "./Components/Movie";
const axios = require("axios").default;

const App = () => {
  const [Datos, setDatos] = useState([{}]);

  const {REACT_APP_API_KEY} = process.env

  const getDatos = (e) => {
    setDatos([])
    e.preventDefault();
    const Valor = e.target[0].value;
    axios({
      method: "get",
      url: "http://www.omdbapi.com",
      params: {
        s: Valor,
        apikey: REACT_APP_API_KEY
      }
    })
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
