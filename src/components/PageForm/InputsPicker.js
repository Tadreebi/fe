import { faClockRotateLeft, faEdit, faList, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import CollapseCard from '../CollapseCard';
import { Button, ButtonGroup } from '../Root/Buttons';
import Form from '../Root/Form';
import { Col, Row } from '../Root/Grid';
import Icon from '../Root/Icon';
import { Boolean, CheckList, Input, Option, Select, StarRating, Textarea } from '../Root/InputFields';
import Label from '../Root/Label';


const length = count => {
  switch (count) {
    case 1: return 12;
    case 2: return 6;
    default: return 4;
  }
};

const InputsPicker = ({ inputs = inputsDemo, currentAction }) => {
  return (
    <>
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
              disabled={input.disabled || currentAction === "view" || currentAction === "delete"}
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
              disabled={input.disabled || currentAction === "view" || currentAction === "delete"}
              readOnly={input.readOnly}
              multiple={input.multiple}
            />
          ) : input.type === "rating" ? (
            <>
              <br />
              <StarRating
                name={input.name}
                required={input.required}
                value={input.value}
                onChange={input.onChange}
                disabled={input.disabled || currentAction === "view" || currentAction === "delete"}
              />
            </>
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
                      disabled={input.disabled || currentAction === "view" || currentAction === "delete"}
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
              disabled={input.disabled || currentAction === "view" || currentAction === "delete"}
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
              disabled={input.disabled || currentAction === "view" || currentAction === "delete"}
              readOnly={input.readOnly}
              multiple={input.multiple}
            />
          )}
        </Col>
      ))}
    </>
  )
}

export default InputsPicker
