import { CProgress } from '@coreui/react';

const Progress = ({ children, ...rest }) => {
  return (
    <CProgress {...rest}>
      {children}
    </CProgress>
  )
}

export default Progress;
