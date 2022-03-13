import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const BarCard = ({
  img, name, street, city, zip, phone,
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p>{street}, {city} {zip}</p>
        <p><a href={`tel:${phone}`}>{phone}</a></p>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default BarCard;

BarCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

BarCard.defaultProps = {
  img: '/sac-logo.png',
};
