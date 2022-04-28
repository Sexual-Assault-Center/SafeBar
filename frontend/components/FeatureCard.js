import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import '../styles/FeatureCard.css';
import ButtonComp from './Button';

const FeatureCard = ({
  img, text, onClick, buttonText,
}) => (
  <>
    <Card className="d-flex flex-row card-width card-border-radius text-white m-3 card-background">
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <ButtonComp buttonText={buttonText} onClick={onClick} outline />
      </Card.Body>
      <img src={img} alt={text} className="img-fit w-50 card-border-radius gradient-bg" />
    </Card>
  </>
);

export default FeatureCard;

FeatureCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
};

FeatureCard.defaultProps = {
  img: '',
  text: undefined,
  onClick: () => {},
  buttonText: '',
};
