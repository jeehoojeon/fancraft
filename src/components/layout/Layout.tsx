import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';
import Footer from '../common/Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || '';

  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar currentPath={currentPath} />
      </div>
      <div className="content_area">
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 