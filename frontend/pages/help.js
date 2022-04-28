import HeadDetails from '../components/HeadDetails';
import { userHelp, barHelp } from '../help.json';
import AccordionComp from '../components/Accordion';

export default function Help() {
  return (
    <>
      <HeadDetails title="Get Help" description="Making Nightlife Safer for Everyone" />
      <h1>Help</h1>
      <div id="helpDiv">
        <AccordionComp title={userHelp.title}>
          <div id="userDiv">
            <p>{userHelp.emergency}</p>
            <p>{userHelp.hotline}</p>
            <a href={userHelp.chatUrl}>{userHelp.chat}</a>
          </div>
        </AccordionComp>
        <AccordionComp title={barHelp.title}>
          <div id="barDiv">
            <p>{barHelp.direct}</p>
            <p>{barHelp.distract}</p>
            <p>{barHelp.delegate}</p>
            <p>{barHelp.delay}</p>
            <p>{barHelp.document}</p>
          </div>
        </AccordionComp>
      </div>
    </>
  );
}
