import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const IconButton = ({ children, onClick, text }) => {
  const hasText = Boolean(text);
  return (
    <Button variant="link" type="button" onClick={onClick}>
      {children}
      {hasText ? <p>{text}</p> : null}
    </Button>
  );
};

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: () => {},
  text: '',
};
