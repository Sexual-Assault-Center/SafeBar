import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import Contact from '../components/Contact';
import { getRequest } from '../utils/api';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getRequest('contacts').then(setContacts);
  }, []);
  return (
    <>
      <HeadDetails title="Contacts" description="Making Nightlife Safer for Everyone" />
      <h1>CONTACTS</h1>
      {contacts.map((contact) => (
        <Contact
          key={contact.uuid}
          contact={contact}
        />
      ))}
    </>
  );
}
