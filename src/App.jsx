import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SingleStyle from './pages/SingleStyle.jsx';
import ScrollToTop from './components/ScrollToTop.js'; // adjust path if needed
import Docs from './pages/Docs.jsx';
import Setup from './pages/Setup.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />

        <Route path="/docs/:id" element={<SingleStyle />} />
        <Route path="/setup" element={<Setup />} />

      </Routes>
    </>
  );
}

export default App;
