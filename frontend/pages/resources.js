import React, { useEffect, useState } from 'react';
import HeadDetails from '../components/HeadDetails';
import ResourcesCard from '../components/ResourcesCard';
import { getResources } from '../utils/api';

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources().then((res) => {
      setResources(res);
    });
  }, [resources]);

  return (
    <>
      <HeadDetails title="Resources" description="Making Nightlife Safer for Everyone" />
      <h1>Resources Page</h1>
      <div>
        {
          resources.map((resource) => <ResourcesCard key={resource.uuid} {...resource} />)
        }
      </div>
    </>
  );
}
