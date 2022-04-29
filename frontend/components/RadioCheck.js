import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const RadioCheck = ({
  label, id, checked, onClick
}) => (
  <>
    <div className="m-2 radio-form">
      <Form.Check
        name='report-check'
        checked={checked}
        onClick={onClick}
        type="radio"
        label={label}
        id={id}
      />
    </div>
  </>

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
  onChange: () => { },
};
