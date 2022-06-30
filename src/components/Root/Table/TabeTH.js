import { CTableHeaderCell } from '@coreui/react';

const TableTH = ({ children, ...rest }) => {
  return (
    <CTableHeaderCell {...rest}>
      {children}
    </CTableHeaderCell>
  )
}

export default TableTH
