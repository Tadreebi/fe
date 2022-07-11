import { faClockRotateLeft, faEdit, faList, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CollapseCard from '../CollapseCard';
import { Button, ButtonGroup } from '../Root/Buttons';
import Form from '../Root/Form';
import { Col, Row } from '../Root/Grid';
import Icon from '../Root/Icon';
import InputsPicker from './InputsPicker';

const PageForm = ({ title = "Form", inputs, SubmitText, onSubmit, onReset, currentAction, loading }) => {

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
