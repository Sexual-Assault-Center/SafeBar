/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';
import { removeFavorite } from '../utils/api';

const FavCard = ({
  id,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  getFavs,
}) => {
  const removeFav = () => {
    removeFavorite(id).then(getFavs);
  };

  return (
    <Card style={{ width: '18rem', backgroundColor: '#001022', color: 'white' }}>
      <Card.Body>
        <Card.Title>
          {is_safebar ? <BsShieldFillCheck className="shieldIcon" size={25} /> : ''}{' '}
          {name}
        </Card.Title>
        <Card.Text>
          {street_address}, {city} {zip}
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
        </Card.Text>
        <Button onClick={removeFav}>Remove</Button>
      </Card.Body>
    </Card>
  );
};

export default FavCard;

FavCard.propTypes = {
  is_safebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string,
  id: PropTypes.string.isRequired,
  getFavs: PropTypes.func.isRequired,
  phone: PropTypes.string,
};

FavCard.defaultProps = {
  is_safebar: false,
  street_address: '',
  zip: '',
  phone: '',
};
