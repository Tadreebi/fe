import { useState } from 'react';
import { DashboardContent, DashboardSidebar, Footer, Header } from '../../components/Layouts'

const DashboardLayout = () => {
  const [sidebarShow, setSidebarShow] = useState(true);

  return (
    <>
      <DashboardSidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
        <div className="body flex-grow-1 px-3">
          <DashboardContent />
        </div>
        <Footer />
      </div>
    </>
  )
};

export default DashboardLayout;
