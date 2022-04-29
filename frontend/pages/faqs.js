import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import HeadDetails from '../components/HeadDetails';
import { getAllFAQs } from '../utils/api';

export default function Faqs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getAllFAQs().then((faqsArray) => {
      if (isMounted) {
        setFaqs(faqsArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HeadDetails
        title="FAQs"
        description="Making Nightlife Safer for Everyone"
      />
      <h1>FAQs</h1>
      <div id="faqDiv">
        <Accordion>
          {faqs.map((item) => (
            <Accordion.Item eventKey={item.uuid} key={item.uuid}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}
