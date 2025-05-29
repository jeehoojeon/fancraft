import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import HomeCard from '../components/HomeCard';
import './Home.css';

const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const breakpointColumns = {
    default: 5,
    1600: 4,
    1200: 3,
    900: 2,
    600: 1
  };

  // TODO: 실제 데이터로 교체
  const mockItems = [
    {
      id: 1,
      image: require('../assets/img/test1.png'),
      title: '롤 팬아트',
      description: '마법의 세계를 그린 아름다운 일러스트입니다. 화려한 색감과 세밀한 디테일이 돋보이는 작품으로...',
      likes: 1200,
      views: 3400
    },
    {
      id: 2,
      image: require('../assets/img/test2.png'),
      title: '로맨스 웹툰',
      description: '달콤한 로맨스 스토리를 담은 웹툰입니다.',
      likes: 892,
      views: 2100
    },
    {
      id: 3,
      image: require('../assets/img/test3.png'),
      title: 'SF 소설: 미래 도시',
      description: '2077년, 네온사인이 빛나는 미래 도시를 배경으로 한 흥미진진한 SF 소설입니다. 인공지능과 인간의 갈등을 그린 작품...',
      likes: 2300,
      views: 5700
    },
    {
      id: 4,
      image: require('../assets/img/test4.png'),
      title: '캐릭터 디자인',
      description: '독특한 스타일의 캐릭터 디자인',
      likes: 654,
      views: 1800
    },
    {
      id: 5,
      image: require('../assets/img/test1.png'),
      title: '판타지 배경 일러스트',
      description: '중세 판타지를 배경으로 한 웅장한 성과 드래곤이 있는 일러스트입니다. 압도적인 스케일과 디테일...',
      likes: 3100,
      views: 7200
    },
    {
      id: 6,
      image: require('../assets/img/test2.png'),
      title: '미니멀 아트',
      description: '심플하지만 강렬한 메시지를 담은 미니멀 아트',
      likes: 421,
      views: 989
    },
    {
      id: 7,
      image: require('../assets/img/test3.png'),
      title: '포트레이트 스터디',
      description: '사실적인 인물화 연습 작품입니다. 빛과 그림자의 표현이 인상적인...',
      likes: 1700,
      views: 4100
    },
    {
      id: 8,
      image: require('../assets/img/test4.png'),
      title: '코미디 만화',
      description: '일상의 재미있는 순간들을 담은 개그 만화',
      likes: 892,
      views: 2300
    },
    {
      id: 9,
      image: require('../assets/img/test1.png'),
      title: '디지털 페인팅',
      description: '자연 풍경을 디지털로 그린 아름다운 페인팅 작품입니다. 따뜻한 색감과 부드러운 터치가...',
      likes: 2800,
      views: 6500
    },
    {
      id: 10,
      image: require('../assets/img/test2.png'),
      title: '애니메이션 스타일',
      description: '일본 애니메이션 스타일의 캐릭터 일러스트',
      likes: 1500,
      views: 3700
    },
    {
      id: 11,
      image: require('../assets/img/test3.png'),
      title: '추상화',
      description: '감정을 색채로 표현한 추상 미술 작품',
      likes: 567,
      views: 1200
    },
    {
      id: 12,
      image: require('../assets/img/test4.png'),
      title: '스팀펑크 일러스트',
      description: '증기기관과 기계 문명이 발달한 대체역사 세계를 그린 스팀펑크 스타일의 일러스트입니다...',
      likes: 2100,
      views: 4800
    }
  ];

  const loadMoreItems = () => {
    if (loading) return;
    
    setLoading(true);
    // 실제 API 호출 대신 mockItems를 사용
    setTimeout(() => {
      const newItems = mockItems.map(item => ({
        ...item,
        id: item.id + (page * mockItems.length)
      }));
      setItems(prev => [...prev, ...newItems]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, loading]);

  useEffect(() => {
    loadMoreItems();
  }, []);

  return (
    <div className="home">
      <Masonry
        breakpointCols={breakpointColumns}
        className="gallery"
        columnClassName="gallery_column"
      >
        {items.map((item) => (
          <HomeCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            likes={item.likes}
            views={item.views}
          />
        ))}
      </Masonry>
      {loading && (
        <div className="loading">
          <div className="loading_spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Home; 