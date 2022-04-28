import HeadDetails from '../components/HeadDetails';

export default function Help() {
  return (
    <>
      <HeadDetails title="Get Help" description="Making Nightlife Safer for Everyone" />
      <h1>Help</h1>
      <div id="userHelp">
        <h4>I Need Help</h4>
        <ul>
          <li>Emergency: 911</li>
          <li>Hotline: (866) 811-7473</li>
          <li><a href="https://na0messaging.icarol.com/ConsumerRegistration.aspx?org=143110&pid=640&cc=en-US">Chat</a></li>
        </ul>
      </div>
      <div id="Bar Help">
        <h4>Help Someone Else</h4>
        <div id="fiveDsDiv">
          <ul>
            <li><b>Direct:</b> Step in and address the situation directly. This might look like saying, “That’s not cool. Please stop.” or “Hey, leave them alone.” This technique tends to work better when the person that you’re trying to stop is someone that knows and trusts you.
            </li>
            <li><b>Distract:</b> Distract either person in the situation to intervene by shifting the focus of the situation so that the victim can leave the situation. This might look like spilling a drink on purpose or otherwise diverting attention in another direction.
            </li>
            <li><b>Delegate:</b> Find others who can help you to intervene in the situation. This might look like asking a friend to intervene with you or calling security. If you don’t know either person in the situation, you can also ask around to see if someone else does and will check in with them. You can also call the Sexual Assault Center’s 24/7 Crisis Hotline Number – 1-866-811-7473 (RISE).
            </li>
            <li><b>Delay:</b> Create time and space to better understand the situation. This form of intervention is especially helpful for introverts and for folks that are traditionally marginalized (and thus it may not be safe for them to jump in or corral other folks). If immediate danger is not detected, keep an eye on the victim and check-in with them later. If immediate danger is detected, use a distraction technique in combination with the delay technique to stop a situation from escalating by creating that time or space needed to check-in.
            </li>
            <li><b>Document:</b> It can be helpful for a person being targeted to have a recording of the incident. That said, is anyone else supporting? If not, use one of the other 4 D’s before documenting, as documentation is helpful after the fact, but does not prevent a situation from happening. Check in with the person and ask them what they’d like to do with the footage. Be aware of local laws about recording in public.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
