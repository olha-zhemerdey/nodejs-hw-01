import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import {  writeContacts } from '../utils//writeContacts.js';

export const addOneContact = async (number = 1) => {
    try{
        let contactList = await readContacts();
        const newContactList =  Array.from({ length: number }, createFakeContact);
        contactList = contactList.concat(newContactList);
        await writeContacts(contactList);
        console.log(`${number} new contact have been successfully generated.`);
    }
    catch (error) {
        console.error(
          'An error occurred during the generateContacts process:',
          error,
        );
      }
};

addOneContact();
