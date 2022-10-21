import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Contact({ contact }) {
  return (
    <Card className="my-2 card-style">
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
          Contact Name: {contact.contact_name}
          <br />
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <br />
          Phone:{' '}
          <a href={`tel:${contact.phone_number}`}>
            {contact.phone_number
              .toString()
              .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
          </a>
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
    phone_number: PropTypes.number,
    contact_name: PropTypes.string,
  }),
};

export default Contact;
