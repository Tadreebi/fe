import { Boolean, CheckList, DynamicList, Input, Option, Select, StarRating, Textarea } from '.';
import { Col, Row } from '../../Root/Grid';


const length = count => {
  switch (count) {
    case 1: return 12;
    case 2: return 6;
    default: return 4;
  }
};

const ListInputPicker = ({ fullwidth, title, required, type, name, size, value, onChange, disabled, options, placeholder, ...rest }) => {
  return (
    <>
      {type === "select" ? (
        <Select
          name={name}
          size={size || "md"}
          required={required}
          value={value}
          onChange={onChange}
          disabled={disabled}
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
          disabled={disabled}
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
            disabled={disabled}
            {...rest}
          />
        </>
      ) : type === "list" ? (
        <>
          <br />
          <DynamicList
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
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
                  disabled={disabled}
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
          disabled={disabled}
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
          disabled={disabled}
          {...rest}
        />
      )}
    </>
  )
}

export default ListInputPicker
