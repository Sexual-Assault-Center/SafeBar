import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function BarDetails({ bar }) {
  return (
    <Card className="my-2 card-style">
      <Card.Body>
        <Card.Title>
          <h1>{bar.name}</h1>
        </Card.Title>
        <dl className="row">
          <dt className="col-sm-3">Street Address:</dt>
          <dd className="col-sm-9">{bar.street_address}</dd>

          <dt className="col-sm-3">City:</dt>
          <dd className="col-sm-9">{bar.city}</dd>

          {bar.description ? (
            <>
              <dt className="col-sm-3">Description:</dt>
              <dd className="col-sm-9">{bar.description}</dd>
            </>
          ) : (
            ''
          )}

          {bar.website ? (
            <>
              <dt className="col-sm-3">Website:</dt>
              <dd className="col-sm-9">
                <a href={bar.website} className="nonstyled-link">
                  {bar.website}
                </a>
              </dd>
            </>
          ) : (
            ''
          )}

          {bar.phone_number ? (
            <>
              <dt className="col-sm-3">Phone #:</dt>
              <dd className="col-sm-9">{bar.phone_number}</dd>
            </>
          ) : (
            ''
          )}
        </dl>
      </Card.Body>
    </Card>
  );
}
BarDetails.defaultProps = {
  bar: {},
};
BarDetails.propTypes = {
  bar: PropTypes.shape({
    name: PropTypes.string,
    street_address: PropTypes.string,
    phone_number: PropTypes.number,
    city: PropTypes.string,
    website: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default BarDetails;
