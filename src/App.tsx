import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import Movies from './pages/Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Podcast" element={<Podcast />} />
          <Route path="Movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <TopBanner />
    //   <MovieList />
    // </div>
  );
}

export default App;
