import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

const Searchbar = ({
  value, placeholder, onChange, label, clear,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="searchForm mb-3" controlId="search">
        <Form.Label>{label}</Form.Label>
        <i className="fa fa-search icon" />
        <Form.Control
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button type="button" className="outline-style" onClick={clear}>
          Clear
        </button>
      </Form.Group>
    </Form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  clear: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Searchbar.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
  label: '',
};
