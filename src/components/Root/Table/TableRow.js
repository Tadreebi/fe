import { CTableRow } from '@coreui/react';

const TableRow = ({ children, ...rest }) => {
  return (
    <CTableRow {...rest}>
      {children}
    </CTableRow>
  )
}

export default TableRow
