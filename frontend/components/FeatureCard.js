import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import '../styles/FeatureCard.css';

const FeatureCard = ({ img, text }) => (
  <>
    <Card className="cardWidth">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default FeatureCard;

FeatureCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
};

FeatureCard.defaultProps = {
  img: '',
  text: undefined,
};
