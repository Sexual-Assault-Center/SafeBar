import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';
import { useAuth } from '../utils/context/authContext';
import { getFavsByUid } from '../utils/api';
import FavCard from '../components/FavCard';

export default function Lists() {
  const { user } = useAuth();
  const [favs, setFavs] = useState([]);

  const getFavs = () => {
    getFavsByUid(user.uid).then((favArray) => {
      setFavs(favArray);
    });
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
          <div>
            {
              favs.length ? (
                favs.map((favObj) => (
                  <FavCard
                    key={favObj.uuid}
                    id={favObj.uuid}
                    {...favObj.bar}
                    getFavs={getFavs}
                  />
                ))
              ) : <h2>No Saved Bars</h2>
            }
          </div>
        </>
      ) : (
        <>
          <Signin title="TO SEE YOUR SAVED BARS" />
        </>
      )}
    </>
  );
}
