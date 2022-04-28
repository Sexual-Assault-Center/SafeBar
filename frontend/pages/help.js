import HeadDetails from '../components/HeadDetails';
import { userHelp, barHelp } from '../help.json';

export default function Help() {
  return (
    <>
      <HeadDetails title="Get Help" description="Making Nightlife Safer for Everyone" />
      <h1>Help</h1>
      <div id="helpDiv">
        <h5>{userHelp.title}</h5>
        <h5>{barHelp.title}</h5>
      </div>
    </>
  );
}
