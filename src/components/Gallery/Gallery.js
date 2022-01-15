import React from "react";
import "./Style.css";

const Gallery = props => {
  return (
    <div id="gallery-container">
      <div id="gallery-items">{props.children}</div>
    </div>
  );
};

export default Gallery;
