import { useState, useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import contacts from '../contacts.json';
import Contact from '../components/Contact';

export default function Contacts() {
  const [contactsList, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contacts.contacts);
  }, []);
  return (
    <>
      <HeadDetails title="Contacts" description="Making Nightlife Safer for Everyone" />
      <h1>Contacts Page</h1>
      {contactsList.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </>
  );
}
