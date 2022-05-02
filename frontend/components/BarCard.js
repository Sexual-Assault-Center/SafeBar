/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';
import {
  FaThumbsDown,
  // FaThumbsUp,
} from 'react-icons/fa';
import {
  AiOutlineWarning,
  // AiOutlineCheckCircle,
} from 'react-icons/ai';
import { BiDrink } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { addFav } from '../utils/api';
import { signInUser } from '../utils/auth';

const BarCard = ({
  uuid,
  saved_by_user,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  bar_report_count,
}) => {
  const router = useRouter();
  const { user } = useAuth();

  const handleClick = (id) => {
    router.push(`/report/${id}`);
  };

  // TODO: This is the start for the images in the bg on stretch
  // const imageUrl = 'https://assets3.thrillist.com/v1/image/3059875/1584x1056/flatten;crop;webp=auto;jpeg_quality=50.jpg';

  const handleFav = () => {
    if (!Object.keys(user).length) {
      return signInUser();
    }
    addFav(user.uid, uuid).then(() => router.push('/lists'));
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
          <div className="d-flex">
            {/* TODO: Add back once positive endpoint is set up  */}
            {/* <div className="pos-report">
              <AiOutlineCheckCircle size={16} /> {bar_report_count}
            </div> */}
            <div className="neg-report">
              <AiOutlineWarning size={16} /> {bar_report_count}
            </div>
          </div>
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
          <div className="d-flex flex-row no-wrap align-items-center mt-2 justify-content-between">
            <div>
              {/* TODO: Add back once positive endpoint is set up  */}
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
            {
              !saved_by_user && (
                <Button className="me-2 outline-style" onClick={handleFav}>
                  <BiDrink className="me-2" /> SAVE
                </Button>
              )
            }
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarCard;

BarCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  is_safebar: PropTypes.bool,
  saved_by_user: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string,
  phone: PropTypes.string,
  bar_report_count: PropTypes.number,
};

BarCard.defaultProps = {
  is_safebar: false,
  saved_by_user: false,
  street_address: '',
  zip: '',
  phone: '',
  bar_report_count: 0,
};
