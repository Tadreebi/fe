import { CTableDataCell } from '@coreui/react';

const TableTD = ({ children, ...rest }) => {
  return (
    <CTableDataCell {...rest}>
      {children}
    </CTableDataCell>
  )
}

export default TableTD
