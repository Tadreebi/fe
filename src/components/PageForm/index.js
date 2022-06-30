import CollapseCard from '../CollapseCard';
import Button from '../Root/Buttons';
import ButtonGroup from '../Root/Buttons/Group';
import Form from '../Root/Form';
import Col from '../Root/Grid/Col';
import Row from '../Root/Grid/Row';
import Boolean from '../Root/InputFields/Boolean';
import CheckList from '../Root/InputFields/CheckList';
import Input from '../Root/InputFields/Input';
import { Option, Select } from '../Root/InputFields/Select';
import Textarea from '../Root/InputFields/Textarea';
import Label from '../Root/Label';

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

const PageForm = ({ title = "Form", inputs = inputsDemo, SubmitText, onSubmit, onReset, currentAction }) => {

  const submitTextDecider = () => {
    switch (currentAction) {
      case "create": return "Create";
      case "update": return "Update";
      case "delete": return "Delete";
      default: return "Submit";
    }
  };

  return (
    <CollapseCard title={title}>
      <Form onSubmit={onSubmit}>
        <Row>
          {inputs?.map((input, i) => (
            <Col md={input.fullwidth ? 12 : input.double ? 8 : length(inputs.length)} className="py-3" key={i}>
              <Label>
                {input.title || "Title"} {input.required ? <span className='text-danger'>*</span> : ""}
              </Label>

              {input.type === "select" ? (
                <Select
                  name={input.name}
                  size={input.size || "md"}
                  required={input.required}
                  value={input.value}
                  onChange={input.onChange}
                  disabled={input.disabled || currentAction === "view"}
                  multiple={input.multiple}
                >
                  <Option>Please Select...</Option>

                  {input.options?.map((option, i) => (
                    <Option value={option.value} key={i}>{option.title}</Option>
                  ))}
                </Select>
              ) : input.type === "textarea" ? (
                <Textarea
                  name={input.name}
                  placeholder={input.placeholder || input.title}
                  required={input.required}
                  value={input.value}
                  onChange={input.onChange}
                  disabled={input.disabled || currentAction === "view"}
                  readOnly={input.readOnly}
                  multiple={input.multiple}
                />
              ) : (input.type === "checkbox" || input.type === "radio") ? (
                <>
                  <Row>
                    {input.options?.map((option, i) => (
                      <Col md={length(input.options.length)} className="py-3" key={i}>
                        <CheckList
                          name={input.name}
                          multiple={input.type === "checkbox"}
                          value={option.value}
                          label={option.title}
                          required={input.required}
                          onChange={input.onChange}
                          disabled={input.disabled || currentAction === "view"}
                        />
                      </Col>
                    ))}
                  </Row>
                </>
              ) : input.type === "switch" ? (
                <Boolean
                  label={input.title}
                  name={input.name}
                  size={input.size || "lg"}
                  checked={input.value}
                  onChange={input.onChange}
                  disabled={input.disabled || currentAction === "view"}
                />
              ) : (
                <Input
                  name={input.name}
                  size={input.size}
                  type={input.type}
                  placeholder={input.placeholder || input.title}
                  required={input.required}
                  value={input.value}
                  onChange={input.onChange}
                  disabled={input.disabled || currentAction === "view"}
                  readOnly={input.readOnly}
                  multiple={input.multiple}
                />
              )}
            </Col>
          ))}
          <Col xs={12} >
            <ButtonGroup role="group" style={{ float: 'right' }}>
              {onReset && (
                <Button onClick={onReset} color='warning' className='text-white'>
                  Reset
                </Button>
              )}
              {currentAction !== "view" && (
                <Button type="submit" color='success' className='text-white'>
                  {SubmitText || submitTextDecider()}
                </Button>
              )}
            </ButtonGroup>
          </Col>
        </Row>
      </Form>
    </CollapseCard>
  )
}

export default PageForm
