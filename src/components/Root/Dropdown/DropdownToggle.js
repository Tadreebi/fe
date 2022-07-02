import { CDropdownToggle } from '@coreui/react';

const DropdownToggle = ({ children, ...rest }) => {
  return (
    <CDropdownToggle {...rest} >
      {children}
    </CDropdownToggle>
  )
};

export default DropdownToggle;
