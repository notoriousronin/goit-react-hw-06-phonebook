import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <ContactList></ContactList>
      <Filter></Filter>
    </div>
  );
};
