import { CBreadcrumbItem } from '@coreui/react';

const BreadcrumbItem = ({ children, ...rest }) => {
  return (
    <CBreadcrumbItem {...rest} >
      {children}
    </CBreadcrumbItem>
  )
};

export default BreadcrumbItem;
