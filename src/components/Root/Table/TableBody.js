import { CTableBody } from '@coreui/react';

const TableBody = ({ children, ...rest }) => {
  return (
    <CTableBody {...rest}>
      {children}
    </CTableBody>
  )
}

export default TableBody
