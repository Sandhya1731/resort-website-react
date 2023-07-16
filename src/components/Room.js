import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
function Room({ id, info }) {
  const { name, slug, images, price } = info;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="" />
        <div className="price-top">
          <h6>$ {price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}
Room.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
export default Room;
