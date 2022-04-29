/* eslint-disable camelcase */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import { BsShieldFillCheck } from 'react-icons/bs';

const BarCard = ({
  // img,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  func,
  bar_report_count,
}) => (
  <Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src={img} /> */}
    <Card.Body>
      <Card.Title>
        {is_safebar ? <BsShieldFillCheck color="yellow" size={25} /> : ''}{' '}
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
        <Button variant="secondary">REPORT</Button>
        <Button variant="secondary" onClick={func}>FAVORITE</Button>
      </ButtonGroup>
    </Card.Body>
  </Card>
);

export default BarCard;

BarCard.propTypes = {
  // img: PropTypes.string,
  is_safebar: PropTypes.bool,
  name: PropTypes.string.isRequired,
  street_address: PropTypes.string,
  city: PropTypes.string.isRequired,
  zip: PropTypes.string,
  phone: PropTypes.string,
  func: PropTypes.func.isRequired,
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
