import { CTable } from '@coreui/react';

const Table = ({ children, ...rest }) => {
  return (
    <CTable {...rest}>
      {children}
    </CTable>
  )
}

export default Table
