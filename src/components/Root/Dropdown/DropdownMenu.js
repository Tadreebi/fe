import { CDropdownMenu } from '@coreui/react';

const DropdownMenu = ({ children, ...rest }) => {
  return (
    <CDropdownMenu {...rest} >
      {children}
    </CDropdownMenu>
  )
};

export default DropdownMenu;
