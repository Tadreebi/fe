import { CFormSwitch } from '@coreui/react';

const Boolean = ({ name, title, size, value, onChange, disabled, children, trueText, falseText, ...rest }) => {
  return (
    <CFormSwitch
      name={name}
      label={title}
      size={size || "lg"}
      checked={value || false}
      onChange={onChange}
      disabled={disabled}
      {...rest}
    // label={value ? (trueText || "Yes") : (falseText || "No")}
    >
      {children}
    </CFormSwitch>
  )
};

export default Boolean;

