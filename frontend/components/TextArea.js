import { FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TextArea = ({
  label, placeholder, value, onChange, name,
}) => (
  <>
    <FloatingLabel controlId="floatingTextarea" label={label} className="checkText mb-3">
      <Form.Control
        as="textarea"
        name={name}
        placeholder={placeholder}
        style={{ height: '100px' }}
        value={value}
        onChange={onChange}
        maxLength="500"
      />
    </FloatingLabel>
  </>
);

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  onChange: () => {},
};
