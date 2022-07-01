import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const JWT = false;

// Containers
const DashboardLayout = React.lazy(() => import('./Layouts/DashboardLayout'))
const PublicLayout = React.lazy(() => import('./Layouts/PublicLayout'))

// Pages
const Login = React.lazy(() => import('./views/Public/Login'))
const Register = React.lazy(() => import('./views/template/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/template/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/template/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            {JWT ? (
              <Route path="*" name="Home" element={<DashboardLayout />} />
            ) : (
              <Route path="*" name="Home" element={<PublicLayout />} />
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
