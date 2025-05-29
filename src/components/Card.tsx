import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title: string;
  author: string;
  imageUrl: string;
  profileImageUrl: string;
  likes: number;
  views: number;
}

const CardContainer = styled.div`
  border: 1px solid #333;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(110, 255, 81, 0.2);
    border-color: #6eff51;
  }
`;

const CardImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    background-size: cover;
    transition: transform 0.8s ease;
    z-index: 1;
  }

  ${CardContainer}:hover &::before {
    transform: scale(1.08);
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 15px;
  background-color: #000511;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
  font-family: 'nexon_medium';
  font-weight: 500;
`;

const CardAuthor = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  font-size: 12px;
`;

const AuthorAvatar = styled.div<{ imageUrl: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
  margin-right: 8px;
`;

const CardStats = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  color: #888;
  font-size: 12px;
`;

export const Card: React.FC<CardProps> = ({ 
  title, 
  author, 
  imageUrl, 
  profileImageUrl,
  likes,
  views 
}) => {
  return (
    <CardContainer>
      <CardImage imageUrl={imageUrl} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardAuthor>
          <AuthorAvatar imageUrl={profileImageUrl} />
          <span>{author}</span>
        </CardAuthor>
        <CardStats>
          <span><i className="fa-solid fa-heart"></i> {likes.toLocaleString()}</span>
          <span><i className="fa-solid fa-eye"></i> {views.toLocaleString()}</span>
        </CardStats>
      </CardContent>
    </CardContainer>
  );
}; 