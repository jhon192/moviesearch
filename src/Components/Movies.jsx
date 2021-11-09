import React from "react";

const Movies = (prop) => {
  const { Title, Year, Type, Img, imbdID } = prop.x;
  console.log(Title);
  return (
    <div className="item-grid">
      {
        (Title,
        Year,
        Type,
        Img,
        imbdID ? (
          <div className="card m-5">
            <div className="card-body m-2" >
              <div className="d-flex justify-content-center">
                <img
                  src={Img}
                  alt=""
                  className="card-img-top"
                  style={{ width: "250px", height: "250px" }}
                />
              </div>
              <div className="card-body">
                <h6>Title: {Title}</h6>
                <p>Year: {Year}</p>
                <p>Type: {Type}</p>
                <p>ID: {imbdID}</p>
              </div>
              <div className="d-flex justify-content-center">
                <a className="btn btn-success" href={`https://es.wikipedia.org/wiki/${Title}`} target="blank">Go to wikipedia</a>
              </div>
            </div>
          </div>
        ) : (
          ""
        ))
      }
    </div>
  );
};

export default Movies;
