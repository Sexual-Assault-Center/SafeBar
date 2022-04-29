import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonComp = ({
  buttonText, outline, type, onClick, href,
}) => {
  const isOutline = Boolean(outline);
  return (
    <Button
      href={href}
      onClick={onClick}
      type={type}
      className={`${isOutline ? 'outline-button' : 'button-style'}`}
    >
      {buttonText.toUpperCase()}{' '}
    </Button>
  );
};

export default ButtonComp;

ButtonComp.propTypes = {
  buttonText: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  href: PropTypes.string,
};

ButtonComp.defaultProps = {
  buttonText: '',
  outline: false,
  type: 'button',
  href: '',
  onClick: () => {},
};
