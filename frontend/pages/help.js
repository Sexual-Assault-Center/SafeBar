/* eslint-disable react/no-danger */
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import HeadDetails from '../components/HeadDetails';
import { userHelp, barHelp } from '../data/help';

export default function Help() {
  return (
    <>
      <HeadDetails
        title="Get Help"
        description="Making Nightlife Safer for Everyone"
      />
      <div id="helpDiv">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{userHelp.title}</Accordion.Header>
            <Accordion.Body>
              <p>{userHelp.emergency}</p>
              <p dangerouslySetInnerHTML={{ __html: userHelp.hotline }} />
              <Button className="btn btn-primary" onClick={() => { window.open(userHelp.chatUrl, '_blank'); }} rel="noreferrer">{userHelp.chat}</Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{barHelp.title}</Accordion.Header>
            <Accordion.Body>
              <div id="barDiv">
                <p dangerouslySetInnerHTML={{ __html: barHelp.direct }} />
                <p dangerouslySetInnerHTML={{ __html: barHelp.distract }} />
                <p dangerouslySetInnerHTML={{ __html: barHelp.delegate }} />
                <p dangerouslySetInnerHTML={{ __html: barHelp.delay }} />
                <p dangerouslySetInnerHTML={{ __html: barHelp.document }} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
