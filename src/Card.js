import React from 'react';
import avatar from './avatar.png';
import './Card.css';

function Card({ content }) {
  return (
    <div className="container">
      <img src={avatar} alt="Tony" />
      <h1>{content}</h1>
    </div>
  );
}

export default Card;
