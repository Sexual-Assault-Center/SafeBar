import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const Searchbar = ({
  value, placeholder, onChange, label,
}) => (
  <Form>
    <Form.Group className="mb-3" controlId="search">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  </Form>
);

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

Searchbar.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  label: '',
};
