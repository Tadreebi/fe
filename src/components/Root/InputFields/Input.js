import { CFormInput } from '@coreui/react';

const Input = ({ name, type, placeholder, title, required, value, onChange, disabled, children, ...rest }) => {
  return (
    <CFormInput
      name={name}
      type={type}
      placeholder={placeholder || title}
      required={required}
      value={value || ""}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    >
      {children}
    </CFormInput>
  )
};

export default Input;

