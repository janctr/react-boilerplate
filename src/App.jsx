import { useState } from 'react';
import Home from './pages/Home/Home';
import MyPage from './pages/MyPage/MyPage';
import ProcessMaps from './pages/ProcessMaps/ProcessMaps';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router';

import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/process-maps" element={<MyPage />} />
                <Route path="/tasks" element={<ProcessMaps />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}
