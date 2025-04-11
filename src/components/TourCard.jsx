import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='tour-card'>
      <div className="tour-header">
        <h3>{name}</h3>
        <h5>${price}</h5>
      </div>
      <img src={image} alt={name} />
      <p>{readMore ? info : `${info.slice(0, 70)}...`}</p>
      <div className="button-container">
        <button className="read-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
        <button
          className="button-remove"
          onClick={() => {
            onRemove(id);
          }}
        >
          Remove Tour
        </button>
      </div>
    </article>
  );
};

export default TourCard;