import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import HeadDetails from '../components/HeadDetails';
import { getRequest } from '../utils/api';

export default function Faqs() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getRequest('faqs').then((faqsArray) => {
      if (isMounted) {
        const sortedArray = faqsArray.sort((a, b) => {
          const aItem = a.question;
          const bItem = b.question;
          if (aItem < bItem) {
            return -1;
          }
          if (aItem > bItem) {
            return 1;
          }
          return 0;
        });
        setFaqs(sortedArray);
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
        <Accordion className="accord">
          {faqs.map((item) => (
            <Accordion.Item eventKey={item.uuid} key={item.uuid}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body className="accord-text">{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}
