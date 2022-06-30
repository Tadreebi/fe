import { CFormSelect } from '@coreui/react';

const Select = ({ name, size, required, value, onChange, disabled, multiple, children, ...rest }) => {
  return (
    <CFormSelect
      name={name}
      size={size || "md"}
      required={required}
      value={value}
      onChange={onChange}
      disabled={disabled}
      multiple={multiple}
      {...rest}
    >
      {children}
    </CFormSelect>
  )
};

const Option = ({ value, children, ...rest }) => {
  return (
    <option value={value} {...rest}>
      {children}
    </option>
  )
};

export { Select, Option };

