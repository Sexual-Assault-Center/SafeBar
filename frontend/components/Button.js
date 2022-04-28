import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonComp = ({ buttonText, outline, type }) => {
  const isOutline = Boolean(outline);
  return (
    <Button type={type} variant={`${isOutline ? 'outline-dark' : 'dark'}`}>
      {buttonText}{' '}
    </Button>
  );
};

export default ButtonComp;

ButtonComp.propTypes = {
  buttonText: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.string,
};

ButtonComp.defaultProps = {
  buttonText: '',
  outline: false,
  type: 'button',
};
