import { CTableFoot } from '@coreui/react';

const TableFooter = ({ children, ...rest }) => {
  return (
    <CTableFoot {...rest}>
      {children}
    </CTableFoot>
  )
}

export default TableFooter
