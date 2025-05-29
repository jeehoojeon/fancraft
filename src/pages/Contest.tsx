import React from 'react';
import { TagBox } from '../components';
import ContestCard from '../components/ContestCard';
import './Contest.css';
import testImage from '../assets/img/test1.png';
import testProfile from '../assets/img/test_profile.jpg';

const Contest: React.FC = () => {
  const mockContests = [
    {
      id: 1,
      image: testImage,
      title: '2025 여름 장마 콘테스트',
      author: '콘테스트 주최',
      authorAvatar: testProfile,
      link: '/contest/1'
    },
    {
      id: 2,
      image: testImage,
      title: '2025 워터 콘테스트',
      author: '콘테스트 주최',
      authorAvatar: testProfile,
      link: '/contest/2'
    },
    {
      id: 3,
      image: testImage,
      title: '2025 여름 콘테스트',
      author: '콘테스트 주최',
      authorAvatar: testProfile,
      link: '/contest/3'
    },
    {
      id: 4,
      image: testImage,
      title: '2025 여름 콘테스트',
      author: '콘테스트 주최',
      authorAvatar: testProfile,
      link: '/contest/4'
    }
  ];

  return (
    <div className="contest_container">
      <div className="contest_top_header">
        <h2>콘테스트</h2>
        <div className="contest_tag_box_wrap">
          <TagBox title="#메이플스토리" />
          <TagBox title="#리그오브레전드" />
          <TagBox title="#오버워치" />
          <TagBox title="#블루아카이브" />
          <TagBox title="#테일즈런너" />
        </div>
      </div>
      <div className="contest_main">
        {/* 전체 콘테스트 섹션 */}
        <div className="contest_section">
          <div className="contest_section_header">
            <h3 className="contest_section_title">전체 콘테스트</h3>
          </div>
          <div className="contest_list">
            {mockContests.map((contest) => (
              <ContestCard
                key={contest.id}
                image={contest.image}
                title={contest.title}
                author={contest.author}
                authorAvatar={contest.authorAvatar}
                link={contest.link}
              />
            ))}
          </div>
        </div>

        {/* 최신 콘테스트 섹션 */}
        <div className="contest_section">
          <div className="contest_section_header">
            <h3 className="contest_section_title">최신 콘테스트</h3>
          </div>
          <div className="contest_list">
            {mockContests.slice(0, 2).map((contest) => (
              <ContestCard
                key={contest.id}
                image={contest.image}
                title={contest.title}
                author={contest.author}
                authorAvatar={contest.authorAvatar}
                link={contest.link}
              />
            ))}
          </div>
        </div>

        {/* 마감임박 콘테스트 섹션 */}
        <div className="contest_section">
          <div className="contest_section_header">
            <h3 className="contest_section_title">마감임박 콘테스트</h3>
          </div>
          <div className="contest_list">
            {mockContests.slice(2, 4).map((contest) => (
              <ContestCard
                key={contest.id}
                image={contest.image}
                title={contest.title}
                author={contest.author}
                authorAvatar={contest.authorAvatar}
                link={contest.link}
              />
            ))}
          </div>
        </div>

        {/* 페이지네이션 */}
        <div className="contest_pagination">
          <a href="#">‹</a>
          <a href="#" className="active">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">›</a>
        </div>
      </div>
    </div>
  );
};

export default Contest; 