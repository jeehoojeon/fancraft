import React from 'react';
import './Ranking.css';

const Ranking: React.FC = () => {
  return (
    <div className="ranking_container">
      <div className="ranking_top_header">
        <h2>랭킹</h2>
        <div className="ranking_header_categories">
          <a href="#" className="active">전체</a>
          <a href="#">일러스트</a>
          <a href="#">만화</a>
          <a href="#">소설</a>
        </div>
        <div className="ranking_tag_box_wrap">
          <a href="#" className="ranking_tag_box">#오버워치</a>
          <a href="#" className="ranking_tag_box">#메이플스토리</a>
          <a href="#" className="ranking_tag_box">#원신</a>
          <a href="#" className="ranking_tag_box">#블루아카이브</a>
          <a href="#" className="ranking_tag_box">#원피스</a>
        </div>
      </div>

      <div className="ranking_main">
        {/* 1위 하이라이트 */}
        <div className="ranking_top_section">
          <div className="ranking_featured_card">
            <div className="ranking_featured_left">
              <div className="ranking_featured_image">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
                  alt="해변여행"
                />
              </div>
              <div className="ranking_featured_info">
                <div className="ranking_featured_title">오버워치 썸머 비치 파티!</div>
                <div className="ranking_featured_tags">
                  <span className="ranking_tag">#오버워치</span>
                  <span className="ranking_tag">#2025워터콘테스트</span>
                  <span className="ranking_tag">#썸머</span>
                </div>
                <div className="ranking_featured_author">
                  <div className="ranking_author_avatar"></div>
                  <span className="ranking_author_name">빔은고양이이야</span>
                </div>
                <div className="ranking_featured_stats">
                  <div className="ranking_stat_item">
                    <i className="fa-solid fa-eye"></i>
                    <span>1,200</span>
                  </div>
                  <div className="ranking_stat_item">
                    <i className="fa-solid fa-heart"></i>
                    <span>800</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ranking_featured_right">
              <div className="ranking_number">1위</div>
              <div className="ranking_featured_title_right">오버워치 썸머 비치 파티!</div>
            </div>
          </div>
        </div>

        {/* 작품 그리드 */}
        <div className="ranking_works_grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="ranking_work_card">
              <div className="ranking_work_image">
                <img
                  src={`https://images.unsplash.com/photo-${1578662996442 + item}?w=300&h=200&fit=crop`}
                  alt={`작품${item}`}
                />
              </div>
              <div className="ranking_work_content">
                <div className="ranking_work_category">게임</div>
                <div className="ranking_work_title">게임 시작하고</div>
                <div className="ranking_work_author">
                  <div className="ranking_work_author_avatar"></div>
                  <span className="ranking_work_author_name">강국의 아름</span>
                </div>
                <div className="ranking_work_stats">
                  <div className="ranking_work_stat">
                    <i className="fa-solid fa-eye"></i>
                    <span>1,200</span>
                  </div>
                  <div className="ranking_work_stat">
                    <i className="fa-solid fa-heart"></i>
                    <span>800</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="ranking_pagination">
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

export default Ranking; 