// import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player/lazy';
// import Link from 'react-router-dom';
// import Image from 'next/image';
import HeadDetails from '../components/HeadDetails';
// import { getLanding } from '../utils/api';

export default function Home() {
  // const [landing, setLanding] = useState({});

  // useEffect(() => {
  //   let isMounted = true;
  //   getLanding().then((landingObj) => {
  //     if (isMounted) {
  //       setLanding(landingObj);
  //     }
  //   });
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <div>
      <HeadDetails title="Welcome" description="Making Nightlife Safer for Everyone" />
      <h1>Home Page</h1>
      {/* <div mediaUrl={landing.mediaUrl} isVideo={landing.isVideo} clickUrl="foobar">
        {landing.isVideo
          ? <ReactPlayer url={landing.mediaUrl} />
          : (
            <Link to="clickUrl">
              <Image src={landing.mediaUrl} alt={landing.title} />
            </Link>
          )}
      </div> */}
    </div>
  );
}
