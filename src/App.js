import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { useSelector } from "react-redux";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DashboardLayout = lazy(() => import('./Layouts/DashboardLayout'));
const PublicLayout = lazy(() => import('./Layouts/PublicLayout'));

// Pages
const Landing = lazy(() => import('./views/Public/Landing'));

function App() {
  const JWT = useSelector(_ => _);

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" exact name="Landing" element={<Landing />} />

          {JWT?.length > 10 ? (
            <Route path="*" name="Home" element={<DashboardLayout />} />
          ) : (
            <Route path="*" name="Home" element={<PublicLayout />} />
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
