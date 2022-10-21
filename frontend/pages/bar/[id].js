// USE FOR BAR DETAILS IF WE ARE ABLE TO GET THIS FAR
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import HeadDetails from '../../components/HeadDetails';
import BarDetails from '../../components/BarDetails';
import Map from '../../components/Map';
import { getRequest } from '../../utils/api';

export default function Bar() {
  const router = useRouter();
  const [bar, setBar] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    getRequest(`bars/${router.query.id}`).then(setBar);
  }, [router.isReady, router.query.id]);

  return (
    <>
      <HeadDetails
        title="Bar Details"
        description="Making Nightlife Safer for Everyone"
      />
      <h1>Bar Details - {bar.name}</h1>
      {/* <div class="d-none d-md-block"> */}
      <Map bars={[bar]} />
      {/* </div> */}
      <BarDetails bar={bar} />;
    </>
  );
}
