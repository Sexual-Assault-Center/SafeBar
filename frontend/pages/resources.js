import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import HeadDetails from '../components/HeadDetails';
import resourcesData from '../resourcesData.json';

const ResourceComponent = ({ ...props }) => (
    <>
      <h2>{props.title}</h2>
      <br />
      <p>{props.description}</p>
      <Button variant="primary" href={props.url} value="Link">Link</Button>
      <hr />
    </>
);

export default function Resources() {
  return (
    <>
      <HeadDetails title="Resources" description="Making Nightlife Safer for Everyone" />
      <h1>Resources Page</h1>
      <div>
        {
          resourcesData.resources.map((resource) => <ResourceComponent {...resource} />)
        }
      </div>

    </>
  );
}

ResourceComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
