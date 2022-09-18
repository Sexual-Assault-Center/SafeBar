/* eslint-disable no-nested-ternary, react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';
import { useAuth } from '../utils/context/authContext';
import { getFavsByUid } from '../utils/api';
import FavCard from '../components/FavCard';

export default function Lists() {
  const { user } = useAuth();
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFavs = () => {
    if (!Object.keys(user).length) {
      return;
    }
    getFavsByUid(user.uid)
      .then((favArray) => {
        setFavs(favArray);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <>
      <HeadDetails
        title="Your Saved Bars"
        description="Making Nightlife Safer for Everyone"
      />
      {Object.keys(user).length ? (
        <>
          <h1 className="text-center">SAVED BARS</h1>
          <div className="card-cont d-flex flex-wrap justify-content-center">
            {loading ? (
              <Spinner animation="border" variant="secondary" />
            ) : favs.length ? (
              favs.map((favObj) => (
                <FavCard
                  key={favObj.uuid}
                  id={favObj.uuid}
                  {...favObj.bar}
                  getFavs={getFavs}
                />
              ))
            ) : (
              <h2>No Saved Bars</h2>
            )}
          </div>
        </>
      ) : (
        <Signin title="TO SEE YOUR SAVED BARS" />
      )}
    </>
  );
}
