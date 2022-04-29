import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';

const BarCard = ({
  // img,
  id,
  safebar,
  name,
  street,
  city,
  zip,
  phone,
}) => {
  const stopLinter = () => {
    console.warn('linterssuck');
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
          <p># of Reports</p>
        </Card.Text>
        <ButtonGroup aria-label="Basic example">
          {/* <Button variant="secondary" onClick={func}>LIKE</Button>
        <Button variant="secondary" onClick={func}>DISLIKE</Button> */}
          <Button variant="secondary" href={`/report/${id}`}>REPORT</Button>
          <Button variant="secondary" onClick={stopLinter}>FAVORITE</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default BarCard;

BarCard.propTypes = {
  // img: PropTypes.string,
  id: PropTypes.string.isRequired,
  safebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

BarCard.defaultProps = {
  // img: '/sac-logo.png',
  safebar: false,
};
