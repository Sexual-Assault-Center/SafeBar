import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ResourcesCard({ ...props }) {
  return (
    <Card key={props.id} className="my-2">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.url}>Learn More</Button>
      </Card.Body>
    </Card>
  )
}

ResourcesCard.propTypes = {
  props: PropTypes.shape({

  })
}
export default ResourcesCard;
