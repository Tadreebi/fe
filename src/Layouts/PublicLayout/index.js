import React from 'react'
import { PublicContent, Footer, Header } from '../../components/Layouts'

const PublicLayout = () => {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header notDashboard />
        <div className="body flex-grow-1 px-3">
          <PublicContent />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PublicLayout
