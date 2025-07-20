

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import './App.css';

// import "aos/dist/aos.css";
// import './assets/css/animate.css';
import NetBandLayout from './layouts/NetBandLayout.jsx'

const Home = lazy(() => import('./pages/page'));
const About = lazy(() => import('./pages/about/page'));

function App() {
  return (
    
    <Router>
      {/* <NetBandLayout header={1}>  */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      {/* </NetBandLayout> */}
    </Router>
  );
}

export default App
