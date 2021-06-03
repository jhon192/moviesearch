import React from "react";
import Movies from "./Movies";

const Movie = (prop) => {
  const getDatos = () => (
    prop.Datos.map((x) => (
      <Movies x={x} key={x.imbdID} />
    ))
  );

  return (
    <div style={{ backgroundColor: "inherit" }} className="mb-2">
      <div className="card card-body p-2 bg-danger" id="esto20">
        <form onSubmit={prop.getDatos} className="form-group">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              name="textvalue"
              className="w-auto mb-2 form-control"
              placeholder="Introducir su pelicula"
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Dale click"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
      <div className="completed-grid">
        {getDatos()}
        </div>
      </div>
  );
};

export default Movie;
