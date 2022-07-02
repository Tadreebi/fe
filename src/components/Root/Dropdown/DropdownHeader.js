import { CDropdownHeader } from '@coreui/react';

const DropdownHeader = ({ children, ...rest }) => {
  return (
    <CDropdownHeader {...rest} >
      {children}
    </CDropdownHeader>
  )
};

export default DropdownHeader;
