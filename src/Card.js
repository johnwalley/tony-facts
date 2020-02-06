import React from 'react';
import avatar from './avatar.png';
import './Card.css';

function Card({ content }) {
  return (
    <div className="container">
      <img src={avatar} alt="Tony" />
      <p className="content">{content}</p>
    </div>
  );
}

export default Card;
