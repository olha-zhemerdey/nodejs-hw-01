import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import {  writeContacts } from '../utils//writeContacts.js';

const generateContacts = async (number) => {
    try{
    let contactList = await readContacts();
    const newContactList =  Array.from({ length: number }, createFakeContact);
    contactList = contactList.concat(newContactList);
    await writeContacts(contactList);
    console.log(`${number} new contacts have been successfully generated.`);
}
catch (error) {
    console.error(
      'An error occurred during the generateContacts process:',
      error,
    );
  }
};


generateContacts(5);
