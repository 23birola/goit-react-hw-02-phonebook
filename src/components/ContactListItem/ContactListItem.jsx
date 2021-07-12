
const ContactListItem = ({contact, deleteContact}) => {
return (
    <li>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>);
}
    
export default ContactListItem;