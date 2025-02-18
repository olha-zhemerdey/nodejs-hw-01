import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'UTF-8'); 
        return JSON.parse(data);
      } catch (error) {
        console.error('Error during  reading contact file:', error);
        return [];
      }
};
