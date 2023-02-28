import React, { FC } from "react";
import Card from "./Card";

const Gallery: FC = () => {
  return (
    <section className="gallery">
      <h1 className="gallery-title">Image Gallery</h1>
      <Card id={237} />
    </section>
  );
};
export default Gallery;
