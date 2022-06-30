import { CButtonGroup } from '@coreui/react';

const ButtonGroup = ({ children, ...rest }) => {

  return (
    <CButtonGroup {...rest}>
      {children}
    </CButtonGroup>
  )
}

export default ButtonGroup
