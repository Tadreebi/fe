import { CCollapse } from '@coreui/react';

const Collapse = ({ children, ...rest }) => {

  return (
    <CCollapse {...rest}>
      {children}
    </CCollapse>
  )
}

export default Collapse
