import React from 'react';
import HeadDetails from '../components/HeadDetails';
import resourcesData from '../resourcesData.json';
import ResourcesCard from '../components/ResourcesCard';

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
