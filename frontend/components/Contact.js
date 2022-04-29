import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Contact({ contact }) {
  return (
    <Card className="my-2">
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          Email: {contact.email}
        </Card.Text>
        <Card.Text>
          Phone: {contact.phone}
        </Card.Text>
        <Card.Text>
          Contact Name: {contact.contact_name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
Contact.defaultProps = {
  contact: {},
};
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number,
    contact_name: PropTypes.string,
  }),
};

export default Contact;
