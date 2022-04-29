import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';
import { useAuth } from '../utils/context/authContext';
import { addFav } from '../utils/api';

const BarCard = ({
  // img,
  id,
  safebar,
  street,
  name,
  city,
  zip,
  phone,
}) => {
  const { user } = useAuth();

  const [favClick, setFavClick] = useState(false);

  const handleFav = () => {
    const favObj = {
      uid: user.id,
      barId: safebar.id,
    };
    addFav(favObj).then(() => setFavClick(!favClick));
  };

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={img} /> */}
      <Card.Body>
        <Card.Title>
          {safebar ? <BsShieldFillCheck color="yellow" size={25} /> : ''}{' '}
          {name}
        </Card.Title>
        <Card.Text>
          {street}, {city} {zip}
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
        </Card.Text>
        <div># of Reports</div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" href={`/report/${id}`}>REPORT</Button>
          {!favClick
            ? (
              <Button
                variant="secondary"
                onClick={handleFav}
              >FAVORITE
              </Button>
            )
            : console.warn('fav')}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

BarCard.propTypes = {
  // img: PropTypes.string,
  id: PropTypes.string.isRequired,
  safebar: PropTypes.bool,
  street: PropTypes.string,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

BarCard.defaultProps = {
  // img: '/sac-logo.png',
  safebar: false,
};

export default BarCard;
