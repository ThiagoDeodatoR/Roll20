import React from 'react';
import './styles.css';

interface CardData {
    imgUrl : string;
    HeaderT : string;
    info : string;
}

const Cards = ({imgUrl, HeaderT, info } : CardData) => {
  return (
      <div className="card">
        <img src={imgUrl} alt={HeaderT}/>
        <h3>{HeaderT}</h3>
        <p>{info}</p>
      </div>
  );
}

export default Cards;