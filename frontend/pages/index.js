/* eslint-disable object-curly-newline */
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import HeadDetails from '../components/HeadDetails';
import { cardData } from '../data/homepageCards';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <div>
      <HeadDetails
        title="SAFEBAR"
        description="Making Nightlife Safer for Everyone"
      />
      <h2 className="my-0">GET INVOLVED</h2>
      <div className="card-cont d-flex flex-wrap justify-content-center align-items-center">
        {cardData.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            buttonText={card.buttonText}
            img={card.image}
            text={card.text}
            onClick={(e) => {
              e.preventDefault();
              window.open(card.href, 'target');
            }}
            disabledButton={card.disabledButton}
          />
        ))}
      </div>
      <div className="social-banner d-flex flex-row flex-wrap align-items-center justify-content-evenly space-between">
        <a
          href="https://twitter.com/NashvilleSAC"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="footerIcon text-white m-2" size={30} />
        </a>
        <a
          href="https://www.facebook.com/nashvilleSAC"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="footerIcon text-white m-2" size={30} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCOBCjNfljUuBR8h1I7f531A"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube className="footerIcon text-white m-2" size={30} />
        </a>
        <a
          href="https://www.instagram.com/nashvillesac/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="footerIcon text-white m-2" size={30} />
        </a>
      </div>
    </div>
  );
}
