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
import Ranking from './pages/Ranking';
import Contest from './pages/Contest';
import Heart from './pages/Heart';

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
          <Route path="rank" element={<Ranking />} />
          <Route path="contest" element={<Contest />} />
          <Route path="heart" element={<Heart />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
