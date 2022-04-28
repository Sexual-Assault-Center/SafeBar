// import { useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
// import faqs from '../faq.json';

export default function Faqs() {
  return (
    <>
      <HeadDetails title="FAQs" description="Making Nightlife Safer for Everyone" />
      <h1>FAQs</h1>
      <div id="faqDiv">
        {/* {faqs.faqs.map((item) => {
          <div className="faq-item">
            <p className="faq-question">{item.question}</p>
            <p className="faq-answer">{item.answer}</p>
          </div>;
        })} */}
      </div>
    </>
  );
}
