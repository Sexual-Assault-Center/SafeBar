import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import { getAllFAQs } from '../utils/api';

export default function Faqs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getAllFAQs().then(setFaqs);
  }, [faqs]);
  return (
    <>
      <HeadDetails title="FAQs" description="Making Nightlife Safer for Everyone" />
      <h1>FAQs</h1>
      <div id="faqDiv">
        {faqs.map((item) => (
          <div className="faq-item">
            <p className="faq-question">{item.question}</p>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
}
