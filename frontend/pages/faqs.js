import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import { getAllFAQs } from '../utils/api';

export default function Faqs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllFAQs().then((array) => {
      if (isMounted) {
        setFaqs(array);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

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
