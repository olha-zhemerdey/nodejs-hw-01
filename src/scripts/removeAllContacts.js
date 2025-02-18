import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

const removeContacts = async () => {
    try {
      await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
      console.log('Contacts are removed successfully');
    } catch (error) {
      console.error('Error during the contact removing process:', error);
    }
  };

export const removeAllContacts = async () => {
    try {
        await removeContacts();
      } catch (error) {
        console.error(
          'An error occurred during the removeAllContacts process:',
          error,
        );
      }
};

removeAllContacts();
