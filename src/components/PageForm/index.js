import {
  CButton, CButtonGroup, CCard,
  CCardBody,
  CCardHeader,
  CCol, CForm, CFormLabel, CRow
} from '@coreui/react';
import InputField from '../InputField';

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

const PageForm = ({ title, inputs = inputsDemo, SubmitText, onSubmit, onReset, currentAction }) => {

  const submitTextDecider = () => {
    switch (currentAction) {
      case "create": return "Create";
      case "update": return "Update";
      case "delete": return "Delete";
      default: return "Submit";
    }
  };

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
            {inputs?.map((input, i) => (
              <CCol md={input.fullwidth ? 12 : input.double ? 8 : length(inputs.length)} className="py-3" key={i}>
                <CFormLabel>
                  {input.title || "Title"} {input.required ? <span className='text-danger'>*</span> : ""}
                </CFormLabel>

                <InputField field={input} currentAction={currentAction} />
              </CCol>
            ))}
            <CCol xs={12} >
              <CButtonGroup role="group">
                {onReset && (
                  <CButton onClick={onReset} color='warning' className='text-white'>
                    Reset
                  </CButton>
                )}
                {currentAction !== "view" && (<CButton type="submit" color='success' className='text-white'>
                  {SubmitText || submitTextDecider()}
                </CButton>)}
              </CButtonGroup>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  )
}

export default PageForm
