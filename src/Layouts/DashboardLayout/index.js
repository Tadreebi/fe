import { DashboardContent, DashboardSidebar, Footer, Header } from '../../components/Layouts'
import { CContainer, CHeaderDivider } from '@coreui/react'
import DashboardBreadcrumb from 'src/components/Layouts/DashboardBreadcrumb'

const DashboardLayout = () => {
  return (
    <>
      <DashboardSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <CHeaderDivider />
        <CContainer fluid>
          <DashboardBreadcrumb />
        </CContainer>
        <div className="body flex-grow-1 px-3">
          <DashboardContent />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout
