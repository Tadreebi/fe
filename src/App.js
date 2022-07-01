import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DashboardLayout = React.lazy(() => import('./Layouts/DashboardLayout'))
const PublicLayout = React.lazy(() => import('./Layouts/PublicLayout'))

// Pages
const Login = React.lazy(() => import('./views/template/pages/login/Login'))
const Register = React.lazy(() => import('./views/template/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/template/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/template/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DashboardLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
