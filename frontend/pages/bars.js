/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';
import * as ga from '../utils/ga';
import Searchbar from '../components/Searchbar';
import BarCard from '../components/BarCard';
import HeadDetails from '../components/HeadDetails';
import { useAuth } from '../utils/context/authContext';
import { getRequest } from '../utils/api';

export default function Bars() {
  const [allBars, setAllBars] = useState([]);
  const [query, setQuery] = useState('');
  const [barsData, setBarsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  // TODO: needs to be refactored for pagination
  const getBars = () => {
    getRequest('bars').then((barData) => {
      const sorted = barData.sort((a, b) => b.is_safebar - a.is_safebar);
      setAllBars(sorted);
      setBarsData(sorted);
    }).then(() => setLoading(false));
  };

  useEffect(() => {
    getBars();
  }, []);

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
        (bar) => bar.city.toLowerCase().includes(query.toLowerCase()) || bar.name.toLowerCase().includes(query.toLowerCase()),
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
        >
          Search
        </Searchbar>
      </div>
      <div className="card-cont d-flex flex-wrap justify-content-center">
        {loading ? (
          <Spinner animation="border" variant="secondary" />
        ) : allBars.length ? (
          allBars.map((bar) => (
            <BarCard
              key={bar.uuid}
              {...bar}
              user={user}
            />
          ))
        ) : (
          <h2>No Bars</h2>
        )}
      </div>
    </>
  );
}
