import React from 'react';
import { Card, TagBox } from '../components';
import './Cartoon.css';
import testProfile from '../assets/img/test_profile.jpg';

const Cartoon = () => {
  // 카드 데이터 배열
  const cardData = [
    {
      id: 1,
      image: require('../assets/img/home_img1.png'),
      title: '오버워치',
      description: "이번 테마는 '여름 물 놀이'으로 그렸어요. 여러분도 시원한 여름 보내길~ ",
      likes: 1200,
      views: 3400
    },
    {
      id: 2,
      image: require('../assets/img/home_img2.png'),
      title: '오버워치',
      description: '애정 가득 담았어요. 소중히 감상해 주세요!',
      likes: 892,
      views: 2100
    },
    {
      id: 3,
      image: require('../assets/img/home_img3.png'),
      title: '오버워치',
      description: '복 많이 받으세요! 새해 인사 드립니다 :)',
      likes: 2300,
      views: 5700
    },
    {
      id: 4,
      image: require('../assets/img/home_img4.png'),
      title: '오버워치',
      description: '더운 하루, 오버워치 팀과 함께 떠난 가상의 여름 바캉스',
      likes: 654,
      views: 1800
    },
    {
      id: 5,
      image: require('../assets/img/home_img5.png'),
      title: '오버워치',
      description: '이 여름, 게임 속에서 피어난 또 하나의 추억을 팬아트로 남깁니다.',
      likes: 3100,
      views: 7200
    },
    {
      id: 6,
      image: require('../assets/img/home_img6.png'),
      title: '발로란트',
      description: '처음 만났을 때의 설렘을 잊지 못해, 팬아트로 그려봅니다',
      likes: 421,
      views: 989
    },
    {
      id: 7,
      image: require('../assets/img/home_img7.png'),
      title: '발로란트',
      description: '너무 귀엽지 않나여~~?',
      likes: 1700,
      views: 4100
    },
    {
      id: 8,
      image: require('../assets/img/home_img8.png'),
      title: '던전앤파이터',
      description: '이 캐릭터가 없었다면 지금의 나는 없었을지도 몰라요',
      likes: 892,
      views: 2300
    }
  ];

  return (
    <div className="cartoon_container">
      <div className="top_header">
        <h2>만화</h2>
        <div className="tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
          <TagBox title="더보기" />
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
            {cardData.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                author="아티스트"
                imageUrl={item.image}
                profileImageUrl={testProfile}
                likes={item.likes}
                views={item.views}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="ranking_title">
              <div className="ranking_sub">데일리 랭킹</div>
              <div className="cartoon_ranking_main">인기 만화</div>
            </div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="card_grid daily">
            {cardData.slice(0, 4).map((item, index) => (
              <Card
                key={item.id}
                title={`랭킹 ${index + 1}위 ${item.title}`}
                author={['TopArtist', 'SecondBest', 'ThirdPlace', 'FourthPlace'][index]}
                imageUrl={item.image}
                profileImageUrl={testProfile}
                likes={item.likes}
                views={item.views}
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