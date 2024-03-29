import { Card } from 'react-bootstrap';
import ButtonComp from '../components/Button';
import HeadDetails from '../components/HeadDetails';
import NAVIGATION from '../constants/navigation';

export default function Training() {
  return (
    <>
      <HeadDetails
        title="Training"
        description="Making Nightlife Safer for Everyone"
      />
      <h2>SAFEBAR TRAINING</h2>
      <Card className="m-auto training-style">
        <Card.Title className="text-center"><br />What is it?<br /></Card.Title>
        <Card.Header className="text-center cardBodyText">
          Safe Bar TN is a network of bars, restaurants, and community
          organizations working together to prevent sexual violence and create
          safe nightlife spaces.
        </Card.Header>
        <Card.Body className="cardBodyText">
          <ul>
            <li>Training is FREE</li>
            <li>In-person training</li>
            <li>
              Training includes:
              <ul>
                <li>
                  How to recognize signs of potential assault or unwanted
                  behaviors.
                </li>
                <li>How to safely intervene or respond to sexual assault</li>
                <li>How alcohol and drugs can play a role in sexual assault</li>
              </ul>
            </li>
          </ul>
          <Card.Title>Benefits:</Card.Title>
          <ul>
            <li>
              A window cling letting patrons know that your staff is trained to
              respond to sexual harassment and discrimination.
            </li>
            <li>
              Access to drug detection coasters, detect presence of GHB and
              Ketamine.
            </li>
            <li>Access to ambassadors and trainers for guidance.</li>
            <li>
              Revenue back to your bar! Your bar will be highlighted on our
              website and social media.{' '}
            </li>
          </ul>
        </Card.Body>
        <ButtonComp
          buttonText="SIGN UP FOR TRAINING"
          onClick={(e) => {
            e.preventDefault();
            window.open(NAVIGATION.TRAINING_LINK, '_blank');
          }}
        />
      </Card>
    </>
  );
}
