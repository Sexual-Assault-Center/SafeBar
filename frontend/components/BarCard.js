/* eslint-disable camelcase */
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { addFav } from '../utils/api';

const BarCard = ({
  // img,
  uuid,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  bar_report_count,
}) => {
  const [favClick, setFavClick] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleFav = () => {
    const favObj = {
      uid: user.uid,
      bar: uuid,
    };
    addFav(favObj).then(() => setFavClick((prevState) => !prevState));
  };

  const handleClick = (id) => {
    router.push(`/report/${id}`);
  };

  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={img} /> */}
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
        <div>{bar_report_count} Reports</div>
        <ButtonGroup aria-label="Basic example">
          {/* <Button variant="secondary" onClick={func}>LIKE</Button>
        <Button variant="secondary" onClick={func}>DISLIKE</Button> */}
          <Button variant="secondary" onClick={() => handleClick(uuid)}>REPORT</Button>
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

export default BarCard;

BarCard.propTypes = {
  // img: PropTypes.string,
  uuid: PropTypes.string.isRequired,
  is_safebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string,
  phone: PropTypes.string,
  bar_report_count: PropTypes.number,
};

BarCard.defaultProps = {
  // img: '/sac-logo.png',
  is_safebar: false,
  street_address: '',
  zip: '',
  phone: '',
  bar_report_count: 0,
};
