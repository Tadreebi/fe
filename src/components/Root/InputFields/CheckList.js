import { CFormCheck } from '@coreui/react';

const CheckList = ({ name, multiple, value, title, required, onChange, disabled, children, ...rest }) => {
  return (
    <CFormCheck
      name={name}
      type={multiple ? "checkbox" : "radio"}
      value={value || ""}
      label={title}
      required={required}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
      {children}
    </CFormCheck>
  )
};

export default CheckList;

