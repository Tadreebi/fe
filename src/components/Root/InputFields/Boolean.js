import { CFormSwitch } from '@coreui/react';

const Boolean = ({ name, title, size, value, onChange, disabled, children, ...rest }) => {
  return (
    <CFormSwitch
      name={name}
      label={title}
      size={size || "lg"}
      checked={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
      {children}
    </CFormSwitch>
  )
};

export default Boolean;

