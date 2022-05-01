import React, { useEffect, useState } from 'react';
import HeadDetails from '../components/HeadDetails';
import ResourcesCard from '../components/ResourcesCard';
import { getRequest } from '../utils/api';

export default function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getRequest('resources').then((res) => {
      setResources(res);
    });
  }, []);

  return (
    <>
      <HeadDetails title="Resources" description="Making Nightlife Safer for Everyone" />
      <h1>RESOURCES</h1>
      <div>
        {
          resources.map((resource) => <ResourcesCard key={resource.uuid} {...resource} />)
        }
      </div>
    </>
  );
}
