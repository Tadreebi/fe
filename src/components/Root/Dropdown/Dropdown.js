import { CDropdown } from '@coreui/react';

const Dropdown = ({ children, ...rest }) => {
  return (
    <CDropdown {...rest} >
      {children}
    </CDropdown>
  )
};

export default Dropdown;
