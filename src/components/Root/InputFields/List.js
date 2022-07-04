import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Boolean, CheckList, Input, Option, Select, StarRating, Textarea } from '.';
import { Button } from '../Buttons';
import { Col, Row } from '../Grid';
import Label from '../Label';

const List = ({ fields, currentAction }) => {
  return (
    <>
      <Row>
        {fields?.map(field => field.title).map((key, i) => (
          <Col key={i}>
            <Label>
              {key}
              {" "}
              {fields[i]?.required ? <span className='text-danger'>*</span> : ""}
            </Label>
          </Col>
        ))}

        <Col>
          <Button color="success" className='text-white' size="sm">
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Col>
      </Row>

      <Row>
        {fields?.map(({ title, required, type, name, size, value, onChange, disabled, options, placeholder, ...rest }, i) => (
          <Col key={i}>
            {type === "select" ? (
              <Select
                name={name}
                size={size || "md"}
                required={required}
                value={value}
                onChange={onChange}
                disabled={disabled || currentAction === "view" || currentAction === "delete"}
                {...rest}
              >
                <Option>Please Select...</Option>

                {options?.map((option, i) => (
                  <Option value={option.value} key={i}>{option.title}</Option>
                ))}
              </Select>
            ) : type === "textarea" ? (
              <Textarea
                name={name}
                required={required}
                placeholder={placeholder || title}
                value={value}
                onChange={onChange}
                disabled={disabled || currentAction === "view" || currentAction === "delete"}
                {...rest}
              />
            ) : type === "rating" ? (
              <>
                <br />
                <StarRating
                  name={name}
                  required={required}
                  value={value}
                  onChange={onChange}
                  disabled={disabled || currentAction === "view" || currentAction === "delete"}
                  {...rest}
                />
              </>
            ) : (type === "checkbox" || type === "radio") ? (
              <>
                <Row>
                  {options?.map((option, i) => (
                    <Col md={length(options.length)} className="py-3" key={i}>
                      <CheckList
                        name={name}
                        required={required}
                        multiple={type === "checkbox"}
                        value={option.value}
                        label={option.title}
                        onChange={onChange}
                        disabled={disabled || currentAction === "view" || currentAction === "delete"}
                        {...rest}
                      />
                    </Col>
                  ))}
                </Row>
              </>
            ) : type === "switch" ? (
              <Boolean
                label={title}
                name={name}
                required={required}
                size={size || "lg"}
                checked={value}
                onChange={onChange}
                disabled={disabled || currentAction === "view" || currentAction === "delete"}
                {...rest}
              />
            ) : (
              <Input
                name={name}
                required={required}
                type={type}
                size={size}
                placeholder={placeholder || title}
                value={value}
                onChange={onChange}
                disabled={disabled || currentAction === "view" || currentAction === "delete"}
                {...rest}
              />
            )}
          </Col>
        ))}

        <Col>
          <Label>
            <Button color="danger" className='text-white' size="sm">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Label>
        </Col>
      </Row>
    </>
  )
};

export default List;

