import React from 'react';
import { TagBox } from '../components';
import './Heart.css';
import testImage from '../assets/img/test1.png';
import testProfile from '../assets/img/test_profile.jpg';

const Heart: React.FC = () => {
  const mockItems = [
    {
      id: 1,
      image: testImage,
      title: '메이플스토리 일러스트',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 2,
      image: testImage,
      title: '리그오브레전드 일러스트',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 3,
      image: testImage,
      title: '오버워치 일러스트',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 4,
      image: testImage,
      title: '블루아카이브 일러스트',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 5,
      image: testImage,
      title: '테일즈런너 일러스트',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 6,
      image: testImage,
      title: '메이플스토리 만화',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 7,
      image: testImage,
      title: '리그오브레전드 만화',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 8,
      image: testImage,
      title: '오버워치 만화',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 9,
      image: testImage,
      title: '블루아카이브 만화',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 10,
      image: testImage,
      title: '테일즈런너 만화',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 11,
      image: testImage,
      title: '메이플스토리 소설',
      author: '아티스트',
      authorAvatar: testProfile
    },
    {
      id: 12,
      image: testImage,
      title: '리그오브레전드 소설',
      author: '아티스트',
      authorAvatar: testProfile
    }
  ];

  return (
    <div className="heart_container">
      <div className="heart_top_header">
        <h2>찜한 작품</h2>
        <div className="heart_tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
        </div>
      </div>

      <div className="heart_main">
        <div className="heart_section">
          <div className="heart_card_grid">
            {mockItems.map((item) => (
              <div key={item.id} className="heart_card">
                <div 
                  className="heart_card_image" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="heart_card_content">
                  <div className="heart_card_title">{item.title}</div>
                  <div className="heart_card_author">
                    <div 
                      className="heart_author_avatar" 
                      style={{ backgroundImage: `url(${item.authorAvatar})` }}
                    ></div>
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart; 