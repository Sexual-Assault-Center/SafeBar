import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const BarCard = ({
  // img,
  name, street, city, zip, phone, user,
}) => (
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={img} /> */}
    <Card.Body>
      <Card.Title>{name}{}</Card.Title>
      <Card.Text>
        {street}, {city} {zip}<br />
        <a href={`tel:${phone}`}>{phone}</a>
      </Card.Text>
      {Object.keys(user).length ? <div>RATINGS HERE</div> : 'No user'}
    </Card.Body>
  </Card>
);

export default BarCard;

BarCard.propTypes = {
  // img: PropTypes.string,
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

BarCard.defaultProps = {
  // img: '/sac-logo.png',
  user: {},
};
