import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
    try{
        const contactsQuantity = await readContacts();
        return contactsQuantity.length;
    }
    catch (error) {
        console.error(
          'An error occurred during the countContacts process:',
          error,
        );
    }
};

console.log(await countContacts());
