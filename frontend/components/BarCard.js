/* eslint-disable consistent-return, camelcase */
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';
import {
  FaThumbsDown,
  // FaThumbsUp
} from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { addFav, removeFavorite } from '../utils/api';
import { signInUser } from '../utils/auth';

function BarCard({
  uuid,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  favoriteId,
}) {
  const router = useRouter();
  const { user } = useAuth();
  const [favId, setFavId] = useState(favoriteId);

  const handleFav = () => {
    if (!Object.keys(user).length) {
      return signInUser();
    }
    if (favId === '') {
      addFav(user.uid, uuid)
        .then((response) => response.json())
        .then((data) => {
          setFavId(data.uuid);
        });
    } else {
      removeFavorite(favId);
      setFavId('');
    }
  };

  return (
    <Card
      className="card-style"
      style={{
        width: '18rem',
      }}
    >
      <Card.Body>
        <div>
          <Card.Title className="d-flex flex-row no-wrap align-items-center justify-content-between">
            <div>{name}</div>
            <div>
              {is_safebar ? (
                <BsShieldFillCheck className="shieldIcon me-2" size={25} />
              ) : (
                ''
              )}
            </div>
          </Card.Title>
        </div>
        <div>
          {street_address}, {city} {zip}
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
          <div className="d-flex flex-row no-wrap align-items-center mt-2 justify-content-between">
            <div>
              {/* <Button
                className="me-2 outline-style"
                onClick={() => {
                  router.push(`/commend/${uuid}`);
                }}
              >
                <FaThumbsUp className="mx-1" />
              </Button> */}
              <Button
                className="me-2 outline-style"
                onClick={() => {
                  router.push(`/report/${uuid}`);
                }}
              >
                <FaThumbsDown className="mx-1" />
              </Button>
            </div>
            <Button className="me-2 outline-style" onClick={handleFav}>
              <BiDrink
                className={`mb-1 ${favId !== '' ? 'text-warning' : ''}`}
              />{' '}
              {favId !== '' ? 'REMOVE' : 'SAVE'}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BarCard;

BarCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  is_safebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string,
  phone: PropTypes.string,
  favoriteId: PropTypes.string.isRequired,
};

BarCard.defaultProps = {
  is_safebar: false,
  street_address: '',
  zip: '',
  phone: '',
};
