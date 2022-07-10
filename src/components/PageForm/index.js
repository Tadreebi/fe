import { faClockRotateLeft, faEdit, faList, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CollapseCard from '../CollapseCard';
import { Button, ButtonGroup } from '../Root/Buttons';
import Form from '../Root/Form';
import { Col, Row } from '../Root/Grid';
import Icon from '../Root/Icon';
import { Boolean, CheckList, Input, Option, Select, StarRating, Textarea } from '../Root/InputFields';
import Label from '../Root/Label';
import InputsPicker from './InputsPicker';

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

const PageForm = ({ title = "Form", inputs = inputsDemo, SubmitText, onSubmit, onReset, currentAction, loading }) => {

  const submitTextDecider = () => {
    switch (currentAction) {
      case "create": return "Create";
      case "update": return "Update";
      case "delete": return "Delete";
      default: return "Submit";
    }
  };

  const submitIconDecider = () => {
    switch (currentAction) {
      case "create": return faPlus;
      case "update": return faEdit;
      case "delete": return faTrash;
      default: return faPlus;
    }
  };

  const submitColorDecider = () => {
    switch (currentAction) {
      case "create": return "success";
      case "update": return "warning";
      case "delete": return "danger";
      default: return "success";
    }
  };

  return (
    <CollapseCard title={title} icon={faList}>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col xs={12} className={`text-${submitColorDecider()} text-center`}>
            <h5><Icon icon={submitIconDecider()} /> {`${submitTextDecider()} Data`}</h5>
          </Col>

          <InputsPicker inputs={inputs} currentAction={currentAction} />

          <Col xs={12} >
            <ButtonGroup role="group" style={{ float: 'right' }}>
              {onReset && (
                <Button onClick={onReset} color='warning' className='text-white' disabled={loading}>
                  <Icon icon={faClockRotateLeft} /> Reset
                </Button>
              )}
              {currentAction !== "view" && (
                <Button type="submit" color='success' className='text-white' disabled={loading}>
                  <Icon icon={submitIconDecider()} /> {SubmitText || submitTextDecider()}
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
