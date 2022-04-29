/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
// import * as ga from '../utils/ga';
import barsData from '../barsData.json';
// import Searchbar from '../components/Searchbar';
import BarCard from '../components/BarCard';
import HeadDetails from '../components/HeadDetails';
import { useAuth } from '../utils/context/authContext';
import { signInUser } from '../utils/auth';

// import { getSearch } from '../utils/api';

export default function Bars() {
  // const [query, setQuery] = useState('');
  const [bars, setBars] = useState([]);
  // const [value, setValue] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    setBars(barsData);
  }, [bars]);

  // const search = () => {
  //   ga.event({
  //     action: 'search',
  //     params: {
  //       search_term: query,
  //     },
  //   });
  //   // getSearch(query).then((res) => res);
  // };

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  //   setValue(e.target.value);
  // };

  const checkUserStatus = () => {
    if (!Object.keys(user).length) {
      return signInUser();
    }

    // send to endpoint
  };

  return (
    <>
      <HeadDetails title="Bars" description="Making Nightlife Safer for Everyone" />
      {/* <Searchbar onClick={() => search()} onChange={(e) => handleChange(e)} value={value}>Search</Searchbar> */}
      <div className="card-cont d-flex flex-wrap">
        {
          bars.map((bar) => <BarCard key={bar.id} {...bar} user={user} func={checkUserStatus} />)
        }
      </div>
    </>
  );
}
