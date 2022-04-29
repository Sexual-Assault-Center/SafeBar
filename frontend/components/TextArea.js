import { FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TextArea = ({
  label, placeholder, value, onChange,
}) => (
  <>
    <FloatingLabel controlId="floatingTextarea" label={label} className="mb-3">
      <Form.Control
        as="textarea"
        placeholder={placeholder}
        style={{ height: '100px' }}
        value={value}
        onChange={onChange}
      />
    </FloatingLabel>
  </>
);

export default TextArea;

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  onChange: () => {},
};
