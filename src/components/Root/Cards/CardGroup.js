import { CCardGroup } from '@coreui/react';

const CardGroup = ({ children, ...rest }) => {

  return (
    <CCardGroup {...rest}>
      {children}
    </CCardGroup>
  )
}

export default CardGroup
