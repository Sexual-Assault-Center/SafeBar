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
    getBarsByUid(user.uid).then((favArray) => {
      if (isMounted) {
        setFavs([favArray]);
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
          <h1 className="text-center">SAVES</h1>
          <div>
            {favs.map((favObj) => (
              <BarCard
                key={favObj.id}
                fav={favObj}
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
