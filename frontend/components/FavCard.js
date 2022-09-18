/* eslint-disable consistent-return */
/* eslint-disable camelcase */
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
import { removeFavorite } from '../utils/api';

function FavCard({
  id,
  uuid,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  getFavs,
}) {
  const router = useRouter();

  const handleClick = (barId) => {
    router.push(`/report/${barId}`);
  };

  // const imageUrl = 'https://assets3.thrillist.com/v1/image/3059875/1584x1056/flatten;crop;webp=auto;jpeg_quality=50.jpg';

  const removeFav = () => {
    removeFavorite(id).then(getFavs);
  };

  return (
    <Card
      className="card-style"
      style={{
        width: '18rem',
        // backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Card.Body>
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
        <div>
          {street_address}, {city} {zip}
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
          <div className="d-flex flex-row no-wrap align-items-center mt-2 justify-content-between">
            <div>
              {/* <Button
                className="me-2 outline-style"
                onClick={() => handleClick(uuid)}
              >
                <FaThumbsUp className="mx-1" />
              </Button> */}
              <Button
                className="me-2 outline-style"
                onClick={() => handleClick(uuid)}
              >
                <FaThumbsDown className="mx-1" />
              </Button>
            </div>
            <Button className="me-2 outline-style" onClick={removeFav}>
              <BiDrink className="me-2" /> REMOVE
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default FavCard;

FavCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  is_safebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  zip: PropTypes.string,
  phone: PropTypes.string,
  getFavs: PropTypes.func.isRequired,
};

FavCard.defaultProps = {
  is_safebar: false,
  street_address: '',
  zip: '',
  phone: '',
};
