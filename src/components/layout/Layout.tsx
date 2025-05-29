import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 