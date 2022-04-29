// import { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player/lazy';
// import Link from 'react-router-dom';
// import Image from 'next/image';
import {
  BsTwitter, BsFacebook, BsYoutube, BsInstagram,
} from 'react-icons/bs';
import HeadDetails from '../components/HeadDetails';
import { cardData } from '../data/homepageCards';
import FeatureCard from '../components/FeatureCard';
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
      <HeadDetails
        title="Welcome"
        description="Making Nightlife Safer for Everyone"
      />
      <h2>SPOTLIGHT ON:</h2>
      {/* <div mediaUrl={landing.mediaUrl} isVideo={landing.isVideo} clickUrl="foobar">
        {landing.isVideo
          ? <ReactPlayer url={landing.mediaUrl} />
          : (
            <Link to="clickUrl">
              <Image src={landing.mediaUrl} alt={landing.title} />
            </Link>
          )}
      </div> */}
      <div className="card-cont d-flex flex-wrap justify-content-center align-items-center">
        {cardData.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            buttonText={card.buttonText}
            img={card.image}
            text={card.text}
            href={card.href}
            disabledButton={card.disabledButton}
          />
        ))}
      </div>
      <div className="social-banner d-flex flex-row flex-wrap align-items-center justify-content-evenly space-between">
        <a href="https://twitter.com/NashvilleSAC">
          <BsTwitter className="footerIcon text-white m-2" size={30} />
        </a>
        <a href="https://www.facebook.com/nashvilleSAC">
          <BsFacebook className="footerIcon text-white m-2" size={30} />
        </a>
        <a href="https://www.youtube.com/channel/UCOBCjNfljUuBR8h1I7f531A">
          <BsYoutube className="footerIcon text-white m-2" size={30} />
        </a>
        <a href="https://www.instagram.com/nashvillesac/">
          <BsInstagram className="footerIcon text-white m-2" size={30} />
        </a>
      </div>
    </div>
  );
}
