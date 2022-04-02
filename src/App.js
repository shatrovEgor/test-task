import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import { useSelector } from 'react-redux';
import { privateRoutes, publicRoutes } from './routes';

function App() {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {auth
            ? (privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.id}
              />
            )))
            : (publicRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.id}
              />
            )))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
