/* eslint-disable object-curly-newline */
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

function ButtonComp({ buttonText, outline, type, onClick, className }) {
  const isOutline = Boolean(outline);
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`${isOutline ? 'outline-style' : 'reg-button-style'} ${
        className || null
      }`}
    >
      {buttonText.toUpperCase()}{' '}
    </Button>
  );
}

export default ButtonComp;

ButtonComp.propTypes = {
  buttonText: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonComp.defaultProps = {
  buttonText: '',
  outline: false,
  type: 'button',
  onClick: () => {},
  className: null,
};
