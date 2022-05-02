import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ButtonComp = ({
  buttonText, outline, type, onClick, href, className,
}) => {
  const hasHref = Boolean(href);
  const isOutline = Boolean(outline);
  return (
    <>
      {hasHref
        ? (
          <Button href={href} onClick={onClick} type={type} className={`${isOutline ? 'outline-style' : 'reg-button-style'} ${className || null}`}>
            {buttonText.toUpperCase()}{' '}
          </Button>
        ) : (
          <Button onClick={onClick} type={type} className={`${isOutline ? 'outline-style' : 'reg-button-style'} ${className || null}`}>
            {buttonText.toUpperCase()}{' '}
          </Button>
        )}
    </>
  );
};

export default ButtonComp;

ButtonComp.propTypes = {
  buttonText: PropTypes.string,
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  className: PropTypes.string,
};

ButtonComp.defaultProps = {
  buttonText: '',
  outline: false,
  type: 'button',
  href: '',
  onClick: () => { },
  className: null,
};
