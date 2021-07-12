import ContactListItem from "../ContactListItem/ContactListItem";


const ContactList = ({ contacts, deleteContact }) => {
  return (
      <ul>
        {contacts.map(contact =>
          <ContactListItem contact={contact} key={contact.id} deleteContact={deleteContact}/>)}
      </ul>);
}

export default ContactList;