/* eslint-disable no-nested-ternary, implicit-arrow-linebreak, operator-linebreak */
import { useState, useEffect } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';
import * as ga from '../utils/ga';
import Searchbar from '../components/Searchbar';
import BarCard from '../components/BarCard';
import Map from '../components/Map';
import HeadDetails from '../components/HeadDetails';
import { useAuth } from '../utils/context/authContext';
import { getRequest } from '../utils/api';

export default function Bars() {
  const [allBars, setAllBars] = useState([]);
  const [query, setQuery] = useState('');
  const [barsData, setBarsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getRequest(`bars/by-uid/${user.uid}`)
        .then((barData) => {
          const sorted = barData.sort((a, b) => b.is_safebar - a.is_safebar);
          setAllBars(sorted);
          setBarsData(sorted);
        })
        .then(() => setLoading(false));
    } else {
      getRequest('bars')
        .then((barData) => {
          const sorted = barData.sort((a, b) => b.is_safebar - a.is_safebar);
          setAllBars(sorted);
          setBarsData(sorted);
        })
        .then(() => setLoading(false));
    }
  }, [user]);

  const search = () => {
    ga.event({
      action: 'search',
      params: {
        search_term: query,
      },
    });

    // TODO: Needs to be refactored to get search results from API
    setAllBars(
      barsData.filter(
        (bar) =>
          bar.city.toLowerCase().includes(query.toLowerCase()) ||
          bar.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const clearSearch = () => {
    setQuery('');
    setAllBars(barsData);
  };

  const handleChange = (e) => {
    if (e.target.value) {
      setQuery(e.target.value);
      search();
    } else {
      clearSearch();
    }
  };

  return (
    <>
      <HeadDetails
        title="Bars"
        description="Making Nightlife Safer for Everyone"
      />
      <div className="d-flex flex-row no-wrap align-items-center justify-content-center">
        <BsShieldFillCheck className="shieldIcon me-2 mb-2" size={25} />
        <h2>SAFEBAR CERTIFIED BARS</h2>
      </div>
      <div className="searchContainer">
        <Searchbar
          onChange={handleChange}
          value={query}
          clear={clearSearch}
          placeholder="explore bars by name or city"
        />
      </div>
      <Map bars={allBars} />
      <div className="card-cont d-flex flex-wrap justify-content-center">
        {loading ? (
          <Spinner animation="border" variant="secondary" />
        ) : allBars.length ? (
          allBars.map((bar) => <BarCard key={bar.uuid} {...bar} />)
        ) : (
          <h2>No Bars</h2>
        )}
      </div>
    </>
  );
}
