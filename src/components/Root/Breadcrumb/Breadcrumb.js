import { CBreadcrumb } from '@coreui/react';

const Breadcrumb = ({ children, ...rest }) => {
  return (
    <CBreadcrumb {...rest} >
      {children}
    </CBreadcrumb>
  )
};

export default Breadcrumb;
