import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ButtonComp from './Button';

function ResourcesCard({ title, description, url }) {
  return (
    <Card className="my-2 card-style">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <ButtonComp variant="primary" onClick={(e) => { e.PreventDefault(); window.open(url, '_blank'); }} buttonText="Learn More" />
      </Card.Body>
    </Card>
  );
}

ResourcesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ResourcesCard;
