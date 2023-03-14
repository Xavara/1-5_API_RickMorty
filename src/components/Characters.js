import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr></hr>
              <p>
                <b>Species: </b>
                {item.species}
              </p>
              <p>
                <b>Location: </b>
                {item.origin.name}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="column"></div>
    </div>
  );
};

export default Characters;
