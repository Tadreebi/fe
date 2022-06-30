import { cilArrowCircleBottom, cilArrowCircleRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CCard, CCardBody, CCardHeader, CCollapse } from '@coreui/react';
import { useState } from 'react';

const CollapseCard = ({ title, open, children }) => {
  const [visible, setVisible] = useState(open);

  return (
    <CCard className="mb-4">
      <CCardHeader onClick={() => setVisible(current => !current)} className="p-3">
        {title}

        <div style={{ float: "right" }}>
          <CIcon icon={visible ? cilArrowCircleBottom : cilArrowCircleRight} />
        </div>
      </CCardHeader>

      <CCollapse visible={visible}>
        <CCardBody>
          {children}
        </CCardBody>
      </CCollapse>
    </CCard>
  )
}

export default CollapseCard
