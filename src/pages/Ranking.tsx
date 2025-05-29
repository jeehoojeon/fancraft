import React from 'react';
import Gallery from '../components/common/Gallery';
import './Ranking.css';

const Ranking: React.FC = () => {
  // TODO: 실제 데이터로 교체
  const mockItems = [
    {
      id: 1,
      image: require('../assets/img/test1.png'),
      title: '메이플스토리 일러스트',
      description: '메이플스토리 캐릭터 일러스트입니다.',
      likes: 1234,
      views: 5678
    },
    {
      id: 2,
      image: require('../assets/img/test2.png'),
      title: '리그오브레전드 일러스트',
      description: '리그오브레전드 챔피언 일러스트입니다.',
      likes: 2345,
      views: 6789
    }
  ];

  return (
    <div className="ranking">
      <div className="ranking_header">
        <h1>랭킹</h1>
        <div className="ranking_filters">
          <button className="active">일러스트</button>
          <button>만화</button>
          <button>소설</button>
        </div>
        <div className="ranking_period">
          <button className="active">일간</button>
          <button>주간</button>
          <button>월간</button>
        </div>
      </div>
      <Gallery items={mockItems} />
    </div>
  );
};

export default Ranking; 