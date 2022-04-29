import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';
import { useAuth } from '../utils/context/authContext';
import { getBarsByUid } from '../utils/api';
import BarCard from '../components/BarCard';

export default function Lists() {
  const [favs, setFavs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let isMounted = true;
    getBarsByUid().then((favArray) => {
      if (isMounted) {
        setFavs(favArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [favs]);

  return (
    <>
      <HeadDetails
        title="Your Favorites"
        description="Making Nightlife Safer for Everyone"
      />
      {Object.keys(user).length ? (
        <>
          <h1 className="text-center">Favorites</h1>
          <div>
            {favs.map((fav) => (
            <BarCard
              key={fav.id}
              fav={fav}
            />
          ))}
          </div>
        </>
      ) : (
        <>
          <Signin title="TO SEE YOUR FAVORITES" />
        </>
      )}
    </>
  );
}
