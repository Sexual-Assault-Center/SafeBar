import { Card } from 'react-bootstrap';
import ButtonComp from '../components/Button';
import HeadDetails from '../components/HeadDetails';

export default function Training() {
  return (
    <>
      <HeadDetails title="Training" description="Making Nightlife Safer for Everyone" />
      <Card className="text-center px-5 py-2">
        <Card.Title>What is it?</Card.Title>
        <Card.Header>Safe Bar TN is a network of bars, restaurants, and community organizations working together to prevent sexual violence and create safe nightlife spaces.</Card.Header>
        <Card.Body>
          <Card.Text>
            <ul>
              <li>Training is FREE
              </li>
              <li>In-person training
              </li>
              <li>Training includes:
                <ul>
                  <li>How to recognize signs of potential assault or unwanted behaviors.</li>
                  <li>How to safely intervene or respond to sexual assault</li>
                  <li>How alcohol and drugs can play a role in sexual assault</li>
                </ul>
              </li>
            </ul>
          </Card.Text>
          <Card.Title>Benefits:</Card.Title>
          <Card.Text>
            <ul>
              <li>A window cling letting patrons know that your staff is trained to respond to sexual harassment and discrimination.</li>
              <li>Access to drug detection coasters, detect presence of GHB and Ketamine.</li>
              <li>Access to ambassadors and trainers for guidance.</li>
              <li>Revenue back to your bar! Your bar will be highlighted on our website and social media. </li>
            </ul>
          </Card.Text>
        </Card.Body>
        <ButtonComp buttonText="train now!" />
      </Card>
    </>
  );
}
