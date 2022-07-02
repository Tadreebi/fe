import { CDropdownDivider } from '@coreui/react';

const DropdownDivider = ({ children, ...rest }) => {
  return (
    <CDropdownDivider {...rest} >
      {children}
    </CDropdownDivider>
  )
};

export default DropdownDivider;
