import { useState, useEffect } from 'react';
import * as ga from '../utils/ga';
import barsData from '../barsData.json';
import Searchbar from '../components/Searchbar';
import BarCard from '../components/BarCard';
import HeadDetails from '../components/HeadDetails';
// import { getSearch } from '../utils/api';

export default function Bars() {
  const [query, setQuery] = useState('');
  const [bars, setBars] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setBars(barsData);
  }, [bars]);

  const search = () => {
    ga.event({
      action: 'search',
      params: {
        search_term: query,
      },
    });
    // getSearch(query).then((res) => res);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <HeadDetails title="Bars" description="Making Nightlife Safer for Everyone" />
      <h1>Bars Page</h1>
      <Searchbar onClick={() => search()} onChange={(e) => handleChange(e)} value={value}>Search</Searchbar>
      <div className="card-cont">
        {
          bars.map((bar) => <BarCard key={bar.id} {...bar} />)
        }
      </div>
    </>
  );
}
