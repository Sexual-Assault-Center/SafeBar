import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import ButtonComp from './Button';

const FeatureCard = ({
  img, text, href, onClick, buttonText, title,
}) => (
  <>
    <Card className="d-flex flex-row card-width card-border-radius card-style text-white m-3 card-background">
      <Card.Body className="align-self-center ms-2">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <ButtonComp buttonText={buttonText} onClick={onClick} href={href} outline />
      </Card.Body>
      <Card.Img src={img} alt={text} className="img-fit w-50 card-border-radius gradient-bg" />
    </Card>
  </>
);

export default FeatureCard;

FeatureCard.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
  title: PropTypes.string,
};

FeatureCard.defaultProps = {
  img: '',
  text: undefined,
  buttonText: '',
  title: '',
  href: '',
  onClick: () => {},
};
