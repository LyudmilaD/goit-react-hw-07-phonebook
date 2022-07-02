import Form from '././components/Form/Form';
import ContactList from '././components/ContactList/ContactList';
import Filter from '././components/Filter/Filter';
import styles from '././components/Form/Form.module.css';
export const App = () => {
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles.title}>Phonebook</h1>
      </div>
      <Form />
      <div className={styles.section}>
        <h2 className={styles.title}>Contacts</h2>
      </div>
      <Filter />
      <ContactList />
    </>
  );
};
