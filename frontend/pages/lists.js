import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import Signin from '../components/SignIn';
import { useAuth } from '../utils/context/authContext';
import { getFavsByUid } from '../utils/api';
import FavCard from '../components/FavCard';

export default function Lists() {
  const { user } = useAuth();
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getFavsByUid(user.uid).then((favArray) => {
      if (isMounted) {
        setFavs(favArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [user.uid]);

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
            {favs.map((favObj) => (
              <FavCard
                key={favObj.uuid}
                {...favObj.bar}
              />
            ))}
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
