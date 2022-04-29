/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';
import * as ga from '../utils/ga';
import Searchbar from '../components/Searchbar';
import BarCard from '../components/BarCard';
import HeadDetails from '../components/HeadDetails';
import { useAuth } from '../utils/context/authContext';
import { signInUser } from '../utils/auth';
import { getAllBars } from '../utils/api';

export default function Bars() {
  const [query, setQuery] = useState('');
  const [safebars, setSafebars] = useState([]);
  const [bars, setBars] = useState([]);
  const [barsData, setBarsData] = useState([]);
  const [value, setValue] = useState('');

  const { user } = useAuth();

  useEffect(() => {
    getAllBars().then((barData) => {
      setSafebars(barData.filter((bar) => bar.safebar));
      setBars(barData.filter((bar) => !bar.safebar));
      setBarsData(bars.concat(safebars));
    });
  }, []);

  const search = () => {
    ga.event({
      action: 'search',
      params: {
        search_term: query,
      },
    });
    setBarsData(() => {
      barsData.filter((bar) => bar.city.includes(query.toLowerCase()) || bar.name.includes(query.toLowerCase()));
    })
    
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    setValue(e.target.value);
  };

  const checkUserStatus = () => {
    if (!Object.keys(user).length) {
      return signInUser();
    }

    // send to endpoint
  };

  return (
    <>
      <HeadDetails title="Bars" description="Making Nightlife Safer for Everyone" />
      <Searchbar onClick={() => search()} onChange={(e) => handleChange(e)} value={value}>Search</Searchbar>
      <div className="card-cont d-flex flex-wrap">
        {
          safebars.map((bar) => <BarCard key={bar.uuid} {...bar} user={user} func={checkUserStatus} />)
        }
        {
          bars.map((bar) => <BarCard key={bar.uuid} {...bar} user={user} func={checkUserStatus} />)
        }
      </div>
    </>
  );
}
