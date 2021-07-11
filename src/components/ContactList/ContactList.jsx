import ContactListItem from "../ContactListItem/ContactListItem";


const ContactList = ({ contacts, filterByName }) => {
  return (
      <ul>
        {contacts.map(contact =>
            <ContactListItem contact={contact} key={contact.id} />)}
      </ul>);
}

export default ContactList;