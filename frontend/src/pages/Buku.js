import React from "react";

function Buku(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default Buku;
