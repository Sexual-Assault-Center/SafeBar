import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as ga from '../utils/ga';
import HeadDetails from '../components/HeadDetails';

export default function Bars() {
  const [query, setQuery] = useState('');

  const search = () => {
    ga.event({
      action: 'search',
      params: {
        search_term: query,
      },
    });
  };

  return (
    <div>
      <HeadDetails title="Bars" description="Making Nightlife Safer for Everyone" />
      <h1>Bars Page</h1>
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
      </div>
      <div>
        <Button onClick={() => search()}>Search</Button>
      </div>
    </div>
  );
}
