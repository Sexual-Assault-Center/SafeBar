/* eslint-disable camelcase */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { BsShieldFillCheck } from 'react-icons/bs';
import ButtonComp from './Button';

const BarCard = ({
  uuid,
  is_safebar,
  name,
  street_address,
  city,
  zip,
  phone,
  func,
  bar_report_count,
}) => (
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
          href={`/report/${uuid}`}
        />
        <ButtonComp buttonText="favorite" type="button" outline onClick={func} />
      </div>
    </Card.Body>
  </Card>
);

export default BarCard;

BarCard.propTypes = {
  uuid: PropTypes.string.isRequired,
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
  is_safebar: false,
  street_address: '',
  zip: '',
  phone: '',
  bar_report_count: 0,
};
