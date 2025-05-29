import React from 'react';
import { TagBox } from '../components';
import FictionCard from '../components/FictionCard';
import './Fiction.css';
import testImage from '../assets/img/test4.png';
import testProfile from '../assets/img/test_profile.jpg';

const Fiction: React.FC = () => {
  const mockItems = [
    {
      id: 1,
      image: testImage,
      title: '판타지 소설: 마법의 세계',
      description: '마법과 검술이 공존하는 판타지 세계를 배경으로 한 흥미진진한 모험 이야기입니다...',
      tag: '#판타지 #모험',
      author: '판타지작가',
      authorAvatar: testProfile
    },
    {
      id: 2,
      image: testImage,
      title: 'SF 소설: 미래 도시',
      description: '2077년, 네온사인이 빛나는 미래 도시를 배경으로 한 흥미진진한 SF 소설입니다...',
      tag: '#SF #미래',
      author: 'SF작가',
      authorAvatar: testProfile
    },
    {
      id: 3,
      image: testImage,
      title: '로맨스 소설: 첫사랑',
      description: '우연한 재회로 시작된 달콤한 로맨스 이야기...',
      tag: '#로맨스 #순정',
      author: '로맨스작가',
      authorAvatar: testProfile
    },
    {
      id: 4,
      image: testImage,
      title: '스릴러 소설: 추적자',
      description: '과거의 비밀을 쫓는 추적자와 도망자의 숨막히는 추격전...',
      tag: '#스릴러 #추적',
      author: '스릴러작가',
      authorAvatar: testProfile
    }
  ];

  return (
    <div className="fiction_container">
      <div className="top_header">
        <h2>소설</h2>
        <div className="tag_box_wrap">
          <TagBox title="#판타지" />
          <TagBox title="#SF" />
          <TagBox title="#로맨스" />
          <TagBox title="#스릴러" />
          <TagBox title="#액션" />
          <TagBox title="#무협" />
          <TagBox title="#일상" />
          <TagBox title="#학원" />
          <TagBox title="#게임" />
          <TagBox title="#판타지" />
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
          <div className="fiction_card_grid">
            {mockItems.map((item) => (
              <FictionCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                tag={item.tag}
                author={item.author}
                authorAvatar={item.authorAvatar}
              />
            ))}
          </div>
        </div>

        <div className="section">
          <div className="section_header">
            <div className="ranking_title">
              <div className="ranking_sub">데일리 랭킹</div>
              <div className="ranking_main">인기 소설</div>
            </div>
            <a href="#" className="more_button">
              더보기
            </a>
          </div>
          <div className="fiction_card_grid daily">
            {mockItems.map((item, index) => (
              <FictionCard
                key={item.id}
                image={item.image}
                title={`랭킹 ${index + 1}위 ${item.title}`}
                description={item.description}
                tag={item.tag}
                author={item.author}
                authorAvatar={item.authorAvatar}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiction;