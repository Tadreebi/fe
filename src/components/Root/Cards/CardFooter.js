import { CCardFooter } from '@coreui/react';

const CardFooter = ({ children, ...rest }) => {

  return (
    <CCardFooter {...rest}>
      {children}
    </CCardFooter>
  )
}

export default CardFooter
