import React from 'react';
import HeadDetails from '../components/HeadDetails';
import resourcesData from '../resourcesData.json';
import ResourcesCard from '../components/ResourcesCard';

// const ResourceComponent = ({ ...props }) => (
//   <>
//     <h2>{props.title}</h2>
//     <br />
//     <p>{props.description}</p>
//     <Button variant="primary" href={props.url} value="Link">Link</Button>
//     <hr />
//   </>
// );

export default function Resources() {
  return (
    <>
      <HeadDetails title="Resources" description="Making Nightlife Safer for Everyone" />
      <h1>Resources Page</h1>
      <div>
        {
          resourcesData.resources.map((resource) => <ResourcesCard {...resource} />)
        }
      </div>

    </>
  );
}
