import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'contactStorage/contactAPI';
import styles from '../Form/Form.module.css';

export const Contact = ({ id, name, number }) => {
  const [deleteContacts, { isLoading }] = useDeleteContactMutation();

  return (
    <li id={id} className={styles.item}>
      {name}: {number}
      <button
        className={styles.button}
        onClick={() => deleteContacts(id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
