import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonComp = ({
  buttonText, outline, type, onClick,
}) => {
  const isOutline = Boolean(outline);
  return (
    <Button onClick={onClick} type={type} variant={`${isOutline ? 'outline-dark' : 'dark'}`}>
      {buttonText}{' '}
    </Button>
  );
};

export default ButtonComp;

ButtonComp.propTypes = {
  buttonText: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

ButtonComp.defaultProps = {
  buttonText: '',
  outline: false,
  type: 'button',
  onClick: () => {},
};
