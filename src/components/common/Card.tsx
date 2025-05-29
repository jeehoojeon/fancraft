import React from 'react';
import './Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  likes: number;
  views: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  likes,
  views,
  onClick
}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} className="card_image" />
      <div className="card_content">
        <h3 className="card_title">{title}</h3>
        <p className="card_description">{description}</p>
        <div className="card_footer">
          <div className="card_stats">
            <span><i className="fa-solid fa-heart"></i> {likes.toLocaleString()}</span>
            <span><i className="fa-solid fa-eye"></i> {views.toLocaleString()}</span>
          </div>
          <button className="more_btn">더보기</button>
        </div>
      </div>
    </div>
  );
};

export default Card; 