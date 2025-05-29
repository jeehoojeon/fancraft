import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar_header">
        <Link to="/" className="logo">
          <img src={require('../../assets/img/logo.png')} alt="FanCraft" />
        </Link>
      </div>

      <div className="sidebar_search">
        <div className="search_bar">
          <input type="text" placeholder="작품검색" />
          <button type="button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <nav className="sidebar_nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <i className="fa-solid fa-house"></i>
              <span>홈</span>
            </Link>
          </li>
          <li>
            <Link to="/illust" className={location.pathname === '/illust' ? 'active' : ''}>
              <i className="fa-solid fa-palette"></i>
              <span>일러스트</span>
            </Link>
          </li>
          <li>
            <Link to="/cartoon" className={location.pathname === '/cartoon' ? 'active' : ''}>
              <i className="fa-solid fa-book"></i>
              <span>만화</span>
            </Link>
          </li>
          <li>
            <Link to="/fiction" className={location.pathname === '/fiction' ? 'active' : ''}>
              <i className="fa-solid fa-book-open"></i>
              <span>소설</span>
            </Link>
          </li>
          <li>
            <Link to="/rank" className={location.pathname === '/rank' ? 'active' : ''}>
              <i className="fa-solid fa-trophy"></i>
              <span>랭킹</span>
            </Link>
          </li>
          <li>
            <Link to="/contest" className={location.pathname === '/contest' ? 'active' : ''}>
              <i className="fa-solid fa-award"></i>
              <span>공모전</span>
            </Link>
          </li>
          <li>
            <Link to="/heart" className={location.pathname === '/heart' ? 'active' : ''}>
              <i className="fa-solid fa-heart"></i>
              <span>즐겨찾기</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar_bottom">
        <button className="upload_btn">
          <i className="fa-solid fa-upload"></i>
          <span>업로드</span>
        </button>
        
        <div className="user_profile">
          <div className="user_info">
            <img 
              src={require('../../assets/img/test1.png')} 
              alt="프로필" 
              className="profile_img" 
            />
            <div className="user_details">
              <p className="user_name">짤랑이</p>
              <p className="user_status">온라인</p>
            </div>
          </div>
          
          <div className="profile_actions">
            <Link to="/profile" className="profile_btn" title="프로필">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/settings" className="profile_btn" title="설정">
              <i className="fa-solid fa-gear"></i>
            </Link>
            <Link to="/logout" className="profile_btn" title="로그아웃">
              <i className="fa-solid fa-right-from-bracket"></i>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;