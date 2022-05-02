/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiDrink } from 'react-icons/bi';
import { useRouter } from 'next/router';
import ButtonComp from './Button';
import { useAuth } from '../utils/context/authContext';
import { addFav } from '../utils/api';
import { signInUser } from '../utils/auth';

const BarCard = ({
  uuid,
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

  const handleFav = () => {
    if (!Object.keys(user).length) {
      return signInUser();
    }
    addFav(user.uid, uuid).then(() => router.push('/lists'));
  };

  return (
    <Card className="card-style" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="d-flex flex-row no-wrap align-items-center">
          {is_safebar ? (
            <BsShieldFillCheck className="shieldIcon me-2" size={25} />
          ) : (
            ''
          )}{' '}
          {name}
        </Card.Title>
        <Card.Text>
          {street_address}, {city} {zip}
          <br />
          <a href={`tel:${phone}`}>{phone}</a>
        </Card.Text>
        <div>{bar_report_count} Reports</div>
        <div className="d-flex flex-row no-wrap align-items-center mt-2">
          <ButtonComp
            className="me-2"
            buttonText="report"
            type="button"
            outline
            onClick={() => handleClick(uuid)}
          />
          <Button className="me-2 outline-style" onClick={handleFav}>
            <BiDrink className="me-2" /> SAVE
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BarCard;

BarCard.propTypes = {
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
  is_safebar: false,
  street_address: '',
  zip: '',
  phone: '',
  bar_report_count: 0,
};
