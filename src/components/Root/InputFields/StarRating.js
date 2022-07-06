import Rating from 'react-rating';

const StarRating = ({ name, value, onChange, disabled, children, ...rest }) => {
  return (
    <Rating
      // emptySymbol={<FontAwesomeIcon icon={faStar} />}
      // fullSymbol={<FontAwesomeIcon icon={faStar} />}
      name={name}
      fractions={2}
      initialRating={value || 0}
      onChange={onChange}
      readonly={disabled}
      {...rest}
    >
      {children}
    </Rating>
  )
};

export default StarRating;

