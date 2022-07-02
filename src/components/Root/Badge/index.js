import { CBadge } from '@coreui/react';

const Badge = ({ children, ...rest }) => {
  return (
    <CBadge {...rest}>
      {children}
    </CBadge>
  )
}

export default Badge;
