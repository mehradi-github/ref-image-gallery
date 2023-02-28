import React, { FC } from "react";
interface Iprop {
  id: number;
}
const Card: FC<Iprop> = ({ id }) => {
  return (
    <figure className="card">
      <img
        src={`https://picsum.photos/id/${id}/200`}
        width="200"
        height="200"
        alt="Lorem, ipsum."
      />
      <figcaption className="card-caption">Lorem, ipsum.</figcaption>
    </figure>
  );
};
export default Card;
