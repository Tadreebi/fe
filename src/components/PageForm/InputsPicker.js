import { Col, Row } from '../Root/Grid';
import { Boolean, CheckList, Input, Option, Select, StarRating, Textarea, DynamicList } from '../Root/InputFields';
import Label from '../Root/Label';


const length = count => {
  switch (count) {
    case 1: return 12;
    case 2: return 6;
    default: return 4;
  }
};

const InputsPicker = ({ inputs = inputsDemo, currentAction, list }) => {
  return (
    <>
      {inputs?.map(({ fullwidth, double, title, required, type, name, size, value, onChange, disabled, options, placeholder, ...rest }, i) => (
        <Col md={(fullwidth || type === "list") ? 12 : double ? 8 : length(inputs.length)} className="py-3" key={i}>
          {!list && (
            <Label>
              {title || "Title"} {required ? <span className='text-danger'>*</span> : ""}
            </Label>
          )}

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
          ) : type === "list" ? (
            <>
              <br />
              <DynamicList
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
    </>
  )
}

export default InputsPicker
