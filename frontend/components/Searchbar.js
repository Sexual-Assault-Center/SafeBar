/* eslint-disable object-curly-newline */
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function Searchbar({ value, placeholder, onChange, clear }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="searchContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="searchForm mb-3" controlId="search">
          <div>
            <i className="fa fa-search icon" />
          </div>
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
    </div>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  clear: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
  value: '',
  placeholder: '',
  onChange: () => {},
};
