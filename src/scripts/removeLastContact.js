import { readContacts } from '../utils/readContacts.js';
import {  writeContacts } from '../utils//writeContacts.js';

export const removeLastContact = async () => {
    try {
        let contactList = await readContacts();
        if (!contactList.length) return;
        contactList.pop();
        await writeContacts(contactList);
        console.log('Last contact removed and file updated successfully');
      } catch (error) {
        console.error('Error during the removeLastContact process:', error);
      }
};

removeLastContact();
