import HeadDetails from '../components/HeadDetails';

export default function Faqs() {
  return (
    <>
      <HeadDetails title="FAQs" description="Making Nightlife Safer for Everyone" />
      <h1>FAQs</h1>
      <div id="faqDiv">
        <div className="faq-item">
          <p className="faq-question">What makes a bar a safe bar?</p>
          <p className="faq-answer">We give bar staff the tools needed to recognize and respond to sexual harassment and assault. Safe Bar is a primary prevention program, so we empower training attendees to be a part of the solution to prevent sexual violence from happening in the first place. We teach individuals how to intervene safely and create safer environments for everyone.</p>
        </div>
        <div className="faq-item">
          <p className="faq-question">How does a bar recertify?</p>
          <p className="faq-answer">A bar is certified as a Safe Bar after at least 50% of the bar staff and one manager/owner go through the 1.5-hour training. We provide them with resources and check-in with them every 6 months to recertify if they have new employees or less than 50% of their staff trained.</p>
        </div>
        <div className="faq-item">
          <p className="faq-question">Can safe bar status be removed? If so, how?</p>
          <p className="faq-answer">There are some requirements to being certified as a Safe Bar and if they do not meet the standards, we will not be able to consider them a Safe Bar. </p>
          <ol>
            <li>50% of bar staff and one owner/manager must be trained.</li>
            <li>They must display the Angel Shot poster (Angel Shot is a codeword to get help from the bar) and must display the Safe Bar door/window cling.</li>
            <li>We ask bars to keep 3-ring a binder that we provide them of resources to reference for behind the bar. </li>
            <li>They must engage in Safe Bar e-mail check-ins every 6 months. In this email check-ins, we confirm that 50% of the staff is still trained, and we provide more training or resources if needed. </li>
            <li>They must be an alcohol-serving venue in Tennessee.</li>
          </ol>
        </div>
        <div className="faq-item">
          <p className="faq-question">Is training the only way for a bar to become safe?</p>
          <p className="faq-answer">Safe Bar isn’t the only way that a bar can become safer - I’ve heard of individual bars creating their own protocols or forms of employee onboarding training. Becoming a safer establishment can take many different forms with varying levels of involvement.</p>
          <p>That said, Safe Bar is a community-based group across the whole state of Tennessee that works to create a standard within the alcohol-serving industry. We are having conversations that aren’t always happening, and we want to be a community for others that feel empowered to get involved. The Safe Bar training and program provides constant support for those that are involved</p>
        </div>
      </div>
    </>
  );
}
