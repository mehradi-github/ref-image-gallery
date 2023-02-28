import React, { FC } from "react";
import Card from "./Card";

const Gallery: FC = () => {
  return (
    <section className="gallery">
      <h1 className="gallery-title">Image Gallery</h1>
      {[237, 42, 76, 206].map((i) => (
        <Card id={i} />
      ))}
    </section>
  );
};
export default Gallery;
