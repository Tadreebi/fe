import { CTableHead } from '@coreui/react';

const TableHeader = ({ children, ...rest }) => {
  return (
    <CTableHead {...rest}>
      {children}
    </CTableHead>
  )
}

export default TableHeader
