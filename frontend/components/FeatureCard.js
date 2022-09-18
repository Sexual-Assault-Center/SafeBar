/* eslint-disable object-curly-newline */
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import ButtonComp from './Button';

function FeatureCard({ img, text, onClick, buttonText, title }) {
  return (
    <Card className="d-flex flex-row card-width card-border-radius card-style text-white m-3 card-background">
      <Card.Body className="align-self-center ms-2">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <ButtonComp buttonText={buttonText} onClick={onClick} outline />
      </Card.Body>
      <Card.Img
        src={img}
        alt={text}
        className="img-fit w-50 card-border-radius gradient-bg"
      />
    </Card>
  );
}

export default FeatureCard;

FeatureCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  title: PropTypes.string,
};

FeatureCard.defaultProps = {
  img: '',
  text: undefined,
  buttonText: '',
  title: '',
  onClick: () => {},
};
