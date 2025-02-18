import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
 try{
    return await readContacts();
    }
    catch (error) {
        console.error(
          'An error occurred during the getAllContacts process:',
          error,
        );
      }
};

console.log(await getAllContacts());
