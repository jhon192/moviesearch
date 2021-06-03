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
            <div className="card-body m-2">
              <img
                src={Img}
                alt=""
                className="card-img-top"
                style={{ width: "250px", height: "250px" }}
              />
              <div className="card-body">
                <h5>Title: {Title}</h5>
                <p>Year: {Year}</p>
                <p>Type: {Type}</p>
                <p>ID: {imbdID}</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        ))
      }
    </div>
  );
};

export default Movies;
