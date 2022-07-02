import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home/index';

export function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={Home} /> */}
      </Routes>
    </div>
  );
}
