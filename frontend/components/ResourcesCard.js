import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ResourcesCard({ title, description, url }) {
  return (
    <Card className="my-2">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href={url}>Learn More</Button>
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
