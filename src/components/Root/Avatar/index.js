import { CAvatar } from '@coreui/react';

const Avatar = ({ children, ...rest }) => {
  return (
    <CAvatar {...rest}>
      {children}
    </CAvatar>
  )
}

export default Avatar;
