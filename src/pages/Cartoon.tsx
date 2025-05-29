import React from 'react';
import { Card, TagBox } from '../components';
import './Cartoon.css';
import testCartoon from '../assets/img/test_cartoon.png';
import testProfile from '../assets/img/test_profile.jpg';

const Cartoon = () => {
  return (
    <div className="cartoon_container">
      <div className="top_header">
        <h2>만화</h2>
        <div className="tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#던전앤파이터" />
          <TagBox title="#오버워치" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#로스트아크" />
          <TagBox title="#발로란트" />
          <TagBox title="#배틀그라운드" />
          <TagBox title="#디아블로" />
          <TagBox title="#스타크래프트" />
          <TagBox title="#월드오브워크래프트" />
        </div>
      </div>
      <div className="main">
        <div className="section">
          <div className="section_header">
            <div className="section_title">추천작품</div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                title="추천 만화"
                author="아티스트"
                imageUrl={testCartoon}
                profileImageUrl={testProfile}
                likes={1234}
                views={5678}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="ranking_title">
              <div className="ranking_sub">데일리 랭킹</div>
              <div className="ranking_main">인기 만화</div>
            </div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid daily">
            {[1, 2, 3, 4].map((item, index) => (
              <Card
                key={item}
                title={`랭킹 ${index + 1}위 만화`}
                author={['TopArtist', 'SecondBest', 'ThirdPlace', 'FourthPlace'][index]}
                imageUrl={testCartoon}
                profileImageUrl={testProfile}
                likes={1234}
                views={5678}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="section_title">인기태그</div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid tags">
            <div className="tag_card">
              <div className="tag_card_title">메이플스토리</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">던전앤파이터</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">오버워치</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">리그오브레전드</div>
            </div>
            <div className="tag_card">
              <div className="tag_card_title">로스트아크</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoon; 