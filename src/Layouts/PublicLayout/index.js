import React from 'react'
import { DashboardContent, DashboardSidebar, Footer, Header } from '../../components/Layouts'

const PublicLayout = () => {
  return (
    <div>
      <DashboardSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">
          <DashboardContent />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PublicLayout
