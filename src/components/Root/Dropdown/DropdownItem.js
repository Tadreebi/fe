import { CDropdownItem } from '@coreui/react';

const DropdownItem = ({ children, ...rest }) => {
  return (
    <CDropdownItem {...rest} >
      {children}
    </CDropdownItem>
  )
};

export default DropdownItem;
