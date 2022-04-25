/* eslint-disable quotes */
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as ga from '../utils/ga';

export default function Bars() {
  const [query, setQuery] = useState('');

  const search = () => {
    ga.event({
      action: "search",
      params: {
        search_term: query,
      },
    });
  };

  return (
    <div>
      <div>
        <input type="text" onChange={(event) => setQuery(event.target.value)} />
      </div>
      <div>
        <Button onClick={() => search()}>Search</Button>
      </div>
    </div>
  );
}
