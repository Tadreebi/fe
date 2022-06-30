import {
  CCol, CFormCheck, CFormInput, CFormSelect, CFormSwitch, CFormTextarea, CRow
} from '@coreui/react';

const length = count => {
  switch (count) {
    case 1: return 12;
    case 2: return 6;
    default: return 4;
  }
};

const InputField = ({ field, currentAction }) => {
  return (
    <>
      {field.type === "select" ? (
        <CFormSelect
          name={field.name}
          size={field.size || "md"}
          required={field.required}
          value={field.value}
          onChange={field.onChange}
          disabled={field.disabled || currentAction === "view"}
          multiple={field.multiple}
        >
          <option>Please Select...</option>

          {field.options?.map((option, i) => (
            <option value={option.value} key={i}>{option.title}</option>
          ))}
        </CFormSelect>
      ) : field.type === "textarea" ? (
        <CFormTextarea
          name={field.name}
          placeholder={field.placeholder || field.title}
          required={field.required}
          value={field.value}
          onChange={field.onChange}
          disabled={field.disabled || currentAction === "view"}
          readOnly={field.readOnly}
          multiple={field.multiple}
        />
      ) : (field.type === "checkbox" || field.type === "radio") ? (
        <>
          <CRow>
            {field.options?.map((option, i) => (
              <CCol md={length(field.options.length)} className="py-3" key={i}>
                <CFormCheck
                  name={field.name}
                  type={field.type}
                  value={option.value}
                  label={option.title}
                  required={field.required}
                  onChange={field.onChange}
                  disabled={field.disabled || currentAction === "view"}
                />
              </CCol>
            ))}
          </CRow>
        </>
      ) : field.type === "switch" ? (
        <CFormSwitch
          label={field.title}
          name={field.name}
          size={field.size || "lg"}
          checked={field.value}
          onChange={field.onChange}
          disabled={field.disabled || currentAction === "view"}
        />
      ) : (
        <CFormInput
          name={field.name}
          size={field.size}
          type={field.type}
          placeholder={field.placeholder || field.title}
          required={field.required}
          value={field.value}
          onChange={field.onChange}
          disabled={field.disabled || currentAction === "view"}
          readOnly={field.readOnly}
          multiple={field.multiple}
        />
      )}
    </>
  )
}

export default InputField
