import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import Contact from '../components/Contact';
import { getContacts } from '../utils/api';

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);
  return (
    <>
      <HeadDetails title="Contacts" description="Making Nightlife Safer for Everyone" />
      <h1>Contacts Page</h1>
      {contacts.map((contact) => (
        <Contact
          key={contact.uuid}
          contact={contact}
        />
      ))}
    </>
  );
}
