import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import './styles/variables.css';
import './styles/global.css';
import { GlobalStyle } from './styles/GlobalStyle';
import Illust from './pages/Illust';
import Cartoon from './pages/Cartoon';
import Fiction from './pages/Fiction';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="illust" element={<Illust />} />
          <Route path="cartoon" element={<Cartoon />} />
          <Route path="fiction" element={<Fiction />} />
          <Route path="rank" element={<div>랭킹 페이지</div>} />
          <Route path="contest" element={<div>공모전 페이지</div>} />
          <Route path="heart" element={<div>즐겨찾기 페이지</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
