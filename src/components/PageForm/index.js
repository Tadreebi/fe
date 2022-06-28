import {
  CButton, CButtonGroup, CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect, CFormSwitch, CFormTextarea, CRow
} from '@coreui/react';

const inputsDemo = [
  {
    title: "Title",
    name: "title",
    type: "text",
    fullwidth: true,
    placeholder: "Title",
    required: true,
    value: "Name",
    disabled: false,
    readOnly: false,
    onChange: e => console.log(`You're changing ${e.target.name}`)
  },
  {
    title: "Title",
    name: "title",
    type: "textarea",
    double: true,
    placeholder: "Title",
    required: true,
    value: "Name",
    disabled: false,
    readOnly: false,
    onChange: e => console.log(`You're changing ${e.target.name}`)
  },
  {
    title: "Title",
    name: "title",
    type: "select",
    size: "md",
    required: true,
    value: "Name",
    disabled: false,
    onChange: e => console.log(`You're changing ${e.target.name}`),
    options: [
      { title: "Option 1", value: "option 1" },
      { title: "Option 2", value: "option 2" }
    ]
  },
  {
    title: "Title",
    name: "title",
    type: "checkbox",
    size: "md",
    required: true,
    value: "Name",
    disabled: false,
    onChange: e => console.log(`You're changing ${e.target.name}`),
    options: [
      { title: "Option 1", value: "option 1" },
      { title: "Option 2", value: "option 2" },
      { title: "Option 3", value: "option 3" }
    ]
  },
  {
    title: "Title",
    name: "title",
    type: "radio",
    size: "md",
    required: true,
    value: "Name",
    disabled: false,
    onChange: e => console.log(`You're changing ${e.target.name}`),
    options: [
      { title: "Option 1", value: "option 1" },
      { title: "Option 2", value: "option 2" },
      { title: "Option 3", value: "option 3" }
    ]
  },
  {
    title: "Title",
    name: "title",
    type: "switch",
    size: "lg",
    required: true,
    value: true,
    disabled: false,
    default: true,
    onChange: e => console.log(`You're changing ${e.target.name}`),
  },
];

const length = count => {
  switch (count) {
    case 1: return 12;
    case 2: return 6;
    default: return 4;
  }
};

const PageForm = ({ title, inputs = inputsDemo, SubmitText = "Submit", onSubmit, onReset }) => {
  return (
    <CCard className="mb-4">
      {title && (
        <CCardHeader>
          {title}
        </CCardHeader>
      )}

      <CCardBody>
        <CForm onSubmit={onSubmit}>
          <CRow>
            {inputs.map((input, i) => (
              <CCol md={input.fullwidth ? 12 : input.double ? 8 : length(inputs.length)} className="py-3" key={i}>
                <CFormLabel>
                  {input.title || "Title"} {input.required ? <span className='text-danger'>*</span> : ""}
                </CFormLabel>

                {input.type === "select" ? (
                  <CFormSelect
                    name={input.name}
                    size={input.size || "md"}
                    required={input.required}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={input.disabled}
                    multiple={input.multiple}
                  >
                    <option>Please Select...</option>

                    {input.options.map((option, i) => (
                      <option value={option.value} key={i}>{option.title}</option>
                    ))}
                  </CFormSelect>
                ) : input.type === "textarea" ? (
                  <CFormTextarea
                    name={input.name}
                    placeholder={input.placeholder || input.title}
                    required={input.required}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={input.disabled}
                    readOnly={input.readOnly}
                    multiple={input.multiple}
                  />
                ) : (input.type === "checkbox" || input.type === "radio") ? (
                  <>
                    <CRow>
                      {input.options.map((option, i) => (
                        <CCol md={length(input.options.length)} className="py-3" key={i}>
                          <CFormCheck
                            name={input.name}
                            type={input.type}
                            value={option.value}
                            label={option.title}
                            required={input.required}
                            onChange={input.onChange}
                            disabled={input.disabled}
                          />
                        </CCol>
                      ))}
                    </CRow>
                  </>
                ) : input.type === "switch" ? (
                  <CFormSwitch
                    label={input.title}
                    name={input.name}
                    size={input.size || "lg"}
                    checked={input.value}
                    onChange={input.onChange}
                    disabled={input.disabled}
                  />
                ) : (
                  <CFormInput
                    name={input.name}
                    size={input.size}
                    type={input.type}
                    placeholder={input.placeholder || input.title}
                    required={input.required}
                    value={input.value}
                    onChange={input.onChange}
                    disabled={input.disabled}
                    readOnly={input.readOnly}
                    multiple={input.multiple}
                  />
                )}
              </CCol>
            ))}
            <CCol xs={12} >
              <CButtonGroup role="group">
                {onReset && (
                  <CButton onClick={onReset} color='warning' className='text-white'>
                    Reset
                  </CButton>
                )}
                <CButton type="submit" color='success' className='text-white'>
                  {SubmitText}
                </CButton>
              </CButtonGroup>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default PageForm
