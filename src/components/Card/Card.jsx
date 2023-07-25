import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,link}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a  target="_blank" href={link}>
      <button className="c-button">LEARN MORE</button>
      </a>
      
    </div>
  );
};

export default Card;
