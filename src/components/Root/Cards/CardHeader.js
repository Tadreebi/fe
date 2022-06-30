import { CCardHeader } from '@coreui/react';

const CardHeader = ({ children, ...rest }) => {

  return (
    <CCardHeader {...rest} className="p-3">
      {children}
    </CCardHeader>
  )
}

export default CardHeader
