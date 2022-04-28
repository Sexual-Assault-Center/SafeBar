import { useEffect } from 'react';
import HeadDetails from '../components/HeadDetails';
import contacts from '../contacts.json';

export default function Contacts() {
  // const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, []);
  return (
    <>
      <HeadDetails title="Contacts" description="Making Nightlife Safer for Everyone" />
      <h1>Contacts Page</h1>
      {contacts.contacts.map((con) => (
        <h2>{con.name}</h2>
      ))}
      <h2>{contacts.contacts[0].name}</h2>

      {/* {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
         />
      ))} */}
    </>
  );
}
