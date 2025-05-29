import React from 'react';
import Gallery from '../components/common/Gallery';
import './Contest.css';

const Contest: React.FC = () => {
  // TODO: 실제 데이터로 교체
  const mockItems = [
    {
      id: 1,
      image: require('../assets/img/test1.png'),
      title: '메이플스토리 공모전',
      description: '메이플스토리 캐릭터 공모전입니다.',
      likes: 1234,
      views: 5678
    },
    {
      id: 2,
      image: require('../assets/img/test2.png'),
      title: '리그오브레전드 공모전',
      description: '리그오브레전드 챔피언 공모전입니다.',
      likes: 2345,
      views: 6789
    }
  ];

  return (
    <div className="contest">
      <div className="contest_header">
        <h1>공모전</h1>
        <div className="contest_filters">
          <button className="active">진행중</button>
          <button>예정</button>
          <button>종료</button>
        </div>
      </div>
      <Gallery items={mockItems} />
    </div>
  );
};

export default Contest; 