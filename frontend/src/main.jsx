import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from './components/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import ChatConsole from './components/ChatConsole';
import { ProfilePage } from './components';
import ChatArea from './components/ChatArea';

function Root() {
  const [token, setToken] = useState(null);

  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>

          <Route path="chatConsole" element={<ChatConsole />}>
            <Route path="home" element={<Home />} />
            <Route path="" element={<ChatArea />} />

          </Route>
          <Route path="/" element={<Login setToken={setToken} />} />
          <Route path="signup" element={<SignUp />} />

        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);