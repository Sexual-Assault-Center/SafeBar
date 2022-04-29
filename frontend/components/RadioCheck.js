import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const RadioCheck = ({
  label, id, checked, onChange,
}) => (
  <Form className="m-2 radio-form">
    <Form.Check
      value={checked}
      onChange={() => onChange(!checked)}
      type="radio"
      label={label}
      id={id}
    />
  </Form>
);

export default RadioCheck;

RadioCheck.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

RadioCheck.defaultProps = {
  label: '',
  id: '',
  checked: false,
  onChange: () => {},
};
