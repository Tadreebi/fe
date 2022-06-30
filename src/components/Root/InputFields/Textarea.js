import { CFormTextarea } from '@coreui/react';

const Textarea = ({ name, placeholder, required, value, onChange, disabled, readOnly, children, ...rest }) => {
  return (
    <CFormTextarea
      name={name}
      placeholder={placeholder || title}
      required={required}
      value={value}
      onChange={onChange}
      disabled={disabled}
      readOnly={readOnly}
      {...rest}
    >
      {children}
    </CFormTextarea>
  )
};

export default Textarea;

